import { AddToCart } from "./Buttons";
import "./Products.css";
import "./Product.css";

const ProductCard = ({ data }) => {
  return (
    <article className="product">
      <div className="product__header">
        <picture className="product__image">
          <source srcSet={data.image.desktop} media="(min-width: 1024px)" />
          <source srcSet={data.image.tablet} media="(min-width: 768px)" />
          <img src={data.image.mobile} alt={data.name} />
        </picture>
        <AddToCart />
      </div>

      <div className="product__body">
        <span className="product__category text__preset__4">
          {data.category}
        </span>
        <h3 className="product__name text__preset__3">{data.name}</h3>
        <span className="product__price text__preset__3">${data.price}</span>
      </div>
    </article>
  );
};

const Products = ({ products }) => {
  return (
    <section className="products">
      {products.map((product) => {
        return <ProductCard data={product} key={product.id} />;
      })}
    </section>
  );
};

export default Products;
