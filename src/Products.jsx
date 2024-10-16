import { AddToCart, ControlCart } from "./Buttons";
import "./Products.css";
import "./Product.css";

const ProductCard = ({
  product,
  onAddToCart,
  onRemoveFromCart,
  cartProducts,
}) => {
  return (
    <article className="product">
      <div className="product__header">
        <picture className="product__image">
          <source srcSet={product.image.desktop} media="(min-width: 1024px)" />
          <source srcSet={product.image.tablet} media="(min-width: 768px)" />
          <img src={product.image.mobile} alt={product.name} />
        </picture>
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
      </div>

      <div className="product__body">
        <span className="product__category text__preset__4">
          {product.category}
        </span>
        <h3 className="product__name text__preset__3">{product.name}</h3>
        <span className="product__price text__preset__3">${product.price}</span>
      </div>
    </article>
  );
};

const Products = ({
  products,
  onAddToCart,
  onRemoveFromCart,
  cartProducts,
}) => {
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <ProductCard
            product={product}
            key={product.id}
            onAddToCart={onAddToCart}
            cartProducts={cartProducts}
            onRemoveFromCart={onRemoveFromCart}
          />
        );
      })}
    </section>
  );
};

export default Products;
