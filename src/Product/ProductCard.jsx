import { Button } from "../Buttons";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <article className="card">
      <div className="card__header">
        <picture className="card__image">
          <source srcSet={product.image.desktop} media="(min-width: 1024px)" />
          <source srcSet={product.image.tablet} media="(min-width: 768px)" />
          <img src={product.image.mobile} alt={product.name} />
        </picture>

        {/* TODO: add buttons */}
        {/* 
        
        
        {cartProducts[product.id] ? (
          <ControlCart
            id={product.id}
            onAddToCart={onAddToCart}
            cartCountProduct={cartProducts[product.id]}
            onRemoveFromCart={onRemoveFromCart}
          />
        ) : (
          <AddToCart id={product.id} onAddToCart={onAddToCart} />
        )}
        
        */}

        <Button type="secondary" icon="cart">
          Add to Cart
        </Button>
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
