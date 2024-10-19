import { createPortal } from "react-dom";
import { useContext } from "react";
import { ProductsContext, CartProductsContext } from "./utils/ProductsContext";

import { Button } from "./Buttons";
import CarbonNeutralIcon from "./assets/icon-carbon-neutral.svg";

import "./Cart.css";
import ProductsList from "./ProductsList";

const Cart = ({ onRemoveProduct, handleModal, showModal }) => {
  const products = useContext(ProductsContext);
  const cartProducts = useContext(CartProductsContext);

  let countProducts = 0;

  for (const product in cartProducts) {
    const productData = products.filter((p) => p.id == product)[0];
    countProducts += cartProducts[product];
  }

  return (
    <aside className="cart">
      <h2 className="card__title text__preset__2">
        Your Cart <span>({countProducts})</span>
      </h2>

      <ProductsList countProducts={countProducts} />

      {countProducts > 0 ? (
        <>
          <div className="legend">
            <img
              className="legend__icon"
              src={CarbonNeutralIcon}
              alt="carbono neutral"
            />
            <p className="legend__description text__preset__4">
              This is a{" "}
              <span className="text__preset__4--bold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>

          <Button onClick={handleModal}>Confirm Order</Button>
          {/* {showModal &&
            createPortal(
              <OrderSuccess
                handleModal={handleModal}
                products={products}
                cartProducts={cartProducts}
                onRemoveProduct={onRemoveProduct}
              />,
              document.body
            )} */}
        </>
      ) : null}
    </aside>
  );
};

export default Cart;
