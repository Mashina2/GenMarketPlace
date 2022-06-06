import React, { useState } from 'react';
import Image from 'next/image';
import CoinBuyPopUp from './CoinBuyPopUp';
export default function BrandArea() {
  const [IsGen, setGen] = useState(false);
  const [IsUsdx, setUsdx] = useState(false);
  const [IsAxen, setAxen] = useState(false);

  const oepnGen = () => {
    setGen((IsGen) => !IsGen);
  };
  const CloseGen = () => {
    setGen((IsGen) => !IsGen);
  };

  const OpenUsdx = () => {
    setUsdx((IsUsdx) => !IsUsdx);
  };
  const CloseUsdx = () => {
    setUsdx((IsUsdx) => !IsUsdx);
  };

  const OpenAxen = () => {
    setAxen((IsAxen) => !IsAxen);
  };
  const CloseAxen = () => {
    setAxen((IsAxen) => !IsAxen);
  };
  return (
    <div className="brand-area">
      {IsGen && <CoinBuyPopUp CloseGen={CloseGen} gen="AXN" />}
      {IsUsdx && <CoinBuyPopUp CloseUsdx={CloseUsdx} gen="USDX" />}
      {IsAxen && <CoinBuyPopUp CloseAxen={CloseAxen} gen="AXG" />}
      <div className="brand-area-inner">
        <button onClick={oepnGen}>
          <Image src="/img/ab-one.png" width={1134} height={393} alt="" />
        </button>
        <button onClick={OpenUsdx}>
          <Image src="/img/ab-two.png" width={1134} height={393} alt="" />
        </button>
        <button onClick={OpenAxen}>
          <Image src="/img/ab-three.png" width={1134} height={393} alt="" />
        </button>
      </div>
      <Image src="/img/ab-long.png" width={1166} height={119} alt="" />
      <div className="mtb40"></div>
    </div>
  );
}
