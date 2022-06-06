import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import Layout from '../Components/Layout';
export default function DigiGold() {
  return (
    <Layout>
      <div className="digi-gold-area">
        <div className="digi-gold-header">
          <h2>Digital Gold</h2>
        </div>
        <div className="digi-gold-info">
          <div className="container">
            <p>
              Buy and sell digital gold, all at the click of a button. Each
              purchase is backed by a portion of a real physical gold bar,
              stored securely within The Vault®. Click here to find out more
              about DigiGold, or to start investing in digital gold today,
              follow the simple steps below.
            </p>
            <h2>
              Invest in digital gold today <br />
              from as little as £25
            </h2>
            <div className="digi-gold-input-area">
              <p>I&apos;d like to invest</p>
              <div className="digi-gold-input">
                <span>£</span> <input type="text" value="25.00" />
              </div>
              <button>Calculate</button>
            </div>
            <h3>
              Select a quick investment:
              <ul>
                <li>£50.00 </li>
                <li> £100.00 </li>
                <li>£500.00 </li>
                <li>£1,000.00 </li>
              </ul>
            </h3>
            <p>
              *Please note that your investment amount may be rounded when
              calculating your investment options.
            </p>
          </div>
        </div>
        <div className="digi-gold-info2">
          <h2>Investing £25.00 today will allow you to purchase and vault:</h2>
          <div className="digi-gold-estimated">
            <h3>DIGITAL GOLD</h3>
            <h4>0.016 oz</h4>
            <h6>£1,497.31 per oz</h6>
            <button>ESTIMATED</button>
          </div>
        </div>

        <div className="digi-gold-management-area">
          <div className="container">
            <h3>MANAGEMENT FEES</h3>
            <h2>No Hidden Fees</h2>
            <p>
              With DigiGold there are no hidden management fees, so you won’t
              get any nasty surprises.
            </p>
            <table>
              <thead>
                <tr>
                  <th>BUY</th>
                  <th>STORE</th>
                  <th>SELL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.33%</td>
                  <td>0.5% + VAT </td>
                  <td>1.00%</td>
                </tr>
              </tbody>
            </table>
            <h6>
              The storage fee of 0.5% + VAT per annum is based on the average
              daily value of your total metal holding.
            </h6>
            <p>
              The below table indicates your estimated annual storage charge
              based on investing £50 per month, from 1-18 years. Please note
              this does not take any future market fluctuations into
              consideration and is indicative only.
            </p>
            <table>
              <thead>
                <tr>
                  <th>YEAR</th>
                  <th>TOTAL VALUE OF DIGIGOLD HELD </th>
                  <th>FLAT ANNUAL RATE </th>
                  <th>ESTIMATED ANNUAL FEE INCLUDING VAT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>£600</td>
                  <td>0.5%</td>
                  <td>£3.60</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>£3,000 </td>
                  <td>0.5%</td>
                  <td>£18.00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>£6,000 </td>
                  <td>0.5%</td>
                  <td>£36.00</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>£10,800 </td>
                  <td>0.5%</td>
                  <td>£64.80</td>
                </tr>
              </tbody>
            </table>
            <p>
              DigiGold management fees are charged at 0.5% + VAT per annum based
              on the average daily market value of your total gold holding that
              is stored in The Vault®.
            </p>
            <p>
              Please note that The Royal Mint will offer to buy your Digital
              Silver and Digital Platinum back at the live metal spot price
              minus a 1% fee. The VAT paid on purchase is a requirement under UK
              law and is passed to HM Revenue & Customs. It is not refundable
              upon sale. There is no VAT liability on the sale of goods by
              non-VAT registered individuals.
            </p>
            <p>
              Invoices are issued quarterly and will be settled from your
              available account balance. If you do not have sufficient balance
              to cover the cost of storage, your account will be in arrears
              until the balance is paid. You can add funds to your account using
              debit card or bank transfer.
            </p>
          </div>
        </div>

        <div className="digi-gold-faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>

            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>What is DigiGold?</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    DigiGold is a simple and cost-effective way to own physical
                    gold, silver and platinum in quantities to suit all budgets,
                    allowing you to purchase and own a fractional amount of
                    large gold, silver and platinum bars that are held securely
                    in The Vault™.{' '}
                  </p>

                  <p>
                    These large bars allow us to offer economies of scale and
                    pass on the savings to customers. Unlike buying coins or
                    bars, it enables you to purchase gold, silver and
                    platinum-based on value rather than weight e.g. £25 instead
                    of a 1 oz. coin or bar, providing you with control and
                    flexibility. Please note that DigiGold products cannot be
                    delivered.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Does DigiGold attract Capital Gains Tax for UK customers?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, it does. If you are looking for CGT exemption, then all
                    UK legal tender bullion coins from The Royal Mint can offer
                    this benefit. If you are unsure about implications in
                    relation to capital gains tax, please speak to your
                    financial adviser.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How is buying DigiGold different to buying coins or bars?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    DigiGold offers direct ownership of real physical gold,
                    silver or platinum without the delivery or fabrication fees
                    associated with coins and bars. Unlike coins and bars,
                    DigiGold enables you to purchase gold, silver and
                    platinum-based on value rather than weight e.g. £25 instead
                    of a 1 oz. coin or bar.
                  </p>
                  <p>
                    As you purchase fractions of a large bar, DigiGold cannot be
                    delivered. Subject to a minimum order value of £25, you can
                    purchase any amount you choose in 0.001 ounce units, and
                    unlike larger coins and bars, you can spend exactly what you
                    choose.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How does DigiGold work?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The Royal Mint buys large bars and stores them securely
                    within The Vault™. Subject to a minimum order value of £25,
                    you can purchase fractions of these bars to the nearest
                    0.001 oz., but unlike buying coins or bars, it enables you
                    to purchase gold, silver and platinum-based on value rather
                    than weight e.g. £25 instead of a 1 oz. coin or bar.
                  </p>
                  <p>
                    When you purchase DigiGold, you own it and have legal title
                    to it, with The Royal Mint acting as a custodian only. This
                    means that we don’t have any direct claim on the gold you’ve
                    purchased, and you have the assurance that your gold, silver
                    and platinum are protected.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How is my DigiGold stored?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    DigiGold allows you to purchase and own individual ounces of
                    large 400 oz. gold, silver and platinum bars, that are held
                    securely in The Vault™. These large 400 oz. bars allow us to
                    offer economies of scale to our clients and pass on the
                    savings. Please note that DigiGold cannot be delivered.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How do I open a DigiGold account?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    DigiGold is a product offered alongside our existing
                    investment coins and bars. If you already have an Invest
                    account on royalmint.com, then you simply need to log in to
                    purchase digital gold, silver and platinum.
                  </p>
                  <p>
                    If you haven’t opened an Invest account, this process only
                    takes a few minutes to complete. Once your application is
                    approved, you can add funds and begin trading.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
}
