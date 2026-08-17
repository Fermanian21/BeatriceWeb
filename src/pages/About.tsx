import { motion } from 'framer-motion';
// @ts-ignore
import RippleDistortion from '../components/RippleDistortion';
// @ts-ignore
import TextLoop from '../components/TextLoop';

export default function About() {
  return (
    <div className="min-h-screen w-full bg-[#050508] text-gray-300 font-serif p-4 md:p-8 flex items-center justify-center">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full border-4 border-double border-gray-700 bg-black/40 p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 relative shadow-2xl"
      >
        
        <div className="md:col-span-4 flex flex-col gap-4">
          
          <div className="border border-gray-800 bg-[#0a0a0c] p-3 shadow-inner">
            <div className="w-full aspect-[3/4] border-2 border-gray-700 bg-gray-900 relative overflow-hidden group flex items-center justify-center cursor-crosshair">
              
              <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700">
                <RippleDistortion
                  src="/beatrice/beatrice4.jpg"
                  brushSize={150}
                  strength={0.4}
                  swirl={1.5}
                  rings={5}
                  grayscale={false}
                  tint="#3b0707"
                  tintAmount={0.3}
                />
              </div>

            </div>
            
            <div className="mt-4 text-center">
              <h1 className="font-burtons text-4xl text-gray-200 tracking-wider mb-1">
                Beatrice
              </h1>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 border-b border-gray-800 pb-2 flex justify-center gap-2">
                <span className="bg-gray-800 text-gray-800 select-none px-2 rounded-sm" aria-hidden="true" title="[REDACTED]">
                  De Prospero
                </span> 
                Trano
              </p>
              <p className="text-sm text-gray-400">Age: 28 | Occupation: Artist</p>
            </div>
          </div>

          <div className="border border-gray-800 p-4 bg-[#0a0a0c] text-center">
            <p className="text-gray-500 italic text-sm">
              {`"One person's craziness is another person's reality."`}
            </p>
          </div>

        </div>

        <div className="md:col-span-8 flex flex-col gap-4">
          
          <div className="border border-gray-800 bg-[#0a0a0c] h-16 md:h-20 overflow-hidden flex items-center justify-center relative cursor-default shadow-inner">
            <TextLoop
              text="FILMMAKER ✦ SCREENWRITER ✦ ANIMATOR ✦ PRODUCER"
              shape="line"
              speed={60}
              separator="✦"
              curviness={0}
              fontSize={32}
              fontWeight={700}
              letterSpacing={4}
              uppercase={true}
              color="#9ca3af" 
              ribbon={true}
              ribbonColor="#111115" 
              ribbonWidth={100}
              pauseOnHover={true}
            />
          </div>

          <div className="border border-gray-800 p-5 bg-[#0a0a0c]">
            <h2 className="font-burtons text-2xl text-gray-300 mb-4 border-b border-gray-800 pb-2">
              Characteristics
            </h2>
            
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 text-center">
              {[
                { label: 'STR', val: 15 },
                { label: 'DEX', val: 45 },
                { label: 'POW', val: 90 },
                { label: 'CON', val: 50 },
                { label: 'APP', val: 80 },
                { label: 'EDU', val: 60 },
                { label: 'SIZ', val: 40 },
                { label: 'INT', val: 80 }
              ].map((attr) => (
                <div key={attr.label} className="flex flex-col border border-gray-800 p-2 bg-black/40">
                  <span className="text-[10px] text-gray-500 tracking-wider mb-1">{attr.label}</span>
                  <span className="text-xl text-gray-300 font-bold">{attr.val}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="border border-red-900/40 bg-red-950/20 p-3 text-center flex flex-col justify-center">
                <span className="text-[10px] text-red-500/70 uppercase tracking-widest mb-1">Sanity</span>
                <span className="text-3xl text-red-400 font-serif font-bold">90</span>
              </div>
              <div className="border border-gray-800 bg-black/40 p-3 text-center flex flex-col justify-center">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Hit Points</span>
                <span className="text-3xl text-gray-300 font-serif">9</span>
              </div>
              <div className="border border-gray-800 bg-black/40 p-3 text-center flex flex-col justify-center">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Magic Points</span>
                <span className="text-3xl text-gray-300 font-serif">18</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 p-5 bg-[#0a0a0c] flex-grow">
            <h2 className="font-burtons text-2xl text-gray-300 mb-4 border-b border-gray-800 pb-2">
              Investigator Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                { name: 'Art / Craft', val: 99 },
                { name: 'Spot Hidden', val: 71 },
                { name: 'History', val: 80 },
                { name: 'Persuade', val: 80 },
                { name: 'Intimidate', val: 80 },
                { name: 'Language (Own): Italian', val: 70 },
                { name: 'Psychology', val: 70 },
                { name: 'Listen', val: 60 },
              ].map((skill) => (
                <div key={skill.name} className="flex justify-between items-end border-b border-gray-800/50 pb-1 group hover:border-gray-500 transition-colors">
                  <span className="text-sm text-gray-400 group-hover:text-gray-200">{skill.name}</span>
                  <span className="text-lg font-bold text-gray-300">{skill.val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}