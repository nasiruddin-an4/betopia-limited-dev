import React from 'react';

export default function Loading() {
  return (
    <div className="w-full min-h-[85vh] bg-white flex flex-col items-center justify-center">
        {/* Central Branded Loader */}
        <div className="relative flex flex-col items-center justify-center">
           {/* Ambient Glow */}
           <div className="absolute w-32 h-32 bg-brand-bright-orange rounded-full blur-[50px] opacity-20 animate-pulse"></div>
           
           {/* Loader Animation Box */}
           <div className="relative z-10 w-20 h-20 bg-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center overflow-hidden">
               {/* Internal scanning line effect */}
               <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-brand-bright-orange/10 to-transparent animate-[scan_2s_ease-in-out_infinite]"></div>
               
               {/* B Logo Representation */}
               <span className="text-3xl font-black text-gray-800 tracking-tighter">b<span className="text-brand-bright-orange">.</span></span>
           </div>

           {/* Loading Text */}
           <div className="mt-8 flex flex-col items-center gap-3">
              <div className="text-gray-500 font-medium tracking-widest text-sm uppercase">Loading Content</div>
              <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-brand-bright-orange animate-bounce" style={{ animationDelay: '0ms' }}></div>
                 <div className="w-2 h-2 rounded-full bg-brand-bright-orange animate-bounce" style={{ animationDelay: '150ms' }}></div>
                 <div className="w-2 h-2 rounded-full bg-brand-bright-orange animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
           </div>
        </div>

        {/* Global style for scanning animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}} />
    </div>
  );
}
