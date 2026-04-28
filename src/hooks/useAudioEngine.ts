import { useState, useEffect, useRef, useCallback } from 'react';
import * as Tone from 'tone';

export const useAudioEngine = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const synthRef = useRef<Tone.PolySynth | null>(null);

  useEffect(() => {
    // Initialize Tone.js PolySynth (simulating a piano)
    const initAudio = async () => {
      await Tone.start();
      
      const synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: {
          type: 'triangle' // Triangle wave sounds a bit closer to a keyboard than a sine wave
        },
        envelope: {
          attack: 0.005,
          decay: 0.1,
          sustain: 0.3,
          release: 1
        }
      }).toDestination();

      synthRef.current = synth;
      setIsLoaded(true);
    };

    // We only init after user interacts, so we might need to call this manually
    initAudio();

    return () => {
      synthRef.current?.dispose();
    };
  }, []);

  const playNote = useCallback((note: string) => {
    if (!synthRef.current) return;
    try {
      synthRef.current.triggerAttack(note, Tone.now());
    } catch (e) {
      console.warn("Audio Context not started yet", e);
    }
  }, []);

  const releaseNote = useCallback((note: string) => {
    if (!synthRef.current) return;
    try {
      synthRef.current.triggerRelease(note, Tone.now());
    } catch (e) {
      console.warn("Audio Context not started yet", e);
    }
  }, []);

  return { isLoaded, playNote, releaseNote };
};
