import { useState, useEffect } from 'react';
import { PIANO_KEYS} from '../types/piano.types';
import { useAudioEngine } from './useAudioEngine';

export const useKeyboardBindings = () => {
  const [activeNotes, setActiveNotes] = useState<Set<string>>(new Set());
  const [lastNote, setLastNote] = useState<string | null>(null);
  const { playNote, releaseNote } = useAudioEngine();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return; // Ignore hold repetition
      const key = e.key.toUpperCase();
      const code = e.code.toUpperCase();
      const note = PIANO_KEYS.find(k => k.key === key || k.key === code);
      
      if (note && !activeNotes.has(note.name)) {
        setActiveNotes(prev => {
          const next = new Set(prev);
          next.add(note.name);
          return next;
        });
        setLastNote(note.name);
        playNote(note.name);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const code = e.code.toUpperCase();
      const note = PIANO_KEYS.find(k => k.key === key || k.key === code);
      
      if (note) {
        setActiveNotes(prev => {
          const next = new Set(prev);
          next.delete(note.name);
          return next;
        });
        releaseNote(note.name);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [activeNotes, playNote, releaseNote]);

  // Methods for touch/click support
  const handleNotePress = (noteName: string) => {
    setActiveNotes(prev => {
      const next = new Set(prev);
      next.add(noteName);
      return next;
    });
    setLastNote(noteName);
    playNote(noteName);
  };

  const handleNoteRelease = (noteName: string) => {
    setActiveNotes(prev => {
      const next = new Set(prev);
      next.delete(noteName);
      return next;
    });
    releaseNote(noteName);
  };

  return { 
    activeNotes, 
    lastNote, 
    handleNotePress, 
    handleNoteRelease 
  };
};
