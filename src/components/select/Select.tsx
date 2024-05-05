import { Box } from '@mui/material';
import { SelectLanguage } from './selectLanguage/selectLanguage.tsx';
import { SelectShift } from './selectShift/selectShift.tsx';

export const Select = () => (
  <Box display='flex' gap={2}>
    <SelectLanguage />
    <SelectShift />
  </Box>
);
