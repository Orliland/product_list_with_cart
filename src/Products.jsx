import { AddToCart, ControlCart, RemoveProduct } from "./Buttons";
import "./Products.css";
import "./Product.css";
import "./Buttons.css";

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
        <span className="product__price text__preset__3">
          ${product.price.toLocaleString("en", { minimumFractionDigits: 2 })}
        </span>
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
