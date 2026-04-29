export interface Note {
  name: string;      // e.g. "C4"
  label: string;     // e.g. "DO"
  key: string;       // Keyboard key, e.g. "A"
  isBlack: boolean;
}

export interface KeyBinding {
  [key: string]: Note;
}

// Full octave starting from B3 for the visual keyboard
export const PIANO_KEYS: Note[] = [
  { name: 'B3', label: 'SI', key: 'SHIFTLEFT', isBlack: false },
  { name: 'C4', label: 'DO', key: 'Z', isBlack: false },
  { name: 'C#4', label: '', key: 'S', isBlack: true },
  { name: 'D4', label: 'RE', key: 'X', isBlack: false },
  { name: 'D#4', label: '', key: 'D', isBlack: true },
  { name: 'E4', label: 'MI', key: 'C', isBlack: false },
  { name: 'F4', label: 'FA', key: 'V', isBlack: false },
  { name: 'F#4', label: '', key: 'G', isBlack: true },
  { name: 'G4', label: 'SOL', key: 'B', isBlack: false },
  { name: 'G#4', label: '', key: 'H', isBlack: true },
  { name: 'A4', label: 'LA', key: 'N', isBlack: false },
  { name: 'A#4', label: '', key: 'J', isBlack: true },
  { name: 'B4', label: 'SI', key: 'M', isBlack: false },
  { name: 'C5', label: 'DO', key: ',', isBlack: false },
  { name: 'C#5', label: '', key: 'L', isBlack: true },
  { name: 'D5', label: 'RE', key: '.', isBlack: false },
  { name: 'D#5', label: '', key: 'Ñ', isBlack: true },
  { name: 'E5', label: 'MI', key: '-', isBlack: false },
  { name: 'F5', label: 'FA', key: 'SHIFTRIGHT', isBlack: false },
  { name: 'F#5', label: '', key: 'ENTER', isBlack: true },
  { name: 'G5', label: 'SOL', key: '1', isBlack: false },
  { name: 'G#5', label: '', key: '4', isBlack: true },
  { name: 'A5', label: 'LA', key: '2', isBlack: false },
  { name: 'A#5', label: '', key: '5', isBlack: true },
  { name: 'B5', label: 'SI', key: '3', isBlack: false },
];
