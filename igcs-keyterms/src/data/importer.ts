import type { QAData, Question } from '../types';

interface RawQuestion {
  question: string;
  answer: string;
  paper: string;
  topic: string;
  tags?: string[];
  marks?: number;
  keywords?: string[];
}

function assignUnitIdByTopic(topic: string, answer: string, keywords: string[] | undefined, paper: string, question: string): string {
  const raw = topic.trim();
  const m = /^(\d+)\s+/.exec(raw);
  const num = m ? parseInt(m[1], 10) : NaN;
  const t = raw.replace(/^\d+\s+/, '').toLowerCase();
  const a = answer.toLowerCase();
  const k = Array.isArray(keywords) ? keywords.join(' ').toLowerCase() : '';
  const text = `${a} ${k}`;
  const paperIsP1 = /P1[1-3]$/i.test(paper);
  const paperIsP2 = /P2[1-3]$/i.test(paper);
  if (!Number.isNaN(num)) {
    if (paperIsP1) {
      if (num >= 1 && num <= 6) return `cs-${num}`;
    } else if (paperIsP2) {
      if (num === 1) return 'apl-7';
      if (num >= 2 && num <= 6) return 'apl-8';
      if (num === 9) return 'apl-9';
      if (num === 10) return 'apl-10';
    }
  }
  const qLower = question.toLowerCase();
  const isPseudo = /\bwrite\s+(pseudocode|statement|program)\b/.test(qLower) ||
                   /\b(pseudocode|code|program)\b/.test(k);
  if (isPseudo) {
    return 'apl-8';
  }
  if (/\bvirtual memory\b/.test(text)) return 'apl-8';
  if (/\bram\b|\brandom access memory\b/.test(text)) return 'cs-3';
  if (t.includes('numbers') || t.includes('text') || t.includes('images') || t.includes('sound') || t.includes('compression') || t.includes('encoding')) return 'cs-1';
  if (t.includes('modes') || t.includes('errors') || t.includes('packets') || t.includes('protocols') || t.includes('control') || t.includes('switching')) return 'cs-2';
  if (t.includes('architecture') || t.includes('memory') || t.includes('storage') || t.includes('i/o') || t.includes('systems') || t.includes('input') || t.includes('output')) return 'cs-3';
  if (t.includes('os') || t.includes('software') || t.includes('languages') || t.includes('libraries') || t.includes('tools') || t.includes('translator')) return 'cs-4';
  if (t.includes('web') || t.includes('security') || t.includes('cloud') || t.includes('communication') || t.includes('email') || t.includes('ftp') || t.includes('dns')) return 'cs-5';
  if (t.includes('validation') || t.includes('testing') || t.includes('trace')) return 'apl-7';
  if (t.includes('procedure') || t.includes('function') || t.includes('data type') || t.includes('program')) return 'apl-8';
  if (t.includes('sql') || t.includes('database') || a.includes('select') || a.includes('join')) return 'apl-9';
  if (t.includes('logic') || a.includes('truth table') || a.includes('and gate') || a.includes('or gate')) return 'apl-10';
  return 'apl-7';
}

function normalizeTopic(answer: string, topic: string): string {
  const t = topic.replace(/^\d+\s+/, '').trim();
  const a = answer.toUpperCase();
  if (a.includes('ROUND(') || /\bRANDOM\b/.test(a) || /\bDIV\b/.test(a) || /\bMOD\b/.test(a)) {
    return 'Lib routines';
  }
  return t;
}

function sanitizeSQL(answer: string): string {
  const A = answer.toUpperCase();
  const maybeSQL = /(SELECT|FROM|WHERE|ORDER BY|LIKE|BETWEEN|AND|OR|NOT|COUNT|SUM|AVG|MIN|MAX|GROUP BY|JOIN|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|HAVING)/.test(A);
  if (!maybeSQL) return answer;
  const unsupported = [
    'AVG','MIN','MAX','IN','INNER','LEFT','RIGHT','ON','HAVING','GROUP BY',
    'INSERT','UPDATE','DELETE','CREATE','DROP','ALTER','TRIGGER','PROCEDURE','VIEW',
    'GRANT','REVOKE','UNION','INTERSECT'
  ];
  const lines = String(answer).split('\n');
  const filtered = lines.filter(line => {
    const u = line.toUpperCase();
    return !unsupported.some(tok => u.includes(tok));
  });
  const out = filtered.join('\n').trim();
  return out.length > 0 ? out : answer;
}

function normalizePaperCode(paper: string): string {
  const p = paper.trim();
  if (/^[SWM]\d{2}P\d{2}$/i.test(p)) return p.toUpperCase();
  const m = /^(\d{4})\s+(May\/June|Oct\/Nov|Feb\/Mar)\s+Paper\s+(\d{2})$/i.exec(p);
  if (!m) return p;
  const year = m[1];
  const season = m[2].toLowerCase();
  const num = m[3];
  const yy = year.slice(2);
  const code = season === 'may/june' ? 'S' : season === 'oct/nov' ? 'W' : 'M';
  return `${code}${yy}P${num}`;
}
function shouldSkip(q: RawQuestion): boolean {
  const s = q.question.trim().toLowerCase();
  if (s.startsWith('identify four errors')) return true;
  if (s.startsWith('complete paragraph')) return true;
  if (s.startsWith('complete the paragraph')) return true;
  if (s.includes('interrupt process') && s.startsWith('complete')) return true;
  return false;
}

export function loadQAFromPapers(): QAData {
  const modules = {
    ...import.meta.glob('./papers/*.json', { eager: true }),
    ...import.meta.glob('./24paper1.json', { eager: true })
  };
  const out: QAData = {};
  for (const k in modules) {
    const mod = modules[k] as unknown;
    const data = (mod as { default?: unknown })?.default ?? mod;
    const arr: RawQuestion[] = Array.isArray(data) ? data as RawQuestion[] : extractQuestions(data);
    for (const rq of arr) {
      if (shouldSkip(rq)) continue;
      const ans = sanitizeSQL(rq.answer);
      const paperCode = normalizePaperCode(rq.paper);
      const unitId = assignUnitIdByTopic(rq.topic, ans, rq.keywords, paperCode, rq.question);
      const topicName = normalizeTopic(ans, rq.topic);
      const q: Question = {
        question: rq.question,
        answer: ans,
        paper: paperCode,
        topic: topicName,
        tags: rq.tags,
        marks: rq.marks,
        keywords: rq.keywords,
      };
      out[unitId] = out[unitId] || {};
      out[unitId][topicName] = out[unitId][topicName] || [];
      const bucket = out[unitId][topicName];
      const key = `${q.paper}::${q.question.trim()}`;
      const exists = bucket.some(x => `${x.paper}::${x.question.trim()}` === key);
      if (!exists) bucket.push(q);
    }
  }
  return out;
}

function extractQuestions(input: unknown): RawQuestion[] {
  const out: RawQuestion[] = [];
  const visit = (node: unknown) => {
    if (!node) return;
    if (Array.isArray(node)) {
      for (const item of node) visit(item);
      return;
    }
    if (typeof node === 'object') {
      const obj = node as Record<string, unknown>;
      if ('question' in obj && 'answer' in obj && 'paper' in obj && 'topic' in obj) {
        out.push(obj as unknown as RawQuestion);
      }
      for (const key of Object.keys(obj)) {
        visit(obj[key]);
      }
    }
  };
  visit(input);
  return out;
}
