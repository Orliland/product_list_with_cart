import { ButtonIcon } from "../Buttons";

import "./ProductMinified.css";

const ProductMinified = ({ product, countProduct, onRemoveProduct, type }) => {
  return (
    <article className="minified">
      {type == "secondary" && (
        <img
          className="minified__thumbnail"
          src={product.image.thumbnail}
          alt={product.name}
        />
      )}

      <div className="minified__body">
        <h3 className="minified__name text__preset__4--bold">{product.name}</h3>
        <div className="minified__description">
          <span className="minified__quantity text__preset__4--bold">
            {countProduct}x
          </span>
          <span className="minified__price text__preset__4">
            @ $
            {product.price.toLocaleString("en", { minimumFractionDigits: 2 })}
          </span>
          {type != "secondary" && (
            <span className="minified__total text__preset__4--bold">
              $
              {(countProduct * product.price).toLocaleString("en", {
                minimumFractionDigits: 2,
              })}
            </span>
          )}
        </div>
      </div>

      {type == "secondary" ? (
        <span className="minified__total text__preset__3">
          $
          {(countProduct * product.price).toLocaleString("en", {
            minimumFractionDigits: 2,
          })}
        </span>
      ) : (
        <ButtonIcon
          icon="remove"
          className="secondary"
          onClick={() => onRemoveProduct(product.id)}
        />
      )}
    </article>
  );
};

export default ProductMinified;
