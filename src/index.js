import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Componente de error de pagina</div>,
    children: [
      { path: "/category/:id" },
    ],
  },
  {
    path: "/item/:id",
    element: <ItemDetailContainer />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
