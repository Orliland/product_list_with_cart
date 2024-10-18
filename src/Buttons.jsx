import CartIcon from "./assets/icon-add-to-cart.svg";
import AddIcon from "./assets/icon-increment-quantity.svg";
import DecreaseIcon from "./assets/icon-decrement-quantity.svg";
import RemoveIcon from "./assets/icon-remove-item.svg";

import "./Buttons.css";

const Icon = ({ icon }) => {
  let selectedIcon;
  switch (icon) {
    case "cart":
      selectedIcon = CartIcon;
  }

  return <img src={selectedIcon} alt="icon" className="button__icon" />;
};

export const Button = ({ children, type, onClick, icon }) => {
  return (
    <button
      className={`button ${type && "button--" + type} text__preset__3`}
      onClick={() => onClick()}
    >
      {icon != undefined ? <Icon icon={icon} /> : null}
      <span>{children}</span>
    </button>
  );
};

export const ButtonContainer = () => {};

// export const AddToCart = ({ id, onAddToCart }) => {
//   return (
//     <button
//       className="button__add-cart text__preset__4--bold"
//       onClick={() => onAddToCart(id)}
//     >
//       <img src={CartIcon} alt="Add to cart" />
//       Add to Cart
//     </button>
//   );
// };

// export const ControlCart = ({
//   id,
//   onAddToCart,
//   onRemoveFromCart,
//   cartCountProduct,
// }) => {
//   return (
//     <div className="button--control">
//       <button
//         className="button--control__item"
//         onClick={() => onRemoveFromCart(id)}
//       >
//         <img src={DecreaseIcon} alt="Remove once from cart" />
//       </button>
//       <span className="text__preset__4--bold">{cartCountProduct}</span>
//       <button className="button--control__item" onClick={() => onAddToCart(id)}>
//         <img src={AddIcon} alt="Add once product to cart" />
//       </button>
//     </div>
//   );
// };

export const RemoveProduct = ({ id, onRemoveProduct }) => {
  return (
    <button className="button--remove" onClick={() => onRemoveProduct(id)}>
      <img
        src={RemoveIcon}
        alt="Remove product from the cart"
        className="button--remove__icon"
      />
    </button>
  );
};
