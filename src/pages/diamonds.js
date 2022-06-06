import Image from 'next/image';
import Layout from '../Components/Layout';
import ProductArea from '../Components/ProductArea';

export default function Diamonds() {
  return (
    <Layout>
      <div className="container">
        <div className="mt50">
          <Image src="/img/ab-long.png" width={1166} height={119} alt="" />
        </div>
        {/* <ProductArea /> */}
      </div>
    </Layout>
  );
}
