import { Button, Paper, TextField, Box } from '@mui/material';
import { Dropdown } from '..';

export const Panel = () => {
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
      <TextField
        fullWidth
        label='Введите текст'
        multiline
        maxRows={5}
        sx={{ paddingBottom: '10px' }}
      />

      <Dropdown />
      <Box>
        <Button size='large' sx={{ width: '300px' }} variant='contained'>
          Рассчитать
        </Button>
      </Box>
    </Paper>
  );
};
