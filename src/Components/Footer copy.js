import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="line-bar"></div>
      <footer>
        <div className="container">
          <div className="footer-nav">
            <Link href="/privacy-policy">PRIVACY POLICY</Link>
            <Link href="/contact">CONTACTS</Link>
          </div>
          <div className="footer-logo">
            <Link href="/">
              <a>
                <Image
                  src="/img/white-logo.png"
                  width={400}
                  height={80}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="footer-copyright">
            <p>
              All Rights Reserved © 2018 Cdiamondcoin OÜ Harju maakond, Tallinn,
              Kristiine linnaosa, A. H. Tammsaare tee 47, 11316
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
