import Image from 'next/image';

export default function OwnerChangeHistory() {
  return (
    <div className="owner-change-history">
      <div className="container">
        <div className="section-heading">
          <h2>OWNER CHANGE HISTORY</h2>
        </div>
        <div className="coming-soon">
          <Image src="/img/history.jpg" width={1148} height={277} alt="" />
          <strong>COMING SOON</strong>
        </div>
      </div>
    </div>
  );
}
