import Products from "./Products";
import Cart from "./Cart";

import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState({});

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
      const removeFromObject = delete cartProducts[id];
      setCartProducts(removeFromObject);
    } else {
      setCartProducts({ ...cartProducts, [id]: cartProducts[id] - 1 });
    }
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
      <Cart />
    </main>
  );
};

export default App;
