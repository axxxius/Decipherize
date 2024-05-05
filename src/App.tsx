import { Box } from '@mui/material';
import './App.module.css';
import cl from './App.module.css';
import { Title, Panel, Output } from './components';
import CaesarCipherProvider from './utils/context/CaesarCipherProvider.tsx';

export const App = () => (
  <CaesarCipherProvider>
    <div className={cl.app}>
      <Box display='flex' flexDirection='column' gap={3} width={600}>
        <Title name='Шифр Цезаря' />
        <Panel />
        <Output />
      </Box>
    </div>
  </CaesarCipherProvider>
);
