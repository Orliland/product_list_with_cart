const ProductCard = ({ data }) => {
  return (
    <article>
      <picture>
        <source srcSet={data.image.desktop} media="(min-width: 1024px)" />
        <source srcSet={data.image.tablet} media="(min-width: 768px)" />
        <img src={data.image.mobile} alt={data.name} />
      </picture>
    </article>
  );
};

const Products = ({ products }) => {
  return (
    <section className="products">
      {products.map((product, index) => {
        return <ProductCard data={product} key={index} />;
      })}
    </section>
  );
};

export default Products;
