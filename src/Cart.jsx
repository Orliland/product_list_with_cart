import "./Cart.css";
import EmptyCart from "./assets/illustration-empty-cart.svg";
import CarbonNeutralIcon from "./assets/icon-carbon-neutral.svg";

import { MinifiedProducts } from "./Products";
import { Button } from "./Buttons";
import OrderSuccess from "./OrderSuccess";
import { createPortal } from "react-dom";

const Cart = ({
  cartProducts,
  products,
  onRemoveProduct,
  showModal,
  handleModal,
}) => {
  // TODO: show current products in the cart
  let countProducts = 0;
  let total = 0;

  for (const product in cartProducts) {
    const productData = products.filter((p) => p.id == product)[0];
    countProducts += cartProducts[product];
    total += cartProducts[product] * productData.price;
  }

  return (
    <aside className="cart">
      <h2 className="cart__title text__preset__2">
        Your Cart <span>({countProducts})</span>
      </h2>
      <div className="cart__body">
        {countProducts > 0 ? (
          <>
            <MinifiedProducts
              cartProducts={cartProducts}
              products={products}
              onRemoveProduct={onRemoveProduct}
            />
          </>
        ) : (
          <div className="cart--empty">
            <img
              src={EmptyCart}
              alt="Empty cart"
              className="cart--empty__image"
            />
            <p className="cart--empty__description text__preset__4--bold">
              Your added items will appear here
            </p>
          </div>
        )}
      </div>
      {countProducts > 0 ? (
        <>
          <hr className="minified-product__divisor" />

          <div className="cart--order">
            <span className="cart--order__label text__preset__4">
              Order Total
            </span>
            <span className="cart--order__total text__preset__2">
              ${total.toLocaleString("en", { minimumFractionDigits: 2 })}
            </span>
          </div>

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
          {showModal &&
            createPortal(
              <OrderSuccess
                handleModal={handleModal}
                products={products}
                cartProducts={cartProducts}
                onRemoveProduct={onRemoveProduct}
              />,
              document.body
            )}
        </>
      ) : null}
    </aside>
  );
};

export default Cart;
