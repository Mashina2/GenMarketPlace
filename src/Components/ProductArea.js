import ProductItem from './ProductItem';

export default function ProductArea() {
  return (
    <div className="product-area">
      <ProductItem />
      <ProductItem lock />
      <ProductItem lock />
      <ProductItem unlock />
      <ProductItem unlock />
      <ProductItem unlock />
      <ProductItem unlock />
      <ProductItem unlock />
      <ProductItem unlock />
      <ProductItem unlock />
      <ProductItem unlock />
    </div>
  );
}
