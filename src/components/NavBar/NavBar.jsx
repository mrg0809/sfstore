import { Link, NavLink } from "react-router-dom";
import CarWidget from "../CarWidget/CarWidget";

function NavBar() {
    return (

<nav class="navbar is-white has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <Link to='/' class="navbar-item">
      <img src="https://cdn.shopify.com/s/files/1/0284/3046/7144/files/Logo_SF_180x.png?v=1589620799"></img>
    </Link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample is-center" class="navbar-menu">
  <div class="navbar-start">
          <Link to="/subfamilia/Dama" class="navbar-item">Dama</Link>
          <Link to="/subfamilia/Caballero" class="navbar-item">Caballero</Link>
          <Link to="/subfamilia/Ninios" class="navbar-item">Niños</Link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Marcas</a>
            <div class="navbar-dropdown">
              <Link to="marca/Adidas" class="navbar-item">Adidas</Link>
              <Link to="marca/DC" class="navbar-item">DC</Link>
              <Link to="marca/Jansport" class="navbar-item">Jansport</Link>
              <Link to="marca/Nike" class="navbar-item">Nike</Link>
              <Link to="marca/Puma" class="navbar-item">Puma</Link>
              <Link to="marca/Reebok" class="navbar-item">Reebok</Link>
              <Link to="marca/Vans" class="navbar-item">Vans</Link>
              <Link to="marca/Volcom" class="navbar-item">Volcom</Link>
            </div>
            
          </div>
          
        </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <Link to='/cart' class="button is-light">
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