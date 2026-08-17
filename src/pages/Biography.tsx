import { motion } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';

export default function Biography() {
  return (
    <div className="p-4 md:p-8 min-h-screen flex flex-col items-center justify-center bg-[#050508] text-gray-300 overflow-x-hidden">
      
      <div className="text-center mb-6">
        <h1 className="font-burtons text-4xl md:text-5xl text-gray-200 tracking-wider">Biography & Logs</h1>
        <p className="text-red-900 uppercase tracking-[0.3em] text-xs mt-1 font-mono">eita eita</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
      >
        {/* @ts-ignore */}
        <HTMLFlipBook 
          width={390} 
          height={540} 
          showCover={true}
          maxShadowOpacity={0.8}
          mobileScrollSupport={true}
          usePortrait={false}
          className="mx-auto"
        >
          
          <div className="demoPage bg-[#050508] flex flex-col items-center justify-center select-none cursor-pointer relative overflow-hidden shadow-2xl">
            <img 
              src="/arccover.png" 
              alt="Book Cover"
              className="w-full h-full object-cover filter contrast-110 brightness-95"
            />
          </div>

          <div className="demoPage bg-[#fcfbf9] p-6 flex flex-col justify-between border-r border-neutral-300 text-neutral-800 relative shadow-[inset_-12px_0_20px_rgba(0,0,0,0.12)]">
            <div className="w-full h-[410px] bg-neutral-200 border border-neutral-300 shadow-sm relative flex items-center justify-center overflow-hidden">
              <img 
                src="beatrice1.png" 
                alt="Bio 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-xs font-serif italic text-neutral-600 mt-2">
              "pipipi popopo."
            </p>
          </div>

          <div className="demoPage bg-[#fcfbf9] p-6 flex flex-col justify-between border-l border-neutral-300 text-neutral-800 relative shadow-[inset_12px_0_20px_rgba(0,0,0,0.12)]">
            <div className="w-full h-[410px] bg-neutral-200 border border-neutral-300 shadow-sm relative flex items-center justify-center overflow-hidden">
              <div className="text-neutral-400 font-serif text-xs uppercase tracking-widest p-6 text-center">
                [ pipipi popopo ]
              </div>
            </div>
            <p className="text-center text-xs font-serif italic text-neutral-600 mt-2">
              "pipipi popopo."
            </p>
          </div>

          <div className="demoPage bg-[#050508] flex flex-col items-center justify-center select-none relative overflow-hidden shadow-2xl">
            <img 
              src="/arccover.png" 
              alt="Book Back Cover"
              className="w-full h-full object-cover scale-x-[-1] filter contrast-110 brightness-95"
            />
          </div>

        </HTMLFlipBook>
      </motion.div>

      <p className="text-xs text-neutral-500 mt-6 tracking-widest uppercase font-mono">
        Click & drag corners to turn pages
      </p>

    </div>
  );
}