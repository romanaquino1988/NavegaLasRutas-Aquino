import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../data/Productos";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(
          categoriaId
            ? productos.filter((prod) => prod.cat === categoriaId)
            : productos
        );
      }, 1000);
    });

    promesa.then((res) => setProductosFiltrados(res));
  }, [categoriaId]);

  return (
    <div>
      <h2>Menú de Gordo Random</h2>
      <ItemList productos={productosFiltrados} />
    </div>
  );
};

export default ItemListContainer;
