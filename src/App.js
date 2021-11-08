import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
import Header from './Components/Header';
import Body from './Components/Body/Body';


function App() {

  

  return (
    <div className="App">
      <Header />   
      <Body />
    </div>
  );
}

export default App;
