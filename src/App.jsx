import { useEffect } from "react";
import { useState } from "react";
import { ProductsContext, CartProductsContext } from "./utils/ProductsContext";

import "./App.css";

import ProductsGrid from "./ProductsGrid";
import Cart from "./Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const productsLocal = localStorage.getItem("products");

    if (productsLocal) {
      setProducts(JSON.parse(productsLocal));
    } else {
      getProductsList();
    }

    async function getProductsList() {
      const res = await fetch("/data.json");
      const json = await res.json();
      localStorage.setItem("products", JSON.stringify(json));
      setProducts(json);
    }
  }, []);

  useEffect(() => {
    const cartProductsLocal = localStorage.getItem("cartProductsLocal");
    if (cartProductsLocal && cartProducts == false) {
      setCartProducts(JSON.parse(cartProductsLocal));
    } else if (cartProducts == false) {
      setCartProducts({});
    } else {
      localStorage.setItem("cartProductsLocal", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

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
      <ProductsContext.Provider value={products}>
        <CartProductsContext.Provider value={cartProducts}>
          <ProductsGrid
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
        </CartProductsContext.Provider>
      </ProductsContext.Provider>
    </main>
  );
};

export default App;
