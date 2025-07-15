import { useState } from "react";

const ItemCount = ({ stock, inicial }) => {
  const [contador, setContador] = useState(inicial);

  const sumar = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  return (
    <div>
      <button onClick={restar}>-</button>
      <span style={{ margin: "0 1rem" }}>{contador}</span>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default ItemCount;
