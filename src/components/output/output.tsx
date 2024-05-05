import { Box, Paper } from '@mui/material';
import { Title } from '../title/title.tsx';
import { useCaesarCipher } from '../../utils';

export const Output = () => {
  const { outputText } = useCaesarCipher();

  return (
    <Box>
      <Title name='Результат' />
      <Paper elevation={10}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 2 }}>{outputText}</Box>
      </Paper>
    </Box>
  );
};
