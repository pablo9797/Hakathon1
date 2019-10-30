import React from 'react';
import './App.css';
import Movies from './Components/Movies'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://carreiradoadvogado.com.br/wp-content/uploads/2016/11/pessoa-atras-do-pano-estupro.jpg'} className="App-logo" alt="logo" />
      </header>
      <Movies />


    </div>
  );
}

export default App;
