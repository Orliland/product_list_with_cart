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
      break;
    case "add":
      selectedIcon = AddIcon;
      break;
    case "decrease":
      selectedIcon = DecreaseIcon;
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

export const ButtonContainer = ({
  children,
  productId,
  onIncreaseProduct,
  onDecreaseProduct,
}) => {
  return (
    <div className="button--control">
      <ButtonIcon
        onClick={() => onDecreaseProduct(productId)}
        icon="decrease"
      />
      <span className="text__preset__4--bold">{children}</span>
      <ButtonIcon onClick={() => onIncreaseProduct(productId)} icon="add" />
    </div>
  );
};

const ButtonIcon = ({ onClick, icon }) => {
  return (
    <button className="button-icon" onClick={() => onClick()}>
      <Icon icon={icon} />
    </button>
  );
};

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
