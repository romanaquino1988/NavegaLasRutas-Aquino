import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        background: "yellow",
      }}
    >
      <div>
        <strong>Gordo Random</strong>
      </div>
      <div>
        <a href="">Inicio</a> | <a href="#">Comidas</a> |{" "}
        <a href="#">Eventos</a> | <a href="#">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
