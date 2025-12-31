import React, { useMemo, useState } from 'react';
import type { Question } from '../../types';

interface QACardProps {
  question: Question;
}

export const QACard: React.FC<QACardProps> = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const difficulty = useMemo(() => {
    const m = question.marks ?? 0;
    if (m <= 2) return 'easy';
    if (m === 3) return 'medium';
    return 'hard';
  }, [question.marks]);

  const lines = useMemo(() => {
    return String(question.answer).split('\n');
  }, [question.answer]);

  const highlightLine = (line: string, keywords?: string[]) => {
    if (!keywords || keywords.length === 0) return line;
    const parts: Array<string | React.ReactNode> = [];
    let cursor = 0;
    const lower = line.toLowerCase();
    // Build list of matches (non-overlapping, case-insensitive)
    const matches: { start: number; end: number }[] = [];
    keywords.forEach(kw => {
      const k = kw.toLowerCase();
      let idx = 0;
      while ((idx = lower.indexOf(k, idx)) !== -1) {
        matches.push({ start: idx, end: idx + k.length });
        idx = idx + k.length;
      }
    });
    // Merge overlaps
    matches.sort((a, b) => a.start - b.start);
    const merged: typeof matches = [];
    for (const m of matches) {
      const last = merged[merged.length - 1];
      if (last && m.start <= last.end) {
        last.end = Math.max(last.end, m.end);
      } else {
        merged.push({ ...m });
      }
    }
    for (const m of merged) {
      if (m.start > cursor) {
        parts.push(line.slice(cursor, m.start));
      }
      const segment = line.slice(m.start, m.end);
      parts.push(<mark key={`${m.start}-${m.end}`} style={{ background: '#fef3c7', color: '#92400e' }}>{segment}</mark>);
      cursor = m.end;
    }
    if (cursor < line.length) {
      parts.push(line.slice(cursor));
    }
    return parts;
  };

  return (
    <div className="qa-card">
      <div className="qa-question">{question.question}</div>
      <div className="qa-meta">
        {question.paper} · {question.topic}
        {typeof question.marks === 'number' ? ` · ${question.marks} marks` : ''}
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
        {Array.isArray(question.tags) && question.tags.map((t, i) => (
          <span key={i} className="chip">{t}</span>
        ))}
        <span className={`chip qa-difficulty-${difficulty}`}>{difficulty}</span>
      </div>
      {Array.isArray(question.tags) && question.tags.length > 0 && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
          {question.tags.map((t, i) => (
            <span key={i} className="chip">{t}</span>
          ))}
        </div>
      )}
      <div className={`qa-answer ${showAnswer ? 'show' : ''}`}>
        {lines.map((line, idx) => (
          <div key={idx} className={`qa-line qa-line-${difficulty}`}>
            {highlightLine(line, question.keywords)}
          </div>
        ))}
      </div>
      <div className="qa-actions">
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
        <button onClick={() => window.open(question.link, '_blank')}>
          Source
        </button>
      </div>
    </div>
  );
};
