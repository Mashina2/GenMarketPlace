import Image from 'next/image';

export default function ProductInfo() {
  return (
    <div className="product-details-info">
      <ul>
        <li>
          <strong className="ff-play">MARKETPLACE VALUE:</strong>
          <span>13.5556 AXN</span>
        </li>
        <li>
          <strong className="ff-play">OWNER PRICE: </strong>
          <span className="text-bold">13.5556 AXN</span>
        </li>
      </ul>
      <p>
        <span>Owner:</span>
        <span>0xb03F1757b988d4198CfaBDa1C923bdF5Aa5a57D4</span>
        <span>
          <Image src="/img/shild.svg" width={14} height={14} alt="" />
        </span>
      </p>
      <p className="mtb30">
        <Image src="/img/lock.svg" width={40} height={40} alt="" />
      </p>
      <h3>GIA Report Number: 2326020127</h3>
      <h2>Round</h2>
      <ul className="product-info-chart">
        <li>
          <span>Measurements</span> <strong>4.55 - 4.57 x 2.81 mm</strong>
        </li>
        <li>
          <span>Carat Weight</span>
          <strong>0.36 carat</strong>
        </li>
        <li>
          <span>Color Grade </span>
          <strong>E</strong>
        </li>
        <li>
          <span>Clarity Grade </span>
          <strong>VS2</strong>
        </li>
        <li>
          <span>Cut Grade </span>
          <strong>Excellent</strong>
        </li>
      </ul>
      <h2 className="mtb40">Proportions</h2>
      <ul className="product-info-chart">
        <li>
          <span>Depth</span>
          <strong>61.70%</strong>
        </li>
        <li>
          <span>Table</span>
          <strong>60.00%</strong>
        </li>
        <li>
          <span>Crown angle </span>
          <strong>34.5°</strong>
        </li>
        <li>
          <span>Crown height </span>
          <strong>13.5%</strong>
        </li>
        <li>
          <span>Pavilion angle </span>
          <strong>41.4°</strong>
        </li>
        <li>
          <span>Pavilion depth </span>
          <strong>44.0%</strong>
        </li>
        <li>
          <span>Star depth </span>
          <strong>50.00%</strong>
        </li>
        <li>
          <span>Lower half </span>
          <strong>75.00%</strong>
        </li>
        <li>
          <span>Fluorescence</span>
          <strong>None</strong>
        </li>
        <li>
          <span>Clarity characteristics </span>
          <strong>Crystal, Feather</strong>
        </li>
      </ul>
    </div>
  );
}
