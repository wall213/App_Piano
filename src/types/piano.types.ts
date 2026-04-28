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
  { name: 'C4', label: 'DO', key: '<', isBlack: false },
  { name: 'C#4', label: '', key: 'A', isBlack: true },
  { name: 'D4', label: 'RE', key: 'Z', isBlack: false },
  { name: 'D#4', label: '', key: 'S', isBlack: true },
  { name: 'E4', label: 'MI', key: 'X', isBlack: false },
  { name: 'F4', label: 'FA', key: 'C', isBlack: false },
  { name: 'F#4', label: '', key: 'F', isBlack: true },
  { name: 'G4', label: 'SOL', key: 'V', isBlack: false },
  { name: 'G#4', label: '', key: 'G', isBlack: true },
  { name: 'A4', label: 'LA', key: 'B', isBlack: false },
  { name: 'A#4', label: '', key: 'H', isBlack: true },
  { name: 'B4', label: 'SI', key: 'N', isBlack: false },
  { name: 'C5', label: 'DO', key: 'M', isBlack: false },
  { name: 'C#5', label: '', key: 'K', isBlack: true },
  { name: 'D5', label: 'RE', key: ',', isBlack: false },
  { name: 'D#5', label: '', key: 'L', isBlack: true },
  { name: 'E5', label: 'MI', key: '.', isBlack: false },
  { name: 'F5', label: 'FA', key: '-', isBlack: false },
  { name: 'F#5', label: '', key: '{', isBlack: true },
  { name: 'G5', label: 'SOL', key: 'SHIFTRIGHT', isBlack: false },
  { name: 'G#5', label: '', key: '}', isBlack: true },
  { name: 'A5', label: 'LA', key: 'ARROWUP', isBlack: false },
  { name: 'A#5', label: '', key: 'ENTER', isBlack: true },
  { name: 'B5', label: 'SI', key: '1', isBlack: false },
];
