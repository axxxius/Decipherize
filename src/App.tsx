import { CipherForm } from './components';
import { Typography } from '@mui/material';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <Typography fontSize='30px' mb={1} color='black' variant='h1'>
        Шифр Цезаря
      </Typography>
      <CipherForm />
    </div>
  );
};
