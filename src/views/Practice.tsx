import React from 'react';
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
    </div>
  );
};

export default Practice;
