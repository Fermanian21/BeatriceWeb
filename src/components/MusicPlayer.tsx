import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Disc3 } from 'lucide-react';

const PLAYLIST = [
  {
    id: 1,
    title: "Eyes Without A Face",
    artist: "Billy Idol",
    file: "/audio/Billy Idol - Eyes Without A Face (SPOTISAVER).mp3",
    cover: "/album_covers/rebel_yell.jpg",
    lyrics: [
      { time: 0, text: "♪" },
      { time: 22, text: "I'm all out of hope" },
      { time: 26, text: "One more bad dream" },
      { time: 30, text: "Could bring a fall" },
      { time: 33, text: "When I'm far from home" },
      { time: 37, text: "Don't call me on the phone" },
      { time: 40, text: "To tell me you're alone" },
      { time: 44, text: "It's easy to deceive" },
      { time: 49, text: "It's easy to tease" },
      { time: 52, text: "But hard to get release" },
      { time: 56, text: "(Les yeux sans visage) eyes without a face" },
      { time: 62, text: "(Les yeux sans visage) eyes without a face" },
      { time: 67, text: "(Les yeux sans visage) eyes without a face" },
      { time: 74, text: "Got no human grace" },
      { time: 77, text: "You're eyes without a face" },
      { time: 90, text: "I spend so much time" },
      { time: 94, text: "Believing all the lies" },
      { time: 96, text: "To keep the dream alive" },
      { time: 101, text: "Now it makes me sad" },
      { time: 105, text: "It makes me mad at truth" },
      { time: 108, text: "For loving what was you" },
      { time: 112, text: "(Les yeux sans visage) eyes without a face" },
      { time: 118, text: "(Les yeux sans visage) eyes without a face" },
      { time: 124, text: "(Les yeux sans visage) eyes without a face" },
      { time: 130, text: "Got no human grace" },
      { time: 133, text: "You're eyes without a face" },
      { time: 136, text: "♪" },
      { time: 156, text: "When you hear the music, you make a dip" },
      { time: 159, text: "Into someone else's pocket, then make a slip" },
      { time: 163, text: "Steal a car and go to Las Vegas" },
      { time: 166, text: "Oh, the gigolo pool" },
      { time: 168, text: "Hanging out by the state line" },
      { time: 171, text: "Turning holy water into wine" },
      { time: 174, text: "Drinking it down, oh" },
      { time: 179, text: "I'm on a bus on a psychedelic trip" },
      { time: 182, text: "Reading murder books, trying to stay hip" },
      { time: 185, text: "I'm thinking of you and you're out there, so" },
      { time: 189, text: "Say your prayers" },
      { time: 191, text: "Say your prayers" },
      { time: 194, text: "Say your prayers" },
      { time: 198, text: "♪" },
      { time: 213, text: "Now I close my eyes" },
      { time: 217, text: "And I wonder why" },
      { time: 220, text: "I don't despise" },
      { time: 224, text: "Now all I can do" },
      { time: 228, text: "Is love what was once" },
      { time: 231, text: "So alive and new" },
      { time: 234, text: "But it's gone from your eyes" },
      { time: 237, text: "I'd better realize" },
      { time: 241, text: "(Les yeux sans visage) eyes without a face" },
      { time: 247, text: "(Les yeux sans visage) eyes without a face" },
      { time: 252, text: "(Les yeux sans visage) eyes without a face" },
      { time: 259, text: "Got no human grace" },
      { time: 262, text: "You're eyes without a face" },
      { time: 264, text: "Such a human waste" },
      { time: 268, text: "You're eyes without a face" },
      { time: 271, text: "♪" },
      { time: 279, text: "And now it's getting worse" }
    ]
  },
  {
    id: 2,
    title: "Kidnapping an Heiress",
    artist: "Black Box Recorder",
    file: "/audio/Black Box Recorder - Kidnapping an Heiress (SPOTISAVER).mp3",
    cover: "/album_covers/england_made_me.jpg",
    lyrics: [
      { time: 0, text: "♪" },
      { time: 10, text: "Born into money it's not a crime" },
      { time: 12, text: "You can fool the people all the time" },
      { time: 16, text: "Nine hundred dead in Jamestown" },
      { time: 20, text: "Rescued from a shopping mall" },
      { time: 23, text: "Heiress with a little girls soul" },
      { time: 26, text: "Do you think we'll make the papers?" },
      { time: 31, text: "And we're searching for your daughter" },
      { time: 36, text: "And we're searching for your daughter" },
      { time: 43, text: "On Saturday the childhood ends" },
      { time: 46, text: "Strange way to make new friends" },
      { time: 49, text: "She's lying in the basement" },
      { time: 53, text: "Black boy, white girl" },
      { time: 55, text: "Black girl with a blindfold" },
      { time: 59, text: "Which one will be your lover" },
      { time: 64, text: "And we're searching for your daughter" },
      { time: 69, text: "And we're searching for your daughter" },
      { time: 71, text: "(Kidnapping an heiress)" },
      { time: 74, text: "(Kidnapping an heiress)" },
      { time: 76, text: "(Kidnapping an heiress)" },
      { time: 79, text: "(Kidnapping an heiress)" },
      { time: 81, text: "Lock her up for sixty days" },
      { time: 83, text: "Change her hair, change her name" },
      { time: 87, text: "Smile for the camera" },
      { time: 91, text: "Friendships about trust" },
      { time: 93, text: "If we trust you then you're one of us" },
      { time: 96, text: "Live together, die for each other" },
      { time: 102, text: "And we're searching for your daughter" },
      { time: 104, text: "(Kidnapping an heiress)" },
      { time: 106, text: "(Kidnapping an heiress)" },
      { time: 107, text: "And we're searching for your daughter" },
      { time: 109, text: "(Kidnapping an heiress)" },
      { time: 112, text: "(Kidnapping an heiress)" },
      { time: 114, text: "(Kidnapping an heiress)" },
      { time: 117, text: "(Kidnapping an heiress)" },
      { time: 119, text: "Born into money it's not a crime" },
      { time: 121, text: "You can fool the people all the time" },
      { time: 125, text: "Nine hundred dead in jonestown" },
      { time: 129, text: "Get down, stay down" },
      { time: 131, text: "(Put a bullet in your head)" },
      { time: 132, text: "It's only money" },
      { time: 135, text: "Smile for the camera" },
      { time: 139, text: "How could you not defend your honour?" },
      { time: 142, text: "(Kidnapping an heiress)" },
      { time: 144, text: "(Kidnapping an heiress)" },
      { time: 145, text: "And we think we've found your daughter" },
      { time: 147, text: "(Kidnapping an heiress)" },
      { time: 149, text: "(Kidnapping an heiress)" },
      { time: 150, text: "And we think we've found your daughter" },
      { time: 152, text: "(Kidnapping an heiress)" },
      { time: 155, text: "(Kidnapping an heiress)" },
      { time: 157, text: "(Kidnapping an heiress)" }
    ]
  },
  {
    id: 3,
    title: "Never Let Me Down Again",
    artist: "Depeche Mode",
    file: "/audio/Depeche Mode - Never Let Me Down Again (SPOTISAVER).mp3",
    cover: "/album_covers/music_for_the_masses.jpg",
    lyrics: [
      { time: 0, text: "♪" },
      { time: 32, text: "I'm taking a ride with my best friend" },
      { time: 40, text: "I hope he never lets me down again" },
      { time: 50, text: "He knows where he's taking me" },
      { time: 54, text: "Taking me where I want to be" },
      { time: 59, text: "I'm taking a ride with my best friend" },
      { time: 64, text: "♪" },
      { time: 77, text: "We're flying high" },
      { time: 80, text: "We're watching the world pass us by" },
      { time: 86, text: "Never want to come down" },
      { time: 89, text: "Never want to put my feet back down on the ground" },
      { time: 94, text: "♪" },
      { time: 104, text: "I'm taking a ride with my best friend" },
      { time: 113, text: "I hope he never lets me down again" },
      { time: 122, text: "Promises me I'm as safe as houses" },
      { time: 126, text: "As long as I remember who's wearing the trousers" },
      { time: 131, text: "I hope he never lets me down again" },
      { time: 136, text: "♪" },
      { time: 149, text: "We're flying high" },
      { time: 152, text: "We're watching the world pass us by" },
      { time: 159, text: "Never want to come down" },
      { time: 161, text: "Never want to put my feet back down on the ground" },
      { time: 167, text: "We're flying high" },
      { time: 170, text: "We're watching the world pass us by" },
      { time: 177, text: "Never want to come down" },
      { time: 179, text: "Never want to put my feet back down on the ground" },
      { time: 184, text: "♪" },
      { time: 204, text: "Never let me down, never let me down" },
      { time: 213, text: "Never let me down, never let me down" },
      { time: 221, text: "See the stars, they're shining bright" },
      { time: 226, text: "Everything's alright tonight" },
      { time: 230, text: "See the stars, they're shining bright" },
      { time: 235, text: "Everything's alright tonight" },
      { time: 239, text: "See the stars, they're shining bright" },
      { time: 244, text: "Everything's alright tonight" }
    ]
  },
  {
    id: 4,
    title: "Salvatore",
    artist: "Lana Del Rey",
    file: "/audio/Lana Del Rey - Salvatore (SPOTISAVER).mp3",
    cover: "/album_covers/honeymoon.jpg",
    lyrics: [
      { time: 0, text: "♪" },
      { time: 41, text: "All the lights in Miami begin to gleam" },
      { time: 48, text: "Ruby, blue and green, neon too" },
      { time: 57, text: "Everything looks better from above, my king" },
      { time: 64, text: "Like aquamarine" },
      { time: 68, text: "Ocean's blue" },
      { time: 72, text: "Ah-ah-ah-ah, ah-ah-ah-ah-ah" },
      { time: 76, text: "Cacciatore" },
      { time: 80, text: "La-da-da-da-da, la-da-da-da-da" },
      { time: 84, text: "Limousines" },
      { time: 88, text: "Ah-ah-ah-ah, ah-ah-ah-ah-ah" },
      { time: 92, text: "Ciao, amore" },
      { time: 96, text: "La-da-da-da-da, la-da-da-da-da" },
      { time: 100, text: "Soft ice cream" },
      { time: 105, text: "All the lights are sparkling for you, it seems" },
      { time: 112, text: "On the downtown scenes, shady blue" },
      { time: 121, text: "Beatboxing and rapping in the summer rain" },
      { time: 128, text: "Like a boss you sang" },
      { time: 132, text: "Jazz and blues" },
      { time: 136, text: "Ah-ah-ah-ah, ah-ah-ah-ah-ah" },
      { time: 140, text: "Cacciatore" },
      { time: 144, text: "La-da-da-da-da, la-da-da-da-da" },
      { time: 148, text: "Limousines" },
      { time: 152, text: "Ah-ah-ah-ah, ah-ah-ah-ah-ah" },
      { time: 156, text: "Ciao, amore" },
      { time: 160, text: "La-da-da-da-da, la-da-da-da-da" },
      { time: 164, text: "Soft ice creams" },
      { time: 168, text: "The summer's wild and I've been waiting for you all this time" },
      { time: 175, text: "I adore you, can't you see you're meant for me?" },
      { time: 184, text: "The summer's hot, but I've been cold without you" },
      { time: 189, text: "I was so wrong not to doubt your Medellín" },
      { time: 195, text: "Tangerine dreams" },
      { time: 200, text: "Catch me if you can, working on my tan" },
      { time: 204, text: "Salvatore" },
      { time: 208, text: "Dying by the hand of a foreign man" },
      { time: 212, text: "Happily" },
      { time: 216, text: "Calling out my name in the summer rain" },
      { time: 219, text: "Ciao, amore" },
      { time: 224, text: "Salvatore can wait, now it's time to eat" },
      { time: 228, text: "Soft ice cream" },
      { time: 232, text: "Ah-ah-ah-ah, ah-ah-ah-ah-ah" },
      { time: 236, text: "Cacciatore" },
      { time: 240, text: "Ah-ah-ah-ah, ah-ah-ah-ah-ah" },
      { time: 244, text: "Limousines" },
      { time: 248, text: "Ah-ah-ah-ah, ah-ah-ah" },
      { time: 252, text: "Ciao amore" },
      { time: 256, text: "Ah-ah-ah-ah, ah-ah-ah-ah-ah" },
      { time: 262, text: "Soft ice cream" }
    ]
  }
];

