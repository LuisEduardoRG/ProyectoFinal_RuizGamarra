import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";
export const Navbar = () => {
  return (
    <div>
      <>
        <div className="containerNavbar">
          <Link to="/">
          <img className="logo" src="https://res.cloudinary.com/dbmleuqmy/image/upload/v1718301949/logo_iqq1le.png" alt="" />
          </Link>
          <ul className="categories">

          <Link className="boton-menu boton-categoria active" to="/"> 
                <FaStore className="icon"/> TODO
            </Link>
            <Link className="boton-menu boton-categoria" to="/category/hombre">Hombre</Link>
            <Link className="boton-menu boton-categoria" to="/category/mujer">Mujer</Link>
            <Link className="boton-menu boton-categoria" to="/category/billetera">Billetera</Link>
            <Link className="boton-menu boton-categoria" to="/category/cartera">Carteras</Link>
            <Link className="boton-menu boton-categoria" to="/category/morral">Morrales</Link>
            
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};