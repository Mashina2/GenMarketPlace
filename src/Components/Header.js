import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import MetaMask from './MetaMask';
import Web3 from 'web3';
import { USDXTokenABI, AXGTokenABI } from "../utils/ABI";


export default function Header() {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletBalance, setWalletBalance] = useState('');
  const [USDXTokenBalance, setUSDXTokenBalance] = useState(0.000);
  const [AXGTokenBalance, setAXGTokenBalance] = useState(0.000);

  const USDXTokenAddress = "0x47ac6c4274295EB45338fF30223E91e5FC431e1D"
  const AXGTokenAddress = "0x537a0c2470D9c36EB2c83Cd97630130b7203d2B1"


  const walletEnabled = async() => {

    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      // get metamask wallet address
      const accounts = await web3.eth.getAccounts();
      // set wallet address
      setWalletAddress(accounts[0])
      // get BNB balance of BNB
      const balance = await web3.eth.getBalance(accounts[0]);
      // console.log(accounts)
      const BNBBalance = web3.utils.fromWei(balance, "ether")
      setWalletBalance(BNBBalance)
      // console.log(BNBBalance)
      const USDXTokenContract = new web3.eth.Contract(USDXTokenABI, USDXTokenAddress)
      const USDXTokenBalance = await USDXTokenContract.methods.balanceOf(accounts[0]).call()
      setUSDXTokenBalance(web3.utils.fromWei(USDXTokenBalance, 'ether'))
      // console.log(walletAddress)
      const AXGTokenContract = new web3.eth.Contract(AXGTokenABI, AXGTokenAddress)
      const AXGTokenBalance = await AXGTokenContract.methods.balanceOf(accounts[0]).call()
      setAXGTokenBalance(web3.utils.fromWei(AXGTokenBalance, 'ether'))
      // console.log('AXGTokenBalance', AXGTokenBalance)
      return true;
    }
    return false;
  }

  return (
    <>
      <Head>
        <title>Axen Capital Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <meta name="theme-color" content="#000000" />
        <meta name="description" />
      </Head>
      <header>
        <div className="line-bar"></div>
        <div className="header-top">
          <p>
            <strong>For Any Inquires</strong> Please contact us
            at <a href="mailto:attention@axencapital.com">attention@axencapital.com</a>
          </p>
        </div>
        <div className="header-logo">
          <Link href="/">
            <a>
              <Image src="/img/logo.png" width={400} height={80} alt="" />
            </a>
          </Link>
        </div>
        <div className="container">
          <div className="header-nav">
            <Link href="/">
              <a className="header-link">Home</a>
            </Link>
            <Link href="https://axencoin.finance/">
              <a className="header-link middle-menu" target="_blank">
                LAUNCH AXENCOIN.FINANCE
              </a>
            </Link>
            <Link href="">
              <a className="header-link" onClick={(e) => walletEnabled(e, "/about")}>Connect Wallet</a>
            </Link>
          </div>
        </div>
      </header>
      <div className="container">
        <MetaMask
          walletAddress={walletAddress} walletBalance = {walletBalance} USDXTokenBalance = {USDXTokenBalance} AXGTokenBalance = {AXGTokenBalance}
        />
      </div>
    </>
  );
}
