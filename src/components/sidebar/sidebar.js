import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from  '../../assets/js/global';
import { lightTheme, darkTheme } from '../../assets/js/theme';


function Sidebar(){
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
return(
    
    <div className="sidebar" data-color="white" data-active-color="danger">
      <div className="logo">
     
        <a href="#" className="simple-text logo-normal">
          Creative Dashboard
         <div className="logo-image-big">
          </div> 
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="active ">
            <a href="./dashboard.html">
            <i className="fa fa-home" aria-hidden="true"></i>

              <p>Dashboard</p>
            </a>
          </li>
        
          <li>
            <a href="https://github.com/rubenmrios/react-dark-mode">
            <i className="fa fa-github" aria-hidden="true"></i>
              <p>GitHub</p>
            </a>
          </li>
          <li>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button className="btn btn-primary" onClick={toggleTheme}>Toggle theme</button>
        <footer>
        </footer>
      </>
    </ThemeProvider>
          </li>
        </ul>
      </div>
    </div>
);

}

export default Sidebar; 