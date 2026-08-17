import { useState, useRef } from 'react';
import { Play, Pause, Disc3, GripHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong = {
    title: "Sweeney Todd - Epiphany",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      drag
      dragMomentum={false}
      className="fixed bottom-6 right-6 z-50 flex flex-col border-2 border-double border-gray-700 bg-[#0a0a0c]/95 shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-sm"
      style={{ touchAction: 'none' }}
    >
      
      <div className="bg-gray-800 text-gray-500 flex justify-center py-0.5 cursor-grab active:cursor-grabbing border-b border-gray-700">
        <GripHorizontal className="w-4 h-4 opacity-50" />
      </div>

      <audio ref={audioRef} src={currentSong.url} loop>
        <track kind="captions" />
      </audio>
      
      <div className="flex items-center gap-4 p-3">
        <div className="flex-col text-right hidden md:flex cursor-default">
          <span className="text-[9px] text-gray-500 uppercase tracking-[0.3em] mb-1">
            {isPlaying ? 'Now Playing' : 'Paused'}
          </span>
          <span className="text-sm text-gray-300 font-serif truncate w-40">
            {currentSong.title}
          </span>
        </div>

        <div className={`text-gray-500 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
          <Disc3 className="w-6 h-6" />
        </div>
        
        <button 
          onClick={togglePlay}
          className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all text-gray-400 group cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform ml-1" />
          )}
        </button>
      </div>

    </motion.div>
  );
}