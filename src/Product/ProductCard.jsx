import { useContext } from "react";
import { CartProductsContext } from "../utils/ProductsContext";

import { Button, ButtonContainer } from "../Buttons";

import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart, onRemoveFromCart }) => {
  const cartProducts = useContext(CartProductsContext);

  return (
    <article className="card">
      <div className="card__header">
        <picture className="card__image">
          <source srcSet={product.image.desktop} media="(min-width: 1024px)" />
          <source srcSet={product.image.tablet} media="(min-width: 768px)" />
          <img src={product.image.mobile} alt={product.name} />
        </picture>

        {cartProducts[product.id] ? (
          <ButtonContainer
            productId={product.id}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          >
            {cartProducts[product.id]}
          </ButtonContainer>
        ) : (
          <Button
            type="secondary"
            icon="cart"
            onClick={() => {
              onAddToCart(product.id);
            }}
          >
            Add to Cart
          </Button>
        )}
      </div>

      <div className="card__body">
        <span className="card__category text__preset__4">
          {product.category}
        </span>
        <h3 className="card__name text__preset__3">{product.name}</h3>
        <span className="card__price text__preset__3">
          ${product.price.toLocaleString("en", { minimumFractionDigits: 2 })}
        </span>
      </div>
    </article>
  );
};

export default ProductCard;
