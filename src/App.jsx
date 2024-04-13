import './App.css'
// import {Paper, Switch} from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './Components/Header'
import Welcome from './Components/Welcome';
import Notes from './Components/Notes'

// import { useState } from 'react';

function App() {
  //material ui theme
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const {mode, setMode} = useState(prefersDarkMode);

  // const appTheme = createTheme({
  //   palette: {
  //     mode: mode ? 'dark': 'light',
  //   },
  // });
  // const handleChange = () => {
  //   if (mode) {
  //     setMode(false);
  //   } else {
  //     setMode(true);
  //   }
  // };


  return (
    // <ThemeProvider theme={appTheme}>
    //   <Paper elevation={0} sx={{height:"100vh"}} square> 
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
    //   </Paper>
    
    // </ThemeProvider>
    // Themeprovider, and paper are commented because they are not working as expected. 
  )
}

export default App

// Ever comment in this file is with regards to the theme switcher. It was supposed to implement a toggle switch that allows users switch between light and dark mode but after 
// adding the prefersDarkMode function so that if the user's deice setting is already in dark mode, it will automatrically be in dark mode, it stopped working.I'm not sure why but i'm going to leave it as is for now.