import React, { useState } from 'react';
import CoinBuyPopUp from './CoinBuyPopUp';
export default function MetaMask({ walletAddress, walletBalance, USDXTokenBalance, AXGTokenBalance }) {
  const [IspupOpen, setPopOpen] = useState(false);

  const OpenTokenBuy = () => {

    setPopOpen((IspupOpen) => !IspupOpen);
  };
  const CloseTokenBuy = () => {
    setPopOpen((IspupOpen) => !IspupOpen);
  };
  return (
    <div className="metamask-area">
      <button onClick={OpenTokenBuy}>
        Don&apos;t have AXN? Make a purchase!
      </button>
      <div className="metamask-wallet-address">
        <p>BSC Wallet: {walletAddress}</p>
        <h2>
          <strong className="text-gold">Balance:</strong> {walletBalance} BNB, 0.0000
          AXN, {USDXTokenBalance} USDX, {AXGTokenBalance} AXG
        </h2>
      </div>
      {IspupOpen && <CoinBuyPopUp CloseTokenBuy={CloseTokenBuy} gen="AXN" />}
    </div>
  );
}
