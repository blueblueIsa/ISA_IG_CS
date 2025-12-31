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
      </div>
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
