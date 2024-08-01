import { Button } from "@mui/material";
import "./counter.css";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <div className="counter-container">
      <Button variant="contained" className="counter-button" onClick={restar}>
        Restar
      </Button>
      <h2>{contador}</h2>
      <Button variant="contained" className="counter-button" onClick={sumar}>
        Sumar
      </Button>
      <Button variant="outlined" className="add-to-cart-button" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};
