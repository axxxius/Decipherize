import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Language, useCaesarCipher } from '../../../utils';

export const SelectLanguage = () => {
  const { language, setLanguage } = useCaesarCipher();

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id='demo-simple-select-label'>Язык</InputLabel>
      <Select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        label='Age'
      >
        <MenuItem value='russian'>Русский</MenuItem>
        <MenuItem value='english'>Английский</MenuItem>
      </Select>
    </FormControl>
  );
};
