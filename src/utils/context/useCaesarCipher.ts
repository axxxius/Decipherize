import { useContext } from 'react';
import { CaesarCipherContext } from './CaesarCipherContext.ts';

export const useCaesarCipher = () => useContext(CaesarCipherContext);
