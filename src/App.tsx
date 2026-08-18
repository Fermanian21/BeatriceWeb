import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import About from './pages/About';
import FilmProjects from './pages/FilmProjects';
import ArtGallery from './pages/ArtGallery';
import Facts from './pages/Facts';
import Biography from './pages/Biography';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [activePage, setActivePage] = useState('dossier');

  const renderPage = () => {
    switch (activePage) {
      case 'dossier': return <About />;
      case 'cinema': return <FilmProjects />;
      case 'gallery': return <ArtGallery />;
      case 'facts': return <Facts />;
      case 'classified': return <Biography />;
      default: return <About />;
    }
  };

  const menuItems = [
    { id: 'dossier', label: 'Dossier / Home' },
    { id: 'cinema', label: 'Film Projects' },
    { id: 'gallery', label: 'Art Gallery' },
    { id: 'facts', label: 'Facts' },
    { id: 'classified', label: 'Biography' },
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-gray-300 font-serif flex flex-col md:flex-row selection:bg-red-900 selection:text-white">
      
      <nav className="w-full md:w-96 border-b-4 md:border-b-0 md:border-r-4 border-double border-gray-700 bg-black/80 flex flex-col p-6 z-10 shadow-2xl relative md:h-screen md:overflow-y-auto">
        <div className="mb-6 text-center md:text-left flex-shrink-0">
          <h1 className="font-burtons text-3xl text-gray-200 tracking-widest border-b border-gray-800 pb-4">
            Beatrice Trano
          </h1>
        </div>

        <ul className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0 flex-shrink-0">
          {menuItems.map((item) => (
            <li key={item.id} className="min-w-max">
              <button
                onClick={() => setActivePage(item.id)}
                className={`w-full text-left uppercase tracking-[0.15em] text-sm px-4 py-3 border transition-all duration-300 ${
                  activePage === item.id
                    ? 'border-gray-400 bg-gray-800/50 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]'
                    : 'border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-300 bg-[#0a0a0c]'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex-shrink-0">
          <MusicPlayer />
        </div>

        <div className="mt-auto text-xs text-gray-700 uppercase tracking-widest text-center border-t border-gray-800 pt-4 flex-shrink-0">
          Sys. Version 19.20<br />
          Restricted Access
        </div>
      </nav>

      <main className="flex-grow relative h-[calc(100vh-160px)] md:h-screen overflow-y-auto overflow-x-hidden bg-[#050508]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.4 }}
            className="w-full min-h-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

    </div>
  );
}