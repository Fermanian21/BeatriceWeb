import { motion } from 'framer-motion';
// @ts-ignore
import RippleDistortion from '../components/RippleDistortion';
// @ts-ignore
import TextLoop from '../components/TextLoop';

export default function About() {
  return (
    <div className="min-h-screen w-full bg-[#050508] text-gray-300 font-serif p-4 md:p-8 flex justify-center">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full mx-auto border-4 border-double border-gray-700 bg-black/40 p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 relative shadow-2xl"
      >
        
        <div className="md:col-span-5 flex flex-col gap-6">
          
          <div className="border border-gray-800 bg-[#0a0a0c] p-4 shadow-inner">
            <div className="w-full aspect-[2/3] border-2 border-gray-700 bg-gray-900 relative overflow-hidden group flex items-center justify-center cursor-crosshair">
              
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
            
            <div className="mt-6 text-center">
              <h1 className="font-burtons text-5xl text-gray-200 tracking-wider mb-2">
                Beatrice
              </h1>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3 border-b border-gray-800 pb-3 flex justify-center gap-2">
                <span className="bg-gray-800 text-gray-800 select-none px-2 rounded-sm" aria-hidden="true" title="[REDACTED]">
                  De Prospero
                </span> 
                Trano
              </p>
              <p className="text-base text-gray-400">Age: 28 | Occupation: Artist</p>
            </div>
          </div>

          <div className="border border-gray-800 p-5 bg-[#0a0a0c] text-center mt-auto">
            <p className="text-base text-gray-400 italic">
              {`"One person's craziness is another person's reality."`}
            </p>
          </div>

        </div>

        <div className="md:col-span-7 flex flex-col gap-6">
          
          <div className="border border-gray-800 bg-[#0a0a0c] h-20 md:h-24 overflow-hidden flex items-center justify-center relative cursor-default shadow-inner">
            <TextLoop
              text="FILMMAKER ✦ SCREENWRITER ✦ ANIMATOR ✦ PRODUCER"
              shape="line"
              speed={60}
              separator="✦"
              curviness={0}
              fontSize={36}
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

          <div className="border border-gray-800 p-6 bg-[#0a0a0c]">
            <h2 className="font-burtons text-3xl text-gray-300 mb-5 border-b border-gray-800 pb-3">
              Characteristics
            </h2>
            
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 text-center">
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
                <div key={attr.label} className="flex flex-col border border-gray-800 p-3 bg-black/40">
                  <span className="text-xs text-gray-400 tracking-wider mb-2">{attr.label}</span>
                  <span className="text-2xl text-gray-300 font-bold">{attr.val}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-5 mt-6">
              <div className="border border-gray-800 bg-black/40 p-4 text-center flex flex-col justify-center">
                <span className="text-sm text-gray-400 font-bold tracking-wider mb-2">  SANITY</span>
                <span className="text-4xl text-gray-300 font-serif font-bold">90</span>
              </div>
              <div className="border border-gray-800 bg-black/40 p-4 text-center flex flex-col justify-center">
                <span className="text-sm text-gray-400 font-bold tracking-wider mb-2">HIT POINTS</span>
                <span className="text-4xl text-gray-300 font-serif font-bold">9</span>
              </div>
              <div className="border border-gray-800 bg-black/40 p-4 text-center flex flex-col justify-center">
                <span className="text-sm text-gray-400 font-bold tracking-wider mb-2">MAGIC POINTS</span>
                <span className="text-4xl text-gray-300 font-serif font-bold">18</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 p-6 bg-[#0a0a0c] flex-grow">
            <h2 className="font-burtons text-3xl text-gray-300 mb-6 border-b border-gray-800 pb-3">
              Investigator Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
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
                <div key={skill.name} className="flex justify-between items-end border-b border-gray-800/50 pb-2 group hover:border-gray-500 transition-colors">
                  <span className="text-base text-gray-400 group-hover:text-gray-200">{skill.name}</span>
                  <span className="text-xl font-bold text-gray-300">{skill.val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}