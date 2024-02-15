import { FormControl, InputLabel, Select, MenuItem, Box, TextField } from '@mui/material';

export const Dropdown = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, paddingBottom: '20px' }}>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id='demo-simple-select-label'>Язык</InputLabel>
          <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Age'>
            <MenuItem value={10}>Русский</MenuItem>
            <MenuItem value={20}>Английский</MenuItem>
          </Select>
        </FormControl>
        <TextField sx={{ width: '100%' }} label='Сдвиг' />
      </Box>
    </div>
  );
};
