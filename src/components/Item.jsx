import { Link } from "react-router-dom";

const Item = ({ id, nombre, descripcion, precio }) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <strong>${precio}</strong>
      <br />
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
