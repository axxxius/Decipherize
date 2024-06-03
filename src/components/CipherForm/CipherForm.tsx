import { Button, TextField, Paper, Box } from '@mui/material';
import { useForm } from '../../hooks/useForm.ts';
import { caesarCipher, hackCaesarCipher } from '../../utils';

export const CipherForm = () => {
  const { field, setField, onChange } = useForm({
    initialValue: {
      message: '',
      key: '',
      keyHack: '',
      result: ''
    }
  });

  const handleEncrypt = () => {
    const offset = parseInt(field.key, 10);
    const encryptedMessage = caesarCipher(field.message, offset, true);

    setField({
      ...field,
      result: encryptedMessage
    });
  };

  const handleDecrypt = () => {
    const offset = parseInt(field.key, 10);
    const decryptedMessage = caesarCipher(field.message, offset, false);

    setField({
      ...field,
      result: decryptedMessage
    });
  };

  const handleHack = () => {
    const { decryptedMessage, foundKey } = hackCaesarCipher(field.message);

    setField({
      ...field,
      result: decryptedMessage,
      keyHack: foundKey.toString()
    });
  };

  return (
    <Paper
      elevation={10}
      sx={{ width: '1000px', display: 'flex', justifyContent: 'center', gap: '5px' }}
    >
      <Box sx={{ padding: '20px', width: '400px' }}>
        <TextField
          fullWidth
          label='Введите текст'
          name='message'
          value={field.message}
          onChange={onChange}
          multiline
          maxRows={20}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px 0 ', gap: '10px' }}>
        <TextField label='Ключ' name='key' type='text' value={field.key} onChange={onChange} />
        <Button variant='contained' onClick={handleEncrypt}>
          Зашифровать
        </Button>
        <Button sx={{ mb: 10 }} variant='contained' onClick={handleDecrypt}>
          Расшифровать
        </Button>
        <Button variant='contained' onClick={handleHack}>
          Взлом (МНК)
        </Button>
        <TextField label='Ключ' type='number' name='keyHack' value={field.keyHack} />
      </Box>
      <Box sx={{ padding: '20px', width: '400px' }}>
        <TextField
          fullWidth
          label='Результат'
          name='result'
          multiline
          maxRows={20}
          value={field.result}
        />
      </Box>
    </Paper>
  );
};
