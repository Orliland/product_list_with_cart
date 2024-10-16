import "./Cart.css";
import EmptyCart from "./assets/illustration-empty-cart.svg";

import { MinifiedProducts } from "./Products";

const Cart = ({ cartProducts, products }) => {
  // TODO: show current products in the cart
  let countProducts = 0;

  for (const product in cartProducts) {
    countProducts += cartProducts[product];
  }

  return (
    <aside className="cart">
      <h2 className="cart__title text__preset__2">
        Your Cart <span>({countProducts})</span>
      </h2>
      <div className="cart__body">
        {countProducts > 0 ? (
          <MinifiedProducts cartProducts={cartProducts} products={products} />
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
    </aside>
  );
};

export default Cart;
