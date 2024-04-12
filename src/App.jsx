import './App.css'
import {Paper, Switch} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './Components/Header'
import Welcome from './Components/Welcome';
import Notes from './Components/Notes'
import Footer from './Components/Footer'
import { useState } from 'react';

function App() {
  //material ui theme
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const {mode, setMode} = useState(prefersDarkMode);

  const appTheme = createTheme({
    palette: {
      mode: mode ? 'dark': 'light',
    },
  });
  const handleChange = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true);
    }
  };


  return (
    <ThemeProvider theme={appTheme}>
      <Paper elevation={0} sx={{height:"100vh"}} square> 
       <div className='main'>
         <Header/>
         {/* <Switch
            checked={mode}
             onChange={handleChange}
             inputProps={{ 'aria-label': 'controlled' }} /> 
           This is supposed to be a toggle switch for a user to switch between light and dark mode but it isn't working for some reason. 
           So i'm going to leave it as is, submit this project to Flexisaf and come back later to work on it.  */}
         <Welcome/>
         <Notes/>
        
         </div>
      </Paper>
    
    </ThemeProvider>
  )
}

export default App
