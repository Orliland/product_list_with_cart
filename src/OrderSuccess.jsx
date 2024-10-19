import { useContext } from "react";
import { ProductsContext, CartProductsContext } from "./utils/ProductsContext";

import { Button } from "./Buttons";
import ProductsList from "./ProductsList";
import SuccessIcon from "./assets/icon-order-confirmed.svg";

import "./OrderSuccess.css";

const OrderSuccess = ({ handleModal, onRemoveProduct }) => {
  const products = useContext(ProductsContext);
  const cartProducts = useContext(CartProductsContext);

  let countProducts = 0;

  for (const product in cartProducts) {
    const productData = products.filter((p) => p.id == product)[0];
    countProducts += cartProducts[product];
  }

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

        <ProductsList
          countProducts={countProducts}
          type="secondary"
          onRemoveProduct={onRemoveProduct}
        />

        <Button onClick={handleModal}>Start New Order</Button>
      </div>
    </div>
  );
};

export default OrderSuccess;