// Ícones Customizados "Pontudos" (estilo Burton)
const IconPlay = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>;
const IconPause = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>;
const IconSkipForward = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 3l10 9-10 9V3z M18 3h2v18h-2V3z"/></svg>;
const IconSkipBack = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 21L8 12l10-9v18z M6 21H4V3h2v18z"/></svg>;

export default function MusicPlayer() {
  const [showLyrics, setShowLyrics] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const currentTrack = PLAYLIST[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
  const prevTrack = () => setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      if (duration && !isNaN(duration)) setProgress((currentTime / duration) * 100);
      setCurrentTime(currentTime);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, clickX / rect.width));
      audioRef.current.currentTime = percentage * audioRef.current.duration;
    }
  };

  const activeLyricIndex = currentTrack.lyrics.reduce((acc, lyric, index) => 
    currentTime >= lyric.time ? index : acc, 0);

  return (
    <>
      <audio ref={audioRef} src={currentTrack.file} onTimeUpdate={handleTimeUpdate} onEnded={nextTrack} />

      <div className="w-full border border-gray-800 bg-[#0a0a0c] font-serif shadow-xl my-4 p-4 flex flex-col gap-3.5">
        <div>
          <div className="flex items-center gap-2 text-gray-500 pb-2">
            <Disc3 className="w-4 h-4" />
            <span className="text-sm uppercase tracking-[0.15em] font-serif">RADIO PLAYER</span>
          </div>
          <div className="border-b border-gray-800 w-full" />
        </div>

        <div className="flex items-center gap-3.5">
          <div className="relative w-20 h-20 flex-shrink-0">
            <div className="absolute top-0 h-full aspect-square transition-all duration-700 ease-out"
                 style={{ left: isPlaying ? '25px' : '0px', opacity: isPlaying ? 1 : 0 }}>
              <img src="https://pngimg.com/d/vinyl_PNG95.png" alt="Vinyl" className="w-full h-full object-contain filter grayscale brightness-75"
                   style={{ animation: isPlaying ? 'spin 3s linear infinite' : 'none' }} />
            </div>
            <img src={currentTrack.cover} alt="Cover" className="absolute inset-0 w-full h-full object-cover border border-gray-800 z-10 shadow-inner bg-black" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-gray-200 font-bold truncate text-sm font-serif">{currentTrack.title}</h3>
            <p className="text-gray-500 text-xs truncate uppercase tracking-widest mt-1 font-serif">{currentTrack.artist}</p>
            
            <div className="flex items-center gap-4 mt-2.5">
              <button onClick={prevTrack} className="text-gray-500 hover:text-gray-200 transition-colors cursor-pointer"><IconSkipBack /></button>
              <button onClick={togglePlay} className="text-gray-500 hover:text-gray-200 transition-colors cursor-pointer">
                {isPlaying ? <IconPause /> : <IconPlay />}
              </button>
              <button onClick={nextTrack} className="text-gray-500 hover:text-gray-200 transition-colors cursor-pointer"><IconSkipForward /></button>
              
              <button onClick={() => setShowLyrics(!showLyrics)} className={`ml-auto text-xs flex items-center gap-1 transition-colors font-serif cursor-pointer ${showLyrics ? 'text-gray-200' : 'text-gray-500 hover:text-gray-300'}`}>
                <FileText className="w-4 h-4" /> LYRICS
              </button>
            </div>
          </div>
        </div>

        <div ref={progressBarRef} onClick={handleSeek} className="w-full h-1.5 bg-black/40 border border-gray-800 cursor-pointer flex items-center">
          <div className="h-1 bg-gray-500 transition-all duration-75" style={{ width: `${progress}%` }} />
        </div>

        {showLyrics && (
          <div className="border border-gray-800 flex flex-col items-center justify-center h-24 relative overflow-hidden bg-black/40 px-3">
            <motion.div key={activeLyricIndex} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-center w-full absolute px-2">
              <p className="text-sm text-gray-200 font-serif italic mb-1 leading-relaxed">{currentTrack.lyrics[activeLyricIndex]?.text || "..."}</p>
              <p className="text-xs text-gray-500 font-serif italic truncate">{currentTrack.lyrics[activeLyricIndex + 1]?.text || ""}</p>
            </motion.div>
          </div>
        )}
      </div>
      
      <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    </>
  );
}