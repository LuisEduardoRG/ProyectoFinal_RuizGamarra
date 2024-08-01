import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./cart.css"; 

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Seguro quieres eliminar?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí, borrar",
      denyButtonText: "No, no borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("No se eliminó", "", "info");
      }
    });
  };

  return (
    <div className="cart-container">
      {cart.map((elemento) => (
        <div key={elemento.id} className="cart-item">
          <div className="cart-item-info">
            <h2 className="cart-item-title">{elemento.title}</h2>
            <div className="cart-item-details">
              <h2 className="cart-item-quantity">Cantidad: {elemento.quantity}</h2>
              <h2 className="cart-item-price">Precio: ${elemento.price}</h2>
              <Button
                variant="contained"
                onClick={() => handleDelete(elemento.id)}
                className="cart-item-button"
              >
                Eliminar
              </Button>
            </div>
          </div>
        </div>
      ))}
      <h2 className={`cart-total ${cart.length > 0 ? "" : "ocultar"}`}>
        El total a pagar es ${total}
      </h2>
      {cart.length > 0 && (
        <Button onClick={clearCart} className="clear-cart-button">
          Limpiar carrito
        </Button>
      )}
      <Link to="/checkout">
        <Button variant="contained" className="checkout-button">
          Finalizar compra
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
