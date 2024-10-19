import { useContext } from "react";
import { ProductsContext, CartProductsContext } from "./utils/ProductsContext";
import EmptyCart from "./assets/illustration-empty-cart.svg";
import ProductMinified from "./Product/ProductMinified";

import "./ProductsList.css";

const ProductsList = ({ countProducts, type, onRemoveProduct }) => {
  const products = useContext(ProductsContext);
  const cartProducts = useContext(CartProductsContext);

  let total = 0;

  for (const product in cartProducts) {
    const productData = products.filter((p) => p.id == product)[0];
    total += cartProducts[product] * productData.price;
  }

  const addedProducts = Object.keys(cartProducts);
  const productsMinified = [];

  addedProducts.forEach((productId) => {
    productsMinified.push(
      <ProductMinified
        key={productId}
        product={products.filter((p) => p.id == productId)[0]}
        countProduct={cartProducts[productId]}
        onRemoveProduct={onRemoveProduct}
        type={type}
      />
    );

    productsMinified.push(<hr key={productId + "hr"} className="divisor" />);
  });

  productsMinified.pop();

  return (
    <>
      {countProducts > 0 ? (
        <section
          className={`products-list ${
            type === "secondary" && "products-list--secondary"
          }`}
        >
          <div className="products__minified">{productsMinified}</div>
          <hr className="divisor" />

          <div className="products-list__summary">
            <span className="products-list__label text__preset__4">
              Order Total
            </span>
            <span className="products-list__total text__preset__2">
              ${total.toLocaleString("en", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </section>
      ) : (
        <section className="empty">
          <img src={EmptyCart} alt="Empty cart" className="empty__image" />
          <p className="empty__description text__preset__4--bold">
            Your added items will appear here
          </p>
        </section>
      )}
    </>
  );
};

export default ProductsList;
