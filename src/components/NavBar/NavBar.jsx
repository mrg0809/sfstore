import CarWidget from "../CarWidget/CarWidget";

function NavBar() {
    return (

<nav class="navbar is-white has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="http://sportsfan.com.mx">
      <img src="https://cdn.shopify.com/s/files/1/0284/3046/7144/files/Logo_SF_180x.png?v=1589620799"></img>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample is-center" class="navbar-menu">
  <div class="navbar-start">
          <router-link to="/subfamilia/dama" class="navbar-item">Caballero</router-link>
          <router-link to="/subfamilia/caballero" class="navbar-item">Dama</router-link>
          <router-link to="/subfamilia/ninios" class="navbar-item">Niños</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Marcas</a>
            <div class="navbar-dropdown">
              <router-link to="/adidas" class="navbar-item">Adidas</router-link>
              <router-link to="/dc" class="navbar-item">DC</router-link>
              <router-link to="/jansport" class="navbar-item">Jansport</router-link>
              <router-link to="/nike" class="navbar-item">Nike</router-link>
              <router-link to="/puma" class="navbar-item">Puma</router-link>
              <router-link to="/reebok" class="navbar-item">Reebok</router-link>
              <router-link to="/vans" class="navbar-item">Vans</router-link>
              <router-link to="/volcom" class="navbar-item">Volcom</router-link>
            </div>
            
          </div>
          <router-link to="/ubicacion" class="navbar-item">Ubicaciones</router-link>
        </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light">
            <CarWidget />
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
)
}

export default NavBar;