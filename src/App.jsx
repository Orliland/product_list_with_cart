import Products from "./Products";
import Cart from "./Cart";

import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsList();
  }, []);

  async function getProductsList() {
    const res = await fetch("/data.json");
    const json = await res.json();
    setProducts(json);
  }

  return (
    <main className="main">
      <header className="header">
        <h1 className="logo text__preset__1">Desserts</h1>
      </header>
      <Products products={products} />
      <Cart />
    </main>
  );
};

export default App;
