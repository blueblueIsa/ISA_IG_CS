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
    
    // Build list of matches (non-overlapping, case-insensitive, whole word)
    const matches: { start: number; end: number }[] = [];
    
    keywords.forEach(kw => {
      // Escape special regex characters
      const escapedKw = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // Use word boundaries for whole word matching
      // Note: \b works well for alphanumeric words. For keywords with symbols, it might need adjustment,
      // but for IGCSE terms usually \b is correct.
      const regex = new RegExp(`\\b${escapedKw}\\b`, 'gi');
      
      let match;
      while ((match = regex.exec(line)) !== null) {
        matches.push({ start: match.index, end: match.index + match[0].length });
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
      parts.push(<span key={`${m.start}-${m.end}`} className="keyword">{segment}</span>);
      cursor = m.end;
    }
    if (cursor < line.length) {
      parts.push(line.slice(cursor));
    }
    return parts;
  };

  const isHeaderLine = (line: string) => {
    const l = line.trim().toLowerCase();
    return l.startsWith('any ') && l.includes(' from') || 
           l.startsWith('examples:') || 
           l === 'or';
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
      <div className={`qa-answer ${showAnswer ? 'show' : ''}`}>
        {lines.map((line, idx) => {
          const isHeader = isHeaderLine(line);
          const showBullet = lines.length > 1 && !isHeader;
          
          return (
            <div key={idx} className={`qa-line qa-line-${difficulty}`}>
              {showBullet ? (
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ userSelect: 'none', color: '#64748b' }}>-</span>
                  <span style={{ flex: 1 }}>{highlightLine(line, question.keywords)}</span>
                </div>
              ) : (
                <div style={isHeader ? { fontWeight: 600 } : undefined}>
                  {highlightLine(line, question.keywords)}
                </div>
              )}
            </div>
          );
        })}
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
