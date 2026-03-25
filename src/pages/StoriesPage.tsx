import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { STORIES } from '../constants';
import { Story } from '../types';
import { ArrowRight, BookOpen, Filter, X } from 'lucide-react';

const StoryCard = ({ story, onClick }: { story: Story; onClick: () => void }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={story.image} 
          alt={story.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-accent text-[10px] font-bold uppercase tracking-widest rounded-full">
            {story.category}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors">{story.title}</h3>
        <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed mb-6 italic">
          "{story.hook}"
        </p>
        <div className="flex items-center gap-2 text-primary font-bold text-sm">
          Ler história completa <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

const StoryModal = ({ story, onClose }: { story: Story; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-primary/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-2/5 h-64 md:h-auto relative">
          <img 
            src={story.image} 
            alt={story.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full md:hidden"
          >
            <X size={20} />
          </button>
        </div>
        <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">{story.category}</span>
              <h2 className="text-3xl md:text-4xl">{story.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="hidden md:block p-2 text-slate-400 hover:text-primary transition-colors"
            >
              <X size={28} />
            </button>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg font-medium text-slate-700 italic border-l-4 border-accent pl-4 mb-8">
              {story.hook}
            </p>
            {story.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-600 mb-6 leading-relaxed">
                {p}
              </p>
            ))}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="text-primary font-bold text-lg mb-4">
                {story.closing}
              </p>
              {story.source && (
                <p className="text-xs text-slate-400">
                  {story.source}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const StoriesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<'Todos' | 'Transportes' | 'Materiais'>('Todos');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  useEffect(() => {
    const storyId = searchParams.get('story');
    if (storyId) {
      const story = STORIES.find(s => s.id === storyId);
      if (story) {
        setSelectedStory(story);
      }
    }
  }, [searchParams]);

  const handleCloseModal = () => {
    setSelectedStory(null);
    setSearchParams({});
  };

  const filteredStories = STORIES.filter(s => filter === 'Todos' || s.category === filter);

  return (
    <div className="bg-surface pt-32 pb-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <BookOpen size={14} />
            Hub de Storytelling Industrial
          </div>
          <h1 className="text-5xl md:text-6xl mb-6">Histórias que Movem o Mundo.</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Mergulhe nas curiosidades, marcos históricos e inovações científicas que definem o setor dos transportes e materiais de construção.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['Todos', 'Transportes', 'Materiais'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === f 
                  ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredStories.map((story) => (
              <StoryCard 
                key={story.id} 
                story={story} 
                onClick={() => setSelectedStory(story)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredStories.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400">Nenhuma história encontrada nesta categoria.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStory && (
          <StoryModal 
            story={selectedStory} 
            onClose={handleCloseModal} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};
