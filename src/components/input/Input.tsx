import { TextField } from '@mui/material';
import { useCaesarCipher } from '../../utils';

export const Input = () => {
  const { inputText, setInputText } = useCaesarCipher();

  return (
    <TextField
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      type='number'
      fullWidth
      label='Введите текст'
      multiline
      maxRows={5}
      sx={{ mb: '10px' }}
    />
  );
};
