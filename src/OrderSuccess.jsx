import "./OrderSuccess.css";

import { Button } from "./Buttons";
import { MinifiedProducts } from "./Products";
import SuccessIcon from "./assets/icon-order-confirmed.svg";

const OrderSuccess = ({
  handleModal,
  products,
  cartProducts,
  onRemoveProduct,
}) => {
  return (
    <div className="modal">
      <div className="order">
        <div className="order__header">
          <img src={SuccessIcon} alt="success icon" className="order__icon" />
          <h2 className="order__title text__preset__1">Order Confirmed</h2>
          <p className="text__preset__3 order__description">
            We hope you enjoy your food!
          </p>
        </div>
        <MinifiedProducts
          products={products}
          cartProducts={cartProducts}
          onRemoveProduct={onRemoveProduct}
        />
        <Button onClick={handleModal}>Start New Order</Button>
      </div>
    </div>
  );
};

export default OrderSuccess;
