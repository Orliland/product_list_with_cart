import CartIcon from "./assets/icon-add-to-cart.svg";
import "./Buttons.css";

export const AddToCart = () => {
  return (
    <button className="button__add-cart text__preset__4--bold">
      <img src={CartIcon} alt="Add to cart" />
      Add to Cart
    </button>
  );
};
