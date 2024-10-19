import EmptyCart from "./assets/illustration-empty-cart.svg";

import "./ProductsList.css";

const ProductsList = ({ countProducts }) => {
  return (
    <>
      {countProducts > 0 ? (
        <h1>total de products {countProducts}</h1>
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
