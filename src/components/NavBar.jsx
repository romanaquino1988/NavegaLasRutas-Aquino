import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Gordo Random</h1>
      <ul>
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/categoria/entrada">Entrada</Link>
        </li>
        <li>
          <Link to="/categoria/platoprincipal">Plato principal</Link>
        </li>
        <li>
          <Link to="/categoria/postre">Postre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
