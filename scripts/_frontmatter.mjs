// scripts/_frontmatter.mjs
//
// Parser de frontmatter YAML bem simples, compartilhado pelos scripts de
// validação. Suporta só o que a gente usa:
//
//   - chave de topo: valor
//   - chave de topo: (com lista embaixo)
//     - subchave: valor
//       outrachave: valor
//
// Sem aspas escapadas, sem âncoras, sem includes. Suficiente para o
// frontmatter de nós de trilha.

export function stripQuotes(s) {
  if (s == null) return s;
  const t = String(s).trim();
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
}

function coerceValue(raw) {
  const v = stripQuotes(raw);
  if (v === "true") return true;
  if (v === "false") return false;
  if (v === "null" || v === "~") return null;
  if (/^-?\d+$/.test(v)) return parseInt(v, 10);
  if (/^-?\d+\.\d+$/.test(v)) return parseFloat(v);
  return v;
}

export function parseFrontmatter(content) {
  if (typeof content !== "string" || !content.startsWith("---\n") && !content.startsWith("---\r\n")) {
    return null;
  }
  const after = content[3] === "\r" ? 5 : 4;
  const end = content.indexOf("\n---", after);
  if (end === -1) return null;
  const block = content.slice(after, end);
  const lines = block.split(/\r?\n/);

  const out = {};
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith("#")) {
      i++;
      continue;
    }

    // Tenta casar como "chave de topo: valor" (sem indentação).
    const top = line.match(/^([A-Za-z_][A-Za-z0-9_-]*)\s*:\s*(.*)$/);
    if (!top) {
      i++;
      continue;
    }
    const [, key, rawValue] = top;
    const trimmedValue = rawValue.trim();

    if (trimmedValue === "") {
      // Esperar lista na sequência.
      const list = [];
      i++;
      while (i < lines.length) {
        const listLine = lines[i];
        // Sai do loop se a linha for vazia seguida de não-indentado.
        if (listLine && !/^[\s\t]/.test(listLine)) break;

        const itemStart = listLine.match(/^\s*-\s+(.*)$/);
        if (itemStart) {
          const item = {};
          const firstPart = itemStart[1];
          const firstKV = firstPart.match(/^([A-Za-z_][A-Za-z0-9_-]*)\s*:\s*(.*)$/);
          if (firstKV) {
            const [, k, v] = firstKV;
            item[k] = coerceValue(v);
          }
          // Linhas de continuação: indentadas, começam com chave:
          let j = i + 1;
          while (j < lines.length) {
            const cont = lines[j];
            if (!cont.trim()) {
              j++;
              continue;
            }
            if (!/^[\s\t]/.test(cont)) break;
            // Se for "- " começando novo item, para.
            if (/^\s*-\s+/.test(cont)) break;
            const contKV = cont.match(/^\s+([A-Za-z_][A-Za-z0-9_-]*)\s*:\s*(.*)$/);
            if (contKV) {
              const [, k, v] = contKV;
              item[k] = coerceValue(v);
              j++;
            } else {
              break;
            }
          }
          list.push(item);
          i = j;
        } else {
          i++;
        }
      }
      out[key] = list;
    } else {
      out[key] = coerceValue(rawValue);
      i++;
    }
  }
  return out;
}
