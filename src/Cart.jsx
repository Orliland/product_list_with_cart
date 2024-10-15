import "./Cart.css";
import EmptyCart from "./assets/illustration-empty-cart.svg";

const Cart = () => {
  // TODO: reading state to show current products in the cart
  // TODO: show current products in the cart
  // TODO: empty cart
  return (
    <aside className="cart">
      <h2 className="cart__title text__preset__2">
        Your Cart <span>(0)</span>
      </h2>
      <div className="cart__body">
        <img src={EmptyCart} alt="Empty cart" className="cart__empty" />
        <p className="cart__description text__preset__4--bold">
          Your added items will appear here
        </p>
      </div>
    </aside>
  );
};

export default Cart;
