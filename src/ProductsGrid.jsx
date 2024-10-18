import { useContext } from "react";
import { ProductsContext } from "./utils/ProductsContext";

import ProductCard from "./Product/ProductCard";

import "./Products.css";

const ProductsGrid = () => {
  const products = useContext(ProductsContext);

  return (
    <section className="products-grid">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
};

export default ProductsGrid;
