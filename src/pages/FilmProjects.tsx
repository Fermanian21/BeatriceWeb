import { motion } from 'framer-motion';
import { Film } from 'lucide-react';
import CircularGallery from '../components/CircularGallery';

export default function FilmProjects() {
  const mainFilms = [
    { 
      image: '/movie_covers/vincent_cover.jpg', 
      text: 'Vincent (1999)', 
      detail: 'Vincent (1999) is a dark, whimsical stop-motion animated short film written and directed by Beatrice. Narrated by the legendary horror actor Vincent Price, the story follows Vincent Malloy, a polite seven-year-old boy who seems perfectly ordinary on the outside but lives in a dark fantasy world of his own making.' 
    },
    { 
      image: '/movie_covers/frankenweenie_cover.jpg', 
      text: 'Frankenweenie (2002)', 
      detail: 'Frankenweenie (2002) is a stop-motion animated film written and directed by Tim Burton. The story follows a young boy named Victor who brings his dead dog back to life using electricity.' 
    },
    { 
      image: '/movie_covers/edward_scissorhands_cover.jpg', 
      text: 'Edward Scissorhands (2002)', 
      detail: 'Edward Scissorhands (2002) is a dark fantasy film written and directed by Tim Burton. The story follows a young man named Edward who has scissors for hands and lives in a gothic world.' 
    },
    { 
      image: '/movie_covers/ed_wood_cover.jpg', 
      text: 'Ed Wood (2003)', 
      detail: 'Ed Wood (2003) is a biographical comedy-drama film. The story follows the life of Ed Wood, a low-budget filmmaker.' 
    },
    { 
      image: '/movie_covers/the_nightmare_before_christmas_cover.jpg', 
      text: 'Nightmare Before Christmas (2005)', 
      detail: 'The Nightmare Before Christmas (2005) is a stop-motion animated film. The story follows Jack Skellington, the Pumpkin King of Halloween Town, who becomes fascinated with Christmas and tries to bring it to his town.' 
    },
    { 
      image: '/movie_covers/sweeney_todd_cover.jpg', 
      text: 'Sweeney Todd (2006)', 
      detail: 'Sweeney Todd (2006) is a dark musical film. The story follows a barber named Sweeney Todd who seeks revenge against the corrupt Judge Turpin.' 
    },
    { 
      image: '/movie_covers/corpse_bride_cover.jpg', 
      text: 'Corpse Bride (2008)', 
      detail: 'Corpse Bride (2008) is a stop-motion animated film. The story follows Emily, a young woman who is accidentally married to a dead man and must navigate the challenges of her new life.' 
    },
    { 
      image: '/movie_covers/the_eidolon_cover.jpg', 
      text: 'The Eidolon (2008)', 
      detail: 'The Eidolon (2008) is a gothic psychological thriller film. The story follows Lady Eliza, a repressed aristocrat who risks everything for a forbidden romance while being pushed to the brink of insanity by a bizarre houseguest.' 
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#050508] p-4 md:p-8 flex justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full mx-auto border-4 border-double border-gray-700 bg-black/40 p-6 md:p-10 flex flex-col shadow-2xl relative"
      >
        
        <div className="mb-8 border-b border-gray-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-burtons text-5xl text-gray-200 tracking-wider mb-2">
              Filmography
            </h1>
            <p className="uppercase tracking-[0.2em] text-xm text-gray-500 flex items-center gap-2">
              <Film className="w-4 h-4" />
              Production Archive
            </p>
          </div>
        </div>

        <div className="border border-gray-800 bg-[#0a0a0c] p-2 md:p-4 shadow-inner relative flex-grow">
          <div style={{ height: '650px', width: '100%', position: 'relative' }}>
            <CircularGallery
              items={mainFilms}
              bend={0.3}
              textColor="#d1d5db"
              borderRadius={0.05}
              font="bold 22px serif"
            />
          </div>
        </div>

        {/* Footer com Instruções */}
        <div className="mt-8 text-center flex flex-col items-center gap-3">
          <div className="w-16 h-[1px] bg-gray-700" />
          <p className="text-xs md:text-sm text-gray-500 font-serif italic">
            * Drag horizontally to navigate the archive. Hover over frames to decrypt classified production notes.
          </p>
        </div>

      </motion.div>
    </div>
  );
}