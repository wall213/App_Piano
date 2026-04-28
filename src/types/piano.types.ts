export interface Note {
  name: string;      // e.g. "C4"
  label: string;     // e.g. "DO"
  key: string;       // Keyboard key, e.g. "A"
  isBlack: boolean;
}

export interface KeyBinding {
  [key: string]: Note;
}

// Full octave starting from C4 for the visual keyboard
export const PIANO_KEYS: Note[] = [
  { name: 'C4', label: 'DO', key: 'A', isBlack: false },
  { name: 'C#4', label: '', key: 'W', isBlack: true },
  { name: 'D4', label: 'RE', key: 'S', isBlack: false },
  { name: 'D#4', label: '', key: 'E', isBlack: true },
  { name: 'E4', label: 'MI', key: 'D', isBlack: false },
  { name: 'F4', label: 'FA', key: 'F', isBlack: false },
  { name: 'F#4', label: '', key: 'T', isBlack: true },
  { name: 'G4', label: 'SOL', key: 'G', isBlack: false },
  { name: 'G#4', label: '', key: 'Y', isBlack: true },
  { name: 'A4', label: 'LA', key: 'H', isBlack: false },
  { name: 'A#4', label: '', key: 'U', isBlack: true },
  { name: 'B4', label: 'SI', key: 'J', isBlack: false },
  { name: 'C5', label: 'DO', key: 'K', isBlack: false },
  { name: 'C#5', label: '', key: 'O', isBlack: true },
  { name: 'D5', label: 'RE', key: 'L', isBlack: false },
];
