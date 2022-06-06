import Image from 'next/image';
import Link from 'next/link';

export default function MetaMaskPopUp({ CloseMetamask }) {
  return (
    <div className="metamask-popup">
      <div className="metamask-popup-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-circle-fill"
          viewBox="0 0 16 16"
          onClick={CloseMetamask}
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
        <h2>Welcome to Axen Capital Crypto marketplace!</h2>
        <p>PLACE TO PURCHASE, STORE AND TRADE CERTIFIED DIAMONDS</p>
        <h3>In order to use Axen Capital marketplace please install Metamask</h3>
        <Image src="/img/metamask-logo.png" width={300} height={312} alt="" />
        <h4>
          Install
          <Link href="https://metamask.io/">
            <a>Metamask Chrome or Firefox Extenstion</a>
          </Link>
          Use Chrome or Firefox to browse this page
        </h4>
      </div>
    </div>
  );
}
