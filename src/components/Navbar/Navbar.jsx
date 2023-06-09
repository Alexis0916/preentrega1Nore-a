/* snippet rafce */
import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";



const Navbar = ({countProducts}) => {



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="logo"
              width="60"
              height="40"
              display="inline-block"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler me-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="cart">
            
            <Link to="/cart"> 
              <CartWidget countProducts={countProducts} /> 
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <p 
                  className="enlaces nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tipos de pinturas
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/category/exterior">
                      Exterior
                    </Link>
                  </li>
                  <li>

                    <Link className="dropdown-item" to="/category/interior">
                      Interior
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/category/drywall">
                      Drywall
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link enlaces" to="/category/adicionales">
                  Adicionales
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
