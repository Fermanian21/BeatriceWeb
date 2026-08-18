import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
// @ts-ignore
import RippleDistortion from '../components/RippleDistortion';

function ParallaxCanvas({ title, subtitle, artworks, onSelectArtwork }: any) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 60, damping: 25, mass: 1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div className="relative w-full flex flex-col items-center border-b border-gray-900 pb-16 pt-20">
      
      <div className="absolute top-16 left-0 w-full text-center z-[60] pointer-events-none">
        <h2 className="font-burtons text-5xl md:text-7xl text-gray-200 tracking-wider drop-shadow-2xl">{title}</h2>
        {/* AUMENTADO: Troquei para text-lg (mobile) e text-xl (desktop) */}
        <p className="text-lg md:text-xl text-gray-400 uppercase tracking-[0.4em] mt-3 font-serif drop-shadow-lg">
          {subtitle}
        </p>
      </div>

      <div 
        className="relative w-full h-[100vh] md:h-[120vh] bg-[#050508] overflow-hidden flex items-center justify-center cursor-crosshair selection:bg-red-900 selection:text-white"
        onMouseMove={handleMouseMove}
      >
        {artworks.map((art: any) => {
          const moveX = useTransform(springX, [-1, 1], [-art.depth * 2, art.depth * 2]);
          const moveY = useTransform(springY, [-1, 1], [-art.depth * 2, art.depth * 2]);

          return (
            <motion.div
              key={art.id}
              style={{ x: moveX, y: moveY, zIndex: art.z }}
              className={`absolute ${art.pos} ${art.size} aspect-[4/5] group flex flex-col items-center justify-center cursor-pointer`}
              onClick={() => onSelectArtwork(art)}
              whileHover={{ scale: 1.03 }}
              layoutId={`artwork-${art.id}`}
            >
              <div className="absolute inset-[13%] overflow-hidden bg-neutral-900 shadow-inner z-0">
                <div className="w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700">
                  <RippleDistortion 
                    key={art.img} 
                    src={`${art.img}?v=${art.id}`} 
                    strength={0.25} 
                    swirl={1.2} 
                    rings={3} 
                    grayscale={false} 
                    tint="#000" 
                    tintAmount={0.1} 
                  />
                </div>
              </div>
              
              <img 
                src="/picturewhiteframe.png" 
                alt="Frame" 
                className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500"
              />
              
              <div className="absolute -bottom-6 bg-[#0a0a0c]/95 backdrop-blur-md border border-gray-800 py-1.5 px-5 text-center shadow-2xl z-20 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 pointer-events-none">
                <p className="text-xs font-serif text-gray-200 tracking-wide">{art.title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function ArtGallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null);

  const dolls = [
    { id: "1", title: "Emily", desc: "from Corpse Bride", img: "/art_gallery/dolls/emily.jpg", depth: -30, z: 10, size: "w-64 md:w-80", pos: "top-[4%] left-[3%]" },
    { id: "2", title: "Lock, Shock and Barrel", desc: "from The Nightmare Before Christmas", img: "/art_gallery/dolls/lockshockbarrel.jpg", depth: 45, z: 50, size: "w-72 md:w-[22rem]", pos: "top-[8%] right-[4%]" },
    { id: "3", title: "Finis Everglot", desc: "from Corpse Bride", img: "/art_gallery/dolls/finiseverglot.jpg", depth: 15, z: 30, size: "w-60 md:w-[20rem]", pos: "bottom-[8%] left-[6%]" },
    { id: "4", title: "Maggot", desc: "from Corpse Bride", img: "/art_gallery/dolls/maggot.jpg", depth: 20, z: 35, size: "w-64 md:w-[21rem]", pos: "bottom-[5%] left-[38%]" },
    { id: "5", title: "General Bonesapart", desc: "from Corpse Bride", img: "/art_gallery/dolls/generalbonesapart.jpg", depth: 30, z: 40, size: "w-80 md:w-[26rem]", pos: "bottom-[18%] right-[22%]" },
    { id: "6", title: "Edgar", desc: "from Frankenweenie", img: "/art_gallery/dolls/edgar.jpg", depth: -40, z: 5, size: "w-48 md:w-60", pos: "bottom-[5%] right-[5%]" },
    { id: "7", title: "Vincent", desc: "from Vincent", img: "/art_gallery/dolls/vincent.jpg", depth: -15, z: 20, size: "w-56 md:w-[18rem]", pos: "top-[28%] left-[22%]" },
    { id: "8", title: "General Wellington", desc: "from Corpse Bride", img: "/art_gallery/dolls/generalwellington.jpg", depth: 5, z: 25, size: "w-52 md:w-72", pos: "top-[6%] left-[42%]" }
  ];

  const concepts = [
    { id: "c1", title: "Emily & Victor", desc: "from Corpse Bride", img: "/art_gallery/drawings/corpsebrideconcept.jpg", depth: -30, z: 10, size: "w-64 md:w-80", pos: "top-[6%] left-[5%]" },
    { id: "c2", title: "Edward", desc: "from Edward Scissorhands", img: "/art_gallery/drawings/edwardconcept.jpg", depth: 45, z: 50, size: "w-72 md:w-[22rem]", pos: "top-[8%] right-[6%]" },
    { id: "c3", title: "Mad Hatter", desc: "from Alice in Wonderland", img: "/art_gallery/drawings/madhatter.jpg", depth: 15, z: 30, size: "w-60 md:w-[20rem]", pos: "bottom-[8%] left-[8%]" },
    { id: "c4", title: "Sally", desc: "from The Nightmare Before Christmas", img: "/art_gallery/drawings/sally.jpg", depth: -15, z: 20, size: "w-56 md:w-[18rem]", pos: "top-[30%] left-[36%]" },
    { id: "c5", title: "Sweeney and Mrs. Lovett", desc: "from Sweeney Todd", img: "/art_gallery/drawings/sweeneytoddconcept.jpg", depth: 30, z: 40, size: "w-80 md:w-[26rem]", pos: "bottom-[12%] right-[28%]" },
    { id: "c6", title: "Sweeney Todd", desc: "from Sweeney Todd", img: "/art_gallery/drawings/sweeneytodd.jpg", depth: -35, z: 15, size: "w-52 md:w-64", pos: "bottom-[6%] right-[5%]" }
  ];

  return (
    <div className="bg-[#050508] min-h-screen text-gray-300">
      
      <ParallaxCanvas 
        title="Stop-motion Puppets" 
        subtitle="The Fitzgerald Archives" 
        artworks={dolls} 
        onSelectArtwork={setSelectedArtwork} 
      />
      
      <ParallaxCanvas 
        title="Concepts & Sketches" 
        subtitle="Visual Drafts" 
        artworks={concepts} 
        onSelectArtwork={setSelectedArtwork} 
      />

      <AnimatePresence>
        {selectedArtwork && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedArtwork(null)}
            />

            <motion.div 
              layoutId={`artwork-${selectedArtwork.id}`}
              className="relative w-full max-w-2xl lg:max-w-3xl aspect-[4/5] flex items-center justify-center z-10 pointer-events-none"
            >
              <div className="absolute inset-[13%] bg-neutral-900 shadow-2xl">
                <img src={selectedArtwork.img} alt={selectedArtwork.title} className="w-full h-full object-cover" />
              </div>
              <img src="/picturewhiteframe.png" alt="Frame" className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_60px_rgba(0,0,0,0.8)]" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="absolute -bottom-12 md:-bottom-16 bg-[#0a0a0c] border border-gray-800 p-4 text-center shadow-2xl min-w-[250px]"
              >
                <p className="text-lg md:text-xl font-serif text-gray-200">{selectedArtwork.title}</p>
                <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500 mt-1">{selectedArtwork.desc}</p>
              </motion.div>
            </motion.div>

            <button 
              className="absolute top-6 right-8 text-white/50 hover:text-white text-5xl font-light font-mono z-20"
              onClick={() => setSelectedArtwork(null)}
            >
              ×
            </button>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}