import { Box, Typography } from '@mui/material';

export const Title = () => {
  return (
    <Box textAlign='left' sx={{ paddingBottom: '10px' }}>
      <Typography sx={{ fontSize: 30, color: 'black' }} variant='h1' component='h1'>
        Шифр Цезаря
      </Typography>
    </Box>
  );
};
