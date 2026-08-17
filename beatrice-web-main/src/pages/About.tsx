import { motion } from 'framer-motion';
// @ts-ignore
import RippleDistortion from '../components/RippleDistortion';
// @ts-ignore
import TextLoop from '../components/TextLoop';

export default function About() {
  return (
    <div className="min-h-screen w-full bg-[#050508] text-gray-300 p-4 md:p-8 flex items-center justify-center font-serif">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full border-4 border-double border-gray-700 bg-black/40 p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 relative shadow-2xl"
      >
        
        {/* Coluna da Esquerda: Foto e Identidade */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="border border-gray-800 bg-[#0a0a0c] p-3 shadow-inner">
            <div className="w-full aspect-[3/4] border-2 border-gray-700 bg-gray-900 relative overflow-hidden group flex items-center justify-center">
              <div className="w-full h-full [filter:grayscale(100%)] hover:[filter:grayscale(0%)] transition-[filter] duration-500 cursor-crosshair">
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
              <h1 className="font-burtons text-4xl text-gray-100 tracking-wide mb-1">
                Beatrice
              </h1>
              
              {/* De Prospero censurado + Trano na fonte padrão */}
              <p className="font-serif text-sm text-gray-400 tracking-[0.2em] mb-3 border-b border-gray-800 pb-2 uppercase flex justify-center items-center gap-2">
                <span className="bg-gray-800 text-gray-800 select-none px-2 rounded-sm" aria-hidden="true" title="[REDACTED]">
                  De Prospero
                </span> 
                Trano
              </p>

              <p className="font-serif text-[11px] text-gray-400 tracking-[0.2em] uppercase">
                Age: <span className="text-gray-400">28</span> | Occupation: <span className="text-gray-400">Artist</span>
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-4 bg-[#0a0a0c] text-center italic text-gray-500 text-sm">
            "One person's craziness is another person's reality."
          </div>
        </div>

        {/* Coluna da Direita: Profissões e Status */}
        <div className="md:col-span-8 flex flex-col gap-4">
          
          <div className="border border-gray-800 bg-[#0a0a0c] h-16 md:h-20 overflow-hidden flex items-center justify-center relative shadow-inner font-burtons font-normal normal-case">
            <TextLoop
              text="Filmmaker ✦ Screenwriter ✦ Animator ✦ Producer"
              shape="line"
              speed={60}
              separator="✦"
              fontSize={50}
              fontWeight={300}
              uppercase={false}
              color="#d1d5db"
              ribbon={true}
              ribbonColor="#111115"
              pauseOnHover={true}
            />
          </div>

          <div className="border border-gray-800 p-5 bg-[#0a0a0c]">
            <h2 className="font-burtons text-3xl text-gray-200 mb-4 border-b border-gray-800 pb-2 tracking-wide">
              Characteristics
            </h2>
            
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 text-center">
              {[
                { label: 'STR', val: 15 }, { label: 'DEX', val: 45 },
                { label: 'POW', val: 90 }, { label: 'CON', val: 50 },
                { label: 'APP', val: 80 }, { label: 'EDU', val: 60 },
                { label: 'SIZ', val: 40 }, { label: 'INT', val: 80 }
              ].map((attr) => (
                <div key={attr.label} className="flex flex-col border border-gray-800 p-2 bg-black/40">
                  <span className="text-[10px] text-gray-500 tracking-wider">{attr.label}</span>
                  <span className="text-2xl text-gray-200 font-burtons mt-1">{attr.val}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="border border-red-900/40 bg-red-950/20 p-3 text-center">
                <span className="block text-[10px] text-red-500/70 tracking-widest uppercase">Sanity</span>
                <span className="text-4xl text-red-400 font-burtons">90</span>
              </div>
              <div className="border border-gray-800 bg-black/40 p-3 text-center">
                <span className="block text-[10px] text-gray-500 tracking-widest uppercase">HP</span>
                <span className="text-4xl text-gray-200 font-burtons">9</span>
              </div>
              <div className="border border-gray-800 bg-black/40 p-3 text-center">
                <span className="block text-[10px] text-gray-500 tracking-widest uppercase">MP</span>
                <span className="text-4xl text-gray-200 font-burtons">18</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 p-5 bg-[#0a0a0c] flex-grow">
            <h2 className="font-burtons text-3xl text-gray-200 mb-4 border-b border-gray-800 pb-2 tracking-wide">
              Investigator Skills
            </h2>
            
            {/* Investigator Skills com fonte limpa e sem itálico */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 font-serif not-italic">
              {[
                { name: 'Art / Craft', val: 99 }, { name: 'Spot Hidden', val: 71 },
                { name: 'History', val: 80 }, { name: 'Persuade', val: 80 },
                { name: 'Intimidate', val: 80 }, { name: 'Language: Italian', val: 70 },
                { name: 'Psychology', val: 70 }, { name: 'Listen', val: 60 },
              ].map((skill) => (
                <div key={skill.name} className="flex justify-between items-end border-b border-gray-800/50 pb-1">
                  <span className="text-sm text-gray-400 not-italic">{skill.name}</span>
                  <span className="text-xl text-gray-200 font-burtons">{skill.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}