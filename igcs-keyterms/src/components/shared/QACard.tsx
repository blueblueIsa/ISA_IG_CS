import React, { useState } from 'react';
import type { Question } from '../../types';

interface QACardProps {
  question: Question;
}

export const QACard: React.FC<QACardProps> = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="qa-card">
      <div className="qa-question">{question.question}</div>
      <div className="qa-meta">
        {question.paper} · {question.topic}
        {typeof question.marks === 'number' ? ` · ${question.marks} marks` : ''}
      </div>
      {Array.isArray(question.tags) && question.tags.length > 0 && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
          {question.tags.map((t, i) => (
            <span key={i} className="chip">{t}</span>
          ))}
        </div>
      )}
      <div className={`qa-answer ${showAnswer ? 'show' : ''}`}>
        {question.answer}
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
