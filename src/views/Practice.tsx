import React from 'react';
import { Video, Mic, Settings } from 'lucide-react';
import { useKeyboardBindings } from '../hooks/useKeyboardBindings';
import PianoKeyboard from '../components/piano/PianoKeyboard';

const Practice: React.FC = () => {
  const { activeNotes, lastNote, handleNotePress, handleNoteRelease } = useKeyboardBindings();

  return (
    <div className="flex-1 flex flex-col relative bg-gradient-to-b from-white/40 to-transparent">
      {/* Top Status Area */}
      <div className="pt-12 pb-8 flex flex-col items-center">
        <p className="text-[11px] text-piano-muted tracking-[0.2em] uppercase font-medium mb-6">
          NOTA ACTUAL
        </p>
        
        {/* Note Display Circle */}
        <div className="w-24 h-24 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-8 transition-all duration-200">
          <span className="text-xl font-medium text-black">
            {lastNote || '--'}
          </span>
        </div>

        {/* Metronome Indicator */}
        <div className="flex items-center gap-4 border-t border-b border-gray-100 py-3 px-12">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-700"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>
          <span className="text-sm font-medium text-black">92 BPM</span>
        </div>
      </div>

      {/* Main Keyboard Area */}
      <div className="flex-1 flex justify-center items-center px-8 pb-12">
        <div className="relative">
          <div className="absolute -top-4 left-0 right-0 h-4 bg-gray-100 rounded-t-xl border border-gray-200 border-b-0"></div>
          <PianoKeyboard 
            activeNotes={activeNotes}
            onNotePress={handleNotePress}
            onNoteRelease={handleNoteRelease}
          />
        </div>
      </div>

      {/* Right Toolbar (Visual Only as requested) */}
      <div className="absolute right-8 bottom-24 flex flex-col gap-4">
        <button className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-black hover:bg-gray-50 transition-colors">
          <Video size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-black hover:bg-gray-50 transition-colors">
          <Mic size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-black shadow-md flex items-center justify-center text-white hover:bg-black/90 transition-colors">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};

export default Practice;
