import 'bulma/css/bulma.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Fragment } from 'react';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar />
      <br></br><br></br><br></br>
      <ItemListContainer saludo='Saludos desde ItemListContainer' />
      <ItemCount />
      
    </div>

  );
}

export default App;
