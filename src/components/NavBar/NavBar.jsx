import { Link } from "react-router-dom";
import CarWidget from "../CarWidget/CarWidget";

function NavBar() {
    return (

<nav className="navbar is-white has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link to='/' className="navbar-item">
      <img src="https://cdn.shopify.com/s/files/1/0284/3046/7144/files/Logo_SF_180x.png?v=1589620799" alt="carritoimg"></img>
    </Link>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample is-center" className="navbar-menu">
  <div className="navbar-start">
          <Link to="/subfamilia/Dama" className="navbar-item">Dama</Link>
          <Link to="/subfamilia/Caballero" className="navbar-item">Caballero</Link>
          <Link to="/subfamilia/Ninios" className="navbar-item">Niños</Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Marcas</a>
            <div className="navbar-dropdown">
              <Link to="marca/Adidas" className="navbar-item">Adidas</Link>
              <Link to="marca/DC" className="navbar-item">DC</Link>
              <Link to="marca/Jansport" className="navbar-item">Jansport</Link>
              <Link to="marca/Nike" className="navbar-item">Nike</Link>
              <Link to="marca/Puma" className="navbar-item">Puma</Link>
              <Link to="marca/Reebok" className="navbar-item">Reebok</Link>
              <Link to="marca/Vans" className="navbar-item">Vans</Link>
              <Link to="marca/Volcom" className="navbar-item">Volcom</Link>
            </div>
            
          </div>
          
        </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to='/cart' className="button is-light">
            <CarWidget />
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
)
}

export default NavBar;