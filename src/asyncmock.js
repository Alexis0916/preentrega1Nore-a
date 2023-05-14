import { db } from "./services/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getProducts = () => {
  return new Promise((resolve) => {
    const miColeccion = collection(db, "productos");
    console.log(miColeccion);

    getDocs(miColeccion).then((data) => {
      resolve(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  });
};

export const getUnProduct = (id) => {
  return new Promise((resolve) => {
    const miColeccion = collection(db, "productos");
   // console.log(miColeccion);

    getDocs(miColeccion).then((data) => {
      resolve(
        data.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .find((prod) => prod.id === id)
      );
    });
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    const miColeccion = collection(db, "productos");
    console.log(miColeccion);

    getDocs(miColeccion).then((data) => {
      resolve(
        data.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((prod) => prod.category === category)
      );
    });
  });
};
