import Image from 'next/image';
import Link from 'next/link';

export default function ProductItem({ lock, unlock }) {
  return (
    <Link href="/product">
      <div className="product-item">
        <strong>
          {lock && (
            <Image src="/img/lock.svg" width={113} height={150} alt="lock" />
          )}
          {unlock && (
            <Image src="/img/unlock.svg" width={113} height={150} alt="lock" />
          )}
        </strong>
        <Image src="/img/product.png" width={758} height={756} alt="" />
        <div className="product-item-content">
          <h2>0.36 CARAT ROUND CUT DIAMOND</h2>
          <p>
            13.5556 <span>AXN</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
