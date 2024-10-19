import { useContext } from "react";
import { ProductsContext } from "./utils/ProductsContext";

import ProductCard from "./Product/ProductCard";

import "./ProductsGrid.css";

const ProductsGrid = ({ onIncreaseProduct, onDecreaseProduct }) => {
  const products = useContext(ProductsContext);

  return (
    <section className="products-grid">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onIncreaseProduct={onIncreaseProduct}
            onDecreaseProduct={onDecreaseProduct}
          />
        );
      })}
    </section>
  );
};

export default ProductsGrid;
