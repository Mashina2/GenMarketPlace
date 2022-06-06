import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

import { USDXTokenABI, AXGTokenABI } from "../utils/ABI";

export default function PriceBar() {
  const [USDTSupply, setUSDTSupply] = useState(0);
  const [AXGSupply, setAXGSupply] = useState(0);
  const [GENSupply, setGENSupply] = useState(0);

  const [USDTCap, setUSDTCap] = useState(0)
  const [AXGCap, setAXGCap] = useState(0)
  const [GENCap, setGENCap] = useState(0)

  const USDXTokenAddress = "0x47ac6c4274295EB45338fF30223E91e5FC431e1D"
  const AXGTokenAddress = "0x537a0c2470D9c36EB2c83Cd97630130b7203d2B1"
  const GENTokenAddress = ""

  useEffect(() => {
    getData();
  })
  const getData = async() => {
      if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();

      const USDXTokenContract = new web3.eth.Contract(USDXTokenABI, USDXTokenAddress)
      const USDXTokenSupply = await USDXTokenContract.methods.totalSupply().call()
      setUSDTSupply(web3.utils.fromWei(USDXTokenSupply, 'ether'))
      setUSDTCap(Number(web3.utils.fromWei(USDXTokenSupply, 'ether'))*1)
      // console.log(walletAddress)
      const AXGTokenContract = new web3.eth.Contract(AXGTokenABI, AXGTokenAddress)
      const AXGTokenSupply = await AXGTokenContract.methods.totalSupply().call()
      setAXGSupply(web3.utils.fromWei(AXGTokenSupply, 'ether'))
      setAXGCap(Number(web3.utils.fromWei(AXGTokenSupply, 'ether'))*13.95)
      // console.log('AXGTokenBalance', AXGTokenBalance)
      return true;
    }
  }
  return (
    <div className="price-bar">
      <ul>
        <li>
          <strong>AXN Cap:</strong>
          <span>
            0 <div className="text-gold">$</div>
          </span>
        </li>
        <li>
          <strong>AXN Supply:</strong>
          <span>
            0 <div className="text-gold">AXN</div>
          </span>
        </li>
        <li>
          <strong>USDX Cap:</strong>
          <span>
            {USDTCap} <div className="text-gold">$</div>
          </span>
        </li>
        <li>
          <strong>USDX Supply</strong>
          <span>
            {USDTSupply} <div className="text-gold">USDX</div>
          </span>
        </li>
        <li>
          <strong>Axen Gold Cap</strong>
          <span>
            {AXGCap} <div className="text-gold">$</div>
          </span>
        </li>
        <li>
          <strong>Axen Gold Supply</strong>
          <span>
        {AXGSupply}  <div className="text-gold">AXG</div>
          </span>
        </li>
      </ul>
    </div>
  );
}
