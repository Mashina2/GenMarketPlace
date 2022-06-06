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
	     <Link href="mailto:hola@axencapital.com">CONTACT US</Link>
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
              All Rights Reserved © 2021 Av. Camelinas 333 de la colonia Félix Ireta en la ciudad de Morelia, Michoacán.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
