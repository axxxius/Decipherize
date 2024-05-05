import { Button, Paper, Box } from '@mui/material';
import { useCaesarCipher } from '../../utils';
import { Input } from '../input/Input.tsx';
import { Select } from '../select/Select.tsx';

export const Panel = () => {
  const { handleDecrypt, handleEncrypt } = useCaesarCipher();
  return (
    <Paper
      elevation={10}
      sx={{
        width: '100%',
        padding: '25px 20px',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center'
      }}
    >
      <Input />
      <Select />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mt: 2 }}>
        <Button onClick={handleDecrypt} size='large' variant='contained'>
          Зашифровать
        </Button>
        <Button onClick={handleEncrypt} size='large' variant='contained'>
          Расшифровать
        </Button>
      </Box>
    </Paper>
  );
};
