import { RemoveProduct } from "./Buttons";
import "./Products.css";
import "./Buttons.css";

const MinifiedProduct = ({ product, countProduct, onRemoveProduct }) => {
  return (
    <article className="minified-product">
      <div className="minified-product__body">
        <h3 className="minified-product__name text__preset__4--bold">
          {product.name}
        </h3>
        <div className="minified-product__description">
          <span className="minified-product__quantity text__preset__4--bold">
            {countProduct}x
          </span>
          <span className="minified-product__price text__preset__4">
            @ $
            {product.price.toLocaleString("en", { minimumFractionDigits: 2 })}
          </span>
          <span className="minified-product__total text__preset__4--bold">
            $
            {(countProduct * product.price).toLocaleString("en", {
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
      <RemoveProduct id={product.id} onRemoveProduct={onRemoveProduct} />
    </article>
  );
};

export const MinifiedProducts = ({
  cartProducts,
  products,
  onRemoveProduct,
}) => {
  const addedProducts = Object.keys(cartProducts);

  let minifiedProducts = [];

  addedProducts.forEach((productID) => {
    minifiedProducts.push(
      <MinifiedProduct
        key={productID}
        product={products.filter((p) => p.id == productID)[0]}
        countProduct={cartProducts[productID]}
        onRemoveProduct={onRemoveProduct}
      />
    );

    minifiedProducts.push(<hr className="minified-product__divisor" />);
  });

  minifiedProducts.pop();
  return <section className="minified-products">{minifiedProducts}</section>;
};
