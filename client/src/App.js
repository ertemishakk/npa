import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import MainPage from './Components/MainPage'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App" >

      <NavBar />
      <MainPage />

      <Footer />

    </div>
  );
}

export default App;
