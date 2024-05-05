import { Box, Typography } from '@mui/material';

interface TitleProps {
  name: string;
}

export const Title = ({ name }: TitleProps) => {
  return (
    <Box textAlign='left' sx={{ paddingBottom: '10px' }}>
      <Typography sx={{ fontSize: 30, color: 'black' }} variant='h1' component='h1'>
        {name}
      </Typography>
    </Box>
  );
};
