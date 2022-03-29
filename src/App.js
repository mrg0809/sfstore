import 'bulma/css/bulma.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Fragment } from 'react';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <br></br><br></br><br></br>
          <Routes>
            <Route
              path='/'
              element={<ItemListContainer
                saludo='Lo nuevo!'
              />}
            />
            <Route path='/cart' element={<Cart />} />
            <Route path='/itemdetail' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>

  );
}

export default App;
