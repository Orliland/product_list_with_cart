import { useContext } from "react";
import { ProductsContext, CartProductsContext } from "./utils/ProductsContext";
import EmptyCart from "./assets/illustration-empty-cart.svg";

import "./ProductsList.css";

const ProductsList = ({ countProducts }) => {
  const products = useContext(ProductsContext);
  const cartProducts = useContext(CartProductsContext);

  let total = 0;

  for (const product in cartProducts) {
    const productData = products.filter((p) => p.id == product)[0];
    total += cartProducts[product] * productData.price;
  }

  return (
    <>
      {countProducts > 0 ? (
        <section className="products-list">
          <hr className="divisor" />

          <div className="order">
            <span className="order__label text__preset__4">Order Total</span>
            <span className="order__total text__preset__2">
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
