import Layout from '../Components/Layout';
import OwnerChangeHistory from '../Components/OwnerChangeHistory';
import ProductCarousel from '../Components/ProductCarousel';
import ProductInfo from '../Components/ProductInfo';
import RelatedProduct from '../Components/RelatedProduct';

export default function Product() {
  return (
    <Layout>
      <div className="container">
        <div className="product-details-area">
          <ProductCarousel />
          <ProductInfo />
        </div>
        <OwnerChangeHistory />
        <RelatedProduct />
      </div>
    </Layout>
  );
}
