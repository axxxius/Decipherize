import { createContext, Dispatch, SetStateAction } from 'react';
import { Language } from './CaesarCipherProvider.tsx';

interface CaesarCipherContextProps {
  inputText: string;
  language: Language;
  outputText: string;
  shift: number;
  setInputText: Dispatch<SetStateAction<string>>;
  setLanguage: Dispatch<SetStateAction<Language>>;
  setShift: Dispatch<SetStateAction<number>>;
  setOutputText: Dispatch<SetStateAction<string>>;
  handleEncrypt: () => void;
  handleDecrypt: () => void;
}

export const CaesarCipherContext = createContext<CaesarCipherContextProps>({
  inputText: '',
  language: 'russian',
  shift: 1,
  outputText: '',
  setInputText: () => {},
  setLanguage: () => {},
  setShift: () => {},
  setOutputText: () => {},
  handleEncrypt: () => {},
  handleDecrypt: () => {}
});
