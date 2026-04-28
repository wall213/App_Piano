import React from 'react';
import { PIANO_KEYS } from '../../types/piano.types';

interface PianoKeyboardProps {
  activeNotes: Set<string>;
  onNotePress: (note: string) => void;
  onNoteRelease: (note: string) => void;
}

const PianoKeyboard: React.FC<PianoKeyboardProps> = ({ 
  activeNotes, 
  onNotePress, 
  onNoteRelease 
}) => {
  return (
    <div className="relative flex justify-center bg-white p-4 pb-4 pt-0 rounded-b-2xl shadow-xl border border-gray-200">
      {PIANO_KEYS.map((note) => {
        const isActive = activeNotes.has(note.name);
        
        if (note.isBlack) {
          // Black key
          return (
            <div
              key={note.name}
              onMouseDown={() => onNotePress(note.name)}
              onMouseUp={() => onNoteRelease(note.name)}
              onMouseLeave={() => onNoteRelease(note.name)}
              onTouchStart={() => onNotePress(note.name)}
              onTouchEnd={() => onNoteRelease(note.name)}
              className={`
                absolute w-12 h-44 bg-black rounded-b-md shadow-md z-10 
                flex flex-col justify-end items-center pb-4 cursor-pointer
                transition-all duration-75 select-none
                ${isActive ? 'bg-zinc-800 h-43 shadow-inner' : ''}
              `}
              style={{
                left: `calc(${PIANO_KEYS.filter(k => !k.isBlack).findIndex(k => PIANO_KEYS.indexOf(k) > PIANO_KEYS.indexOf(note)) * 5}rem - 1.5rem)`
              }}
            >
              <span className="text-white/50 text-[10px] font-medium tracking-wider">
                {note.key}
              </span>
            </div>
          );
        }

        // White key
        return (
          <div
            key={note.name}
            onMouseDown={() => onNotePress(note.name)}
            onMouseUp={() => onNoteRelease(note.name)}
            onMouseLeave={() => onNoteRelease(note.name)}
            onTouchStart={() => onNotePress(note.name)}
            onTouchEnd={() => onNoteRelease(note.name)}
            className={`
              w-20 h-72 bg-white border border-gray-300 rounded-b-lg
              flex flex-col justify-end items-center pb-6 cursor-pointer
              transition-all duration-75 select-none relative
              ${isActive ? 'bg-gray-100 shadow-inner' : 'shadow-sm'}
            `}
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-orange-800/80 text-xs font-semibold tracking-wider">
                {note.label}
              </span>
              <span className="text-gray-400 text-[10px] font-medium">
                {note.key}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PianoKeyboard;
