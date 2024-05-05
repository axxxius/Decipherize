import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useCaesarCipher } from '../../../utils';

export const SelectShift = () => {
  const { language, shift, setShift } = useCaesarCipher();

  return (
    <FormControl sx={{ width: '200px' }}>
      <InputLabel id='demo-simple-select-label'>Сдвиг</InputLabel>
      <Select
        value={shift}
        onChange={(e) => setShift(Number(e.target.value))}
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        label='Age'
        MenuProps={{
          style: {
            height: '220px'
          }
        }}
      >
        {Array.from({ length: language === 'russian' ? 32 : 26 }, (_, i) => i + 1).map((num) => (
          <MenuItem key={num} value={num}>
            {num}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
