import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <strong>Precio: ${producto.precio}</strong>
      <ItemCount stock={10} inicial={1} />
    </div>
  );
};

export default ItemDetail;
