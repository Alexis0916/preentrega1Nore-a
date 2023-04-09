import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <ItemListContainer greeting={"Nuestros Productos"} />
      </App>
    ),
    errorElement: <div>Componente de error de pagina</div>,
    children: [{ path: "/category/:id" }],
  },
  {
    path: "/item/:id",
    element: (
      <App>
        <ItemDetailContainer />
      </App>
    )
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
