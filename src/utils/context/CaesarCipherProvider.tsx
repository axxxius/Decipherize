import { ReactNode, useCallback, useMemo, useState } from 'react';
import { CaesarCipherContext } from './CaesarCipherContext.ts';

export type Language = 'russian' | 'english';

const alphabet = {
  russian: 'абвгдежзийклмнопрстуфхцчшщъыьэюя',
  english: 'abcdefghijklmnopqrstuvwxyz'
};

interface CaesarCipherProviderProps {
  children: ReactNode;
}

const CaesarCipherProvider = ({ children }: CaesarCipherProviderProps) => {
  const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState<Language>('russian');
  const [shift, setShift] = useState<number>(1);
  const [outputText, setOutputText] = useState('');

  const handleDecrypt = useCallback(() => {
    const text = inputText.toLowerCase();
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = alphabet[language].indexOf(char);
      if (index !== -1) {
        const newIndex = (index + shift) % alphabet[language].length;
        result += alphabet[language][newIndex];
      } else {
        result += char;
      }
    }
    setOutputText(result);
  }, [inputText, language, shift, setOutputText]);

  const handleEncrypt = useCallback(() => {
    const text = inputText.toLowerCase();
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = alphabet[language].indexOf(char);
      if (index !== -1) {
        let newIndex = index - shift;
        if (newIndex < 0) {
          newIndex = alphabet[language].length + newIndex;
        }
        result += alphabet[language][newIndex];
      } else {
        result += char;
      }
    }
    setOutputText(result);
  }, [inputText, shift, language, setOutputText]);

  const value = useMemo(
    () => ({
      inputText,
      setInputText,
      language,
      setLanguage,
      shift,
      setShift,
      outputText,
      setOutputText,
      handleEncrypt,
      handleDecrypt
    }),
    [
      inputText,
      setInputText,
      language,
      setLanguage,
      shift,
      setShift,
      outputText,
      setOutputText,
      handleEncrypt,
      handleDecrypt
    ]
  );

  return <CaesarCipherContext.Provider value={value}>{children}</CaesarCipherContext.Provider>;
};

export default CaesarCipherProvider;
