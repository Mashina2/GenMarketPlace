import ProductItem from './ProductItem';

export default function RelatedProduct() {
  return (
    <div className="related-product">
      <div className="container">
        <div className="section-heading">
          <h2>YOU MAY ALSO LIKE</h2>
        </div>
        <div className="related-product-inner">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
}
