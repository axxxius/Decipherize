import { Box } from '@mui/material';
import './App.module.css';
import cl from './App.module.css';
import { Title, Panel } from './components';

export const App = () => {
  return (
    <div className={cl.app}>
      <Box display='flex' flexDirection='column' width={600}>
        <Title />
        <Panel />
      </Box>
    </div>
  );
};
