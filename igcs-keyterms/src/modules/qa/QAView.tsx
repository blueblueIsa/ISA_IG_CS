import React, { useState } from 'react';
import { qaData } from '../../data/qa';
import { units } from '../../data/units';
import { QACard } from '../../components/shared/QACard';

export const QAView: React.FC = () => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>(units[0].id);
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const unitQA = qaData[selectedUnitId] || {};
  const topics = Object.keys(unitQA);
  
  const filteredQuestions = selectedTopic 
    ? (unitQA[selectedTopic] || [])
    : Object.values(unitQA).flat();

  return (
    <div>
      <div className="content-header">
        <div className="header-main">
          <h1>Past Paper Q&A</h1>
          <p className="muted">Practice with questions from 2023–2025 IGCSE papers.</p>
        </div>

        <div className="filters">
          <select 
            value={selectedUnitId} 
            onChange={e => {
              setSelectedUnitId(e.target.value);
              setSelectedTopic('');
            }}
          >
            {units.map(u => (
              <option key={u.id} value={u.id}>Unit {u.number}: {u.title}</option>
            ))}
          </select>

          <select 
            value={selectedTopic} 
            onChange={e => setSelectedTopic(e.target.value)}
            disabled={topics.length === 0}
          >
            <option value="">All Topics</option>
            {topics.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="qa">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q, i) => (
            <QACard key={i} question={q} />
          ))
        ) : (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
            No questions available for this selection yet.
          </div>
        )}
      </div>
    </div>
  );
};
