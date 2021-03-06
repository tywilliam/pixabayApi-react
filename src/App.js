import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/Navbar';
import Search from './components/search/Search';

function App() {
  return return (
    <MuiThemeProvider>
      <div>
          <NavBar />
          <Search />
      </div>
    </MuiThemeProvider>
  )
}

export default App;
