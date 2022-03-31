import 'bulma/css/bulma.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
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
            <Route
              path='/marca/:marca'
              element={<ItemListContainer
                saludo='Lo nuevo!'
              />}
            />
            <Route
              path='/subfamilia/:subfamilia'
              element={<ItemListContainer
                saludo='Lo nuevo!'
              />}
            />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:modelo' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>

  );
}

export default App;
