import React, { useState, useMemo } from 'react';
import type { Unit, ViewMode, Term } from '../../types';
import { TermCard } from '../../components/shared/TermCard';
import { Flashcard } from '../../components/shared/Flashcard';
import { qaData } from '../../data/qa';
import { Shuffle, BookOpen, Layers, MessageCircleQuestion } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface GenericUnitViewProps {
  unit: Unit;
}

export const GenericUnitView: React.FC<GenericUnitViewProps> = ({ unit }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState('');
  const [letter, setLetter] = useState('');
  const [confusionsOnly, setConfusionsOnly] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [flashcardIndex, setFlashcardIndex] = useState(0);

  const topics = useMemo(() => {
    const set = new Set(unit.terms.map(t => t.topic));
    return Array.from(set).sort();
  }, [unit]);

  const filteredTerms = useMemo(() => {
    return unit.terms.filter(t => {
      const q = search.toLowerCase();
      const matchesSearch = !q || 
        t.term.toLowerCase().includes(q) || 
        t.definition.toLowerCase().includes(q) || 
        t.topic.toLowerCase().includes(q);
      const matchesTopic = !topic || t.topic === topic;
      const matchesLetter = !letter || t.term.toUpperCase().startsWith(letter);
      const matchesConfusion = !confusionsOnly || (!!t.misconception || !!t.contrast);
      
      return matchesSearch && matchesTopic && matchesLetter && matchesConfusion;
    });
  }, [unit, search, topic, letter, confusionsOnly]);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const hasRelatedQA = (term: Term) => {
    const unitQA = qaData[unit.id];
    if (!unitQA) return false;
    
    const questions = unitQA[term.topic] || [];
    const k = term.term.toLowerCase();
    
    return questions.some(q => {
      const inText = q.question.toLowerCase().includes(k) || q.answer.toLowerCase().includes(k);
      const inKeywords = Array.isArray(q.keywords) && q.keywords.some(w => w.toLowerCase().includes(k));
      return inText || inKeywords;
    });
  };

  return (
    <div>
      <div className="content-header">
        <div className="header-main">
          <h1>Unit {unit.number} · {unit.title}</h1>
          <p className="muted">{unit.description}</p>
        </div>

        <div className="filters">
          <input 
            type="text" 
            placeholder="Search terms..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          
          <select value={topic} onChange={e => setTopic(e.target.value)}>
            <option value="">All Topics</option>
            {topics.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <button 
            className="confusions-toggle"
            onClick={() => navigate(`/qa?unit=${unit.id}`)}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white' }}
          >
            <MessageCircleQuestion size={16} />
            Common Questions
          </button>

          <button 
            className={`confusions-toggle ${confusionsOnly ? 'active' : ''}`}
            onClick={() => setConfusionsOnly(!confusionsOnly)}
            style={{ background: confusionsOnly ? '#eef2ff' : 'white', borderColor: confusionsOnly ? '#c7d2fe' : 'var(--border)' }}
          >
            ⚠️ Confusions
          </button>

          <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
             <button onClick={() => setViewMode('list')} className="confusions-toggle" title="List View">
               <BookOpen size={16} />
             </button>
             <button onClick={() => setViewMode('flashcards')} className="confusions-toggle" title="Flashcards">
               <Layers size={16} />
             </button>
          </div>
        </div>

        <div className="letters">
          <button 
            className={`letter-chip ${!letter ? 'active' : ''}`}
            onClick={() => setLetter('')}
          >
            All
          </button>
          {letters.map(L => (
            <button
              key={L}
              className={`letter-chip ${letter === L ? 'active' : ''}`}
              onClick={() => setLetter(L)}
            >
              {L}
            </button>
          ))}
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="terms">
          {filteredTerms.map((term, i) => (
            <TermCard 
              key={i} 
              term={term} 
              onViewQA={hasRelatedQA(term) ? (keyword) => {
                const params = new URLSearchParams();
                params.set('unit', unit.id);
                params.set('topic', term.topic);
                params.set('q', keyword);
                navigate(`/qa?${params.toString()}`);
              } : undefined}
            />
          ))}
          {filteredTerms.length === 0 && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
              No terms found matching your filters.
            </div>
          )}
        </div>
      ) : (
        <div className="flashcards">
          {filteredTerms.length > 0 ? (
            <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
              <Flashcard term={filteredTerms[flashcardIndex % filteredTerms.length]} />
              
              <div className="flash-controls" style={{ justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={() => setFlashcardIndex(Math.max(0, flashcardIndex - 1))}>Previous</button>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  {flashcardIndex % filteredTerms.length + 1} / {filteredTerms.length}
                </span>
                <button onClick={() => setFlashcardIndex(flashcardIndex + 1)}>Next</button>
                <button onClick={() => setFlashcardIndex(Math.floor(Math.random() * filteredTerms.length))}>
                  <Shuffle size={16} />
                </button>
              </div>
            </div>
          ) : (
             <div style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
              No terms available for flashcards with current filters.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
