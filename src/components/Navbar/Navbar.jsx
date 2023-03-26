/* snippet rafce */
import React from "react";
import "./Navbar.css";
import logo from "../../assets/img/exa.jpg";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="logo"
              width="60"
              height="40"
              display="inline-block"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tipos de pinturas
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Exterior
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Interior
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Drywall
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart">
        <CartWidget />
        <strong  className="cartCantidad">1</strong>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
