import Products from "./Products";
import Cart from "./Cart";

import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getProductsList();
  }, []);

  async function getProductsList() {
    const res = await fetch("/data.json");
    const json = await res.json();
    setProducts(json);
  }

  const handleAddToCart = (id) => {
    if (cartProducts[id]) {
      setCartProducts({ ...cartProducts, [id]: cartProducts[id] + 1 });
    } else {
      setCartProducts({ ...cartProducts, [id]: 1 });
    }
  };

  const handleRemoveFromCart = (id) => {
    if (cartProducts[id] == 1) {
      const newObject = { ...cartProducts };
      delete newObject[id];

      setCartProducts(newObject);
    } else {
      setCartProducts({ ...cartProducts, [id]: cartProducts[id] - 1 });
    }
  };

  const handleRemoveProduct = (id) => {
    const newObject = { ...cartProducts };
    delete newObject[id];
    setCartProducts(newObject);
  };

  const handleModal = () => {
    if (showModal) {
      setCartProducts({});
    }
    setShowModal(!showModal);
  };

  return (
    <main className="main">
      <header className="header">
        <h1 className="logo text__preset__1">Desserts</h1>
      </header>
      <Products
        cartProducts={cartProducts}
        products={products}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <Cart
        cartProducts={cartProducts}
        products={products}
        onRemoveProduct={handleRemoveProduct}
        showModal={showModal}
        handleModal={handleModal}
      />
    </main>
  );
};

export default App;
