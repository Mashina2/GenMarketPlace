import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

import { USDXTokenABI, AXGTokenABI } from "../utils/ABI";
import { ownerPrivateKey } from "../utils/Private";

export default function CoinBuyPopUp({
  CloseTokenBuy,
  gen,
  CloseGen,
  CloseUsdx,
  CloseAxen,
}) {
  const [amount, setAmount] = useState(0.00);
  const [disabled, setDisabled] = useState(false);
  const [tokenPrice, setTokenPrice] = useState(1);
  const [BNBPrice, setBNBPrice] = useState(1);

  const USDXTokenAddress = "0x47ac6c4274295EB45338fF30223E91e5FC431e1D"
  const AXGTokenAddress = "0x537a0c2470D9c36EB2c83Cd97630130b7203d2B1"
  const ownerAddress = "0xDd7769d214e88C5A7271f980C332b2fC57521447"


  useEffect(() => {
    getTokenPrice();
  })

  const getTokenPrice = async() => {
    if (gen == "USDX"){
      setTokenPrice(1*amount)
    }
    if (gen == 'GEN'){
      setTokenPrice(10*amount)
    }
    if (gen == 'AXG'){
      setTokenPrice(63*amount)
    }
    const apiResponse = await getBNBPricce()
    const bnbPrice = Number(apiResponse.price)
    setBNBPrice((tokenPrice/bnbPrice).toFixed(6))
  }


  async function payBNB(){
    setDisabled(true)
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      // get metamask wallet address
      const accounts = await web3.eth.getAccounts();
      // get BNB balance of BNB
      const balance = await web3.eth.getBalance(accounts[0]);
      // console.log(accounts)
      const BNBBalance = web3.utils.fromWei(balance, "ether")
      // console.log(BNBBalance)
      const USDXTokenContract = new web3.eth.Contract(USDXTokenABI, USDXTokenAddress)
      const USDXTokenBalance = await USDXTokenContract.methods.balanceOf(accounts[0]).call()

      const AXGTokenContract = new web3.eth.Contract(AXGTokenABI, AXGTokenAddress)
      const AXGTokenBalance = await AXGTokenContract.methods.balanceOf(accounts[0]).call()
      console.log(amount)

      const apiResponse = await getBNBPricce()

      const bnbPrice = Number(apiResponse.price)
        if (gen == "USDX"){
          console.log(amount/bnbPrice)

          const BNBsendAmount = Number((amount/bnbPrice).toFixed(6)) + 0.0005
          console.log(BNBsendAmount)

          const send = await web3.eth.sendTransaction({from: accounts[0], to: ownerAddress, value: web3.utils.toWei(BNBsendAmount.toString(), 'ether')})
          .on('error', function(error){
            console.log(error)
            setDisabled(false)
          })
          .once('transactionHash', function(hash){
            console.log(hash)
          })
          .then(async function(res) {
            const nonce = await web3.eth.getTransactionCount(ownerAddress, 'latest');
            console.log('nonce', nonce)
            const txData = USDXTokenContract.methods.increaseSupply(web3.utils.toWei(amount, 'ether'));
            const rawTransaction = {
              'from': ownerAddress,
              'gas': 200000,
              'to': USDXTokenAddress,
              'data': txData.encodeABI(),
              'nonce': nonce
            }
            const signPromise = web3.eth.accounts.signTransaction(rawTransaction, ownerPrivateKey);
            signPromise.then(async(signedTx) => {
              console.log("rawTx: ", signedTx.rawTransaction);
              await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
              .on('receipt', console.log)
              .then(async function(res) {
                      const nonceDash = await web3.eth.getTransactionCount(ownerAddress, 'latest')
                      console.log('nonceDash', nonceDash)
                      const txDataDash = await USDXTokenContract.methods.transfer(accounts[0], web3.utils.toWei(amount, 'ether'))
                      const rawTransactionDash = {
                        'from': ownerAddress,
                        'gas': 250000,
                        'to': USDXTokenAddress,
                        'data': txDataDash.encodeABI(),
                        'nonce': nonceDash
                      }
                      const signPromiseDash = web3.eth.accounts.signTransaction(rawTransactionDash, ownerPrivateKey);
                      signPromiseDash.then(async(signedTxDash) => {
                        console.log("rawTxDash: ", signedTxDash.rawTransaction);
                        await web3.eth.sendSignedTransaction(signedTxDash.rawTransaction)
                        // .on('receipt', console.log)
                        .then(async function(res) {
                          console.log('res', res.transactionHash)
                          resetModal(res.transactionHash)
                        })
                      })


              })
            }).catch((err) => {
              console.log(err)
              setDisabled(false)
            })

          })
        }
        if (gen == "GEN"){
          console.log((1905*amount)/bnbPrice)

          //const BNBsendAmount = Number(((1905*amount)/bnbPrice).toFixed(6)) + 0.0005
         const BNBsendAmount = Number(((10*amount)/bnbPrice).toFixed(6)) + 0.0005
          console.log(BNBsendAmount)

          const send = await web3.eth.sendTransaction({from: accounts[0], to: ownerAddress, value: web3.utils.toWei(BNBsendAmount.toString(), 'ether')})
          .on('error', function(error){
            console.log(error)
            setDisabled(false)
          })
          .once('transactionHash', function(hash){
            console.log(hash)
          })
          .then(async function(res) {
            const nonce = await web3.eth.getTransactionCount(ownerAddress, 'latest');
            console.log('nonce', nonce)
            const txData = USDXTokenContract.methods.increaseSupply(web3.utils.toWei(amount, 'ether'));
            const rawTransaction = {
              'from': ownerAddress,
              'gas': 200000,
              'to': USDXTokenAddress,
              'data': txData.encodeABI(),
              'nonce': nonce
            }
            const signPromise = web3.eth.accounts.signTransaction(rawTransaction, ownerPrivateKey);
            signPromise.then(async(signedTx) => {
              console.log("rawTx: ", signedTx.rawTransaction);
              await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
              .on('receipt', console.log)
              .then(async function(res) {
                      const nonceDash = await web3.eth.getTransactionCount(ownerAddress, 'latest')
                      console.log('nonceDash', nonceDash)
                      const txDataDash = await USDXTokenContract.methods.transfer(accounts[0], web3.utils.toWei(amount, 'ether'))
                      const rawTransactionDash = {
                        'from': ownerAddress,
                        'gas': 250000,
                        'to': USDXTokenAddress,
                        'data': txDataDash.encodeABI(),
                        'nonce': nonceDash
                      }
                      const signPromiseDash = web3.eth.accounts.signTransaction(rawTransactionDash, ownerPrivateKey);
                      signPromiseDash.then(async(signedTxDash) => {
                        console.log("rawTxDash: ", signedTxDash.rawTransaction);
                        await web3.eth.sendSignedTransaction(signedTxDash.rawTransaction)
                        // .on('receipt', console.log)
                        .then(async function(res) {
                          console.log('res', res.transactionHash)
                          resetModal(res.transactionHash)
                        })
                      })


              })
            }).catch((err) => {
              console.log(err)
              setDisabled(false)
            })

          })
        }

        if (gen == "AXG"){
          console.log((amount*63)/bnbPrice)

          const BNBsendAmount = Number(((amount*63)/bnbPrice).toFixed(6)) + 0.0005
          console.log(BNBsendAmount)

          const send = await web3.eth.sendTransaction({from: accounts[0], to: ownerAddress, value: web3.utils.toWei(BNBsendAmount.toString(), 'ether')})
          .on('error', function(error){
            console.log(error)
            setDisabled(false)
          })
          .once('transactionHash', function(hash){
            console.log(hash)
          })
          .then(async function(res) {
            const nonce = await web3.eth.getTransactionCount(ownerAddress, 'latest');
            console.log('nonce', nonce)
            const txData = AXGTokenContract.methods.increaseSupply(web3.utils.toWei(amount, 'ether'));
            const rawTransaction = {
              'from': ownerAddress,
              'gas': 200000,
              'to': AXGTokenAddress,
              'data': txData.encodeABI(),
              'nonce': nonce
            }
            const signPromise = web3.eth.accounts.signTransaction(rawTransaction, ownerPrivateKey);
            signPromise.then(async(signedTx) => {
              console.log("rawTx: ", signedTx.rawTransaction);
              await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
              .on('receipt', console.log)
              .then(async function(res) {
                      const nonceDash = await web3.eth.getTransactionCount(ownerAddress, 'latest')
                      console.log('nonceDash', nonceDash)
                      const txDataDash = await AXGTokenContract.methods.transfer(accounts[0], web3.utils.toWei(amount, 'ether'))
                      const rawTransactionDash = {
                        'from': ownerAddress,
                        'gas': 250000,
                        'to': AXGTokenAddress,
                        'data': txDataDash.encodeABI(),
                        'nonce': nonceDash
                      }
                      const signPromiseDash = web3.eth.accounts.signTransaction(rawTransactionDash, ownerPrivateKey);
                      signPromiseDash.then(async(signedTxDash) => {
                        console.log("rawTxDash: ", signedTxDash.rawTransaction);
                        await web3.eth.sendSignedTransaction(signedTxDash.rawTransaction)
                        // .on('receipt', console.log)
                        .then(async function(res) {
                          console.log('res', res.transactionHash)
                          resetModal(res.transactionHash)
                        })
                      })


              })
            }).catch((err) => {
              console.log(err)
              setDisabled(false)
            })

          })
        }

      function resetModal(hash){
        setDisabled(false)
      }

      return true;
    }
    return false;
  }

  async function getBNBPricce(){
    try{
      const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
      return await response.json();
    }catch(error) {
        return [];
    }
  }

  return (
    <div className="coin-buy-popup">
      <div className="coin-buy-popup-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
          onClick={CloseTokenBuy || CloseGen || CloseUsdx || CloseAxen}
        >
          <path
            fillRule="evenodd"
            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
          />
          <path
            fillRule="evenodd"
            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
          />
        </svg>
        {CloseTokenBuy && <h2>Buy {gen} token</h2>}
        {CloseGen && <h2>Buy {gen} token</h2>}
        {CloseUsdx && <h2>Buy {gen} Stable token</h2>}
        {CloseAxen && <h2>Buy {gen} Gold token</h2>}
        <div className="coin-buy-input">
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
          <span>{gen}</span>
        </div>
        <p style={{fontSize: "20px",marginTop: '10px', marginBottom: "-25px", color: 'green'}}>{BNBPrice} BNB / {tokenPrice} USD</p>
        <button onClick={payBNB} style={{ opacity: disabled ? 0.3 : 1 }} disabled = {disabled}>Make The Payment</button>
      </div>
    </div>
  );
}
