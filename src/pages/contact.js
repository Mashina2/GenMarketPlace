import Image from 'next/image';
import Layout from '../Components/Layout';
export default function Contact() {
  return (
    <Layout>
      <div className="contact-area">
        <h2>CONTACTS</h2>
        <div className="container">
          <div className="contact-area-inner">
            <div className="contact-location">
              <p>Vestingstraat 79, 2018 Antwerpen, Belgium</p>
              <Image src="/img/contact.png" width={700} height={525} alt="" />
            </div>
            <div className="contact-form">
              <h3>Get in touch</h3>
              <form action="/">
                <textarea
                  name="message"
                  placeholder="Message"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
                <input type="text" placeholder="First name" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone" required />
                <button>SEND</button>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.3049244214258!2d4.419864215315422!3d51.213458239973775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f70379a5e875%3A0xde0c0c74e3d7bc33!2sPlopsa%20Station%20Antwerp!5e0!3m2!1sen!2smm!4v1650477084503!5m2!1sen!2smm"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
