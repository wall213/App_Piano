import { useState, useEffect, useRef, useCallback } from 'react';
import * as Tone from 'tone';

export const useAudioEngine = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const synthRef = useRef<Tone.Sampler | null>(null);

  useEffect(() => {
    // Initialize Tone.js Sampler
    const initAudio = async () => {
      await Tone.start();
      
      const sampler = new Tone.Sampler({
        urls: {
          C4: "C4.mp3",
          "D#4": "Ds4.mp3",
          "F#4": "Fs4.mp3",
          A4: "A4.mp3",
        },
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/salamander/",
      }).toDestination();

      Tone.loaded().then(() => {
        setIsLoaded(true);
      });

      synthRef.current = sampler;
    };

    initAudio();

    return () => {
      synthRef.current?.dispose();
    };
  }, []);

  const playNote = useCallback((note: string) => {
    if (!synthRef.current || !isLoaded) return;
    try {
      synthRef.current.triggerAttack(note, Tone.now());
    } catch (e) {
      console.warn("Audio Context not started yet", e);
    }
  }, [isLoaded]);

  const releaseNote = useCallback((note: string) => {
    if (!synthRef.current || !isLoaded) return;
    try {
      synthRef.current.triggerRelease(note, Tone.now());
    } catch (e) {
      console.warn("Audio Context not started yet", e);
    }
  }, [isLoaded]);

  return { isLoaded, playNote, releaseNote };
};
