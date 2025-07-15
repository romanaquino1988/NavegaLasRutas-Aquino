import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../data/Productos";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        const encontrado = productos.find((p) => p.id === parseInt(id));
        res(encontrado);
      }, 1000);
    });

    promesa.then((res) => setProducto(res));
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
