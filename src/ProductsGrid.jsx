import { useContext } from "react";
import { ProductsContext } from "./utils/ProductsContext";

import ProductCard from "./Product/ProductCard";

import "./Products.css";

const ProductsGrid = ({ onAddToCart, onRemoveFromCart }) => {
  const products = useContext(ProductsContext);

  return (
    <section className="products-grid">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        );
      })}
    </section>
  );
};

export default ProductsGrid;
