import React, { useState } from 'react';
import BrandArea from '../Components/BrandArea';
import Layout from '../Components/Layout';
import MetaMaskPopUp from '../Components/MetaMaskPopUp';
import PriceBar from '../Components/PriceBar';
import ProductArea from '../Components/ProductArea';
import Video from '../Components/Video';

export default function Home() {
  const [Ismetamask, changeMetamask] = useState(false);

  const CloseMetamask = () => {
    changeMetamask((Ismetamask) => !Ismetamask);
  };
  return (
    <>
      <Layout>
        <div className="container">
          <PriceBar />
          <BrandArea />
          <Video />
          {/* <ProductArea /> */}
        </div>
        {Ismetamask && <MetaMaskPopUp CloseMetamask={CloseMetamask} />}
      </Layout>
    </>
  );
}
