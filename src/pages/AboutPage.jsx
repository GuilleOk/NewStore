/* eslint-disable react/no-unescaped-entities */
const AboutPage = () => {
  return (
    <div>
      <img src="images/Nosotros.jpg" alt="about us" className="d-none d-lg-block" style={{width: '100%', height: '45vh'}} />
      <img src="images/Nosotros.jpg" alt="about us" className="d-block d-lg-none" style={{width: '100%', height: '18vh'}} />
      <div className="d-none d-lg-block aboutContainer">
        <h1 className="headerAbout">Welcome to Click and Chic</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem'}}>
        <img src="images/nosotrosMision.jpg" alt="Mision" style={{width: '30%', height: '10rem', borderRadius: '10px'}} />
        <p className="textAbout">At Click and Chic, our mission is to provide you with an exceptional shopping experience where quality, fashion, and technology come together. Founded with the vision of being your trusted online store, we specialize in offering a carefully curated selection of electronic devices, jewelry, and clothing for all styles and occasions.</p>      
      </div>
      <h2 className="titlesAbout">Our Story</h2>
      <p className="textAbout">It all started with a passion for technology and fashion. In a world where trends change rapidly, we wanted to create a space where our customers could find the latest in electronic devices and fashion, all in one place. From our humble beginnings, we have grown and evolved, but our dedication to offering high-quality products and exceptional customer service remains our priority.</p>
      <h2 className="titlesAbout">What We Offer</h2>
      <ul>
        <li>
          <p className="textAbout"><strong>Electronic Devices:</strong> From the latest gadgets to must-have accessories, at Click and Chic you will find everything you need to stay at the forefront of technology.</p>
        </li>
        <li>
          <p className="textAbout"><strong>Jewelry:</strong> Our jewelry collection combines elegance and style, perfect for any occasion. Each piece is designed to highlight your individuality.</p>
        </li>
        <li>
          <p className="textAbout"><strong>Clothing for Everyone:</strong> We offer a wide range of clothing for both men and women. Whether you're looking for a casual outfit or something more formal, we have options that fit your personal style.</p>
        </li>
      </ul>
      <h2 className="titlesAbout">Our Values</h2>
      <p className="textAbout">At Click and Chic, we believe in the importance of quality and sustainability. We strive to work with suppliers who share our vision of social responsibility and environmental care. Each product we offer has been selected not only for its quality but also for its ability to make a positive difference in the world.</p>
      <h2 className="titlesAbout">Our Commitment</h2>
      <p className="textAbout">We are committed to providing you with an unparalleled shopping experience. Our team is here to help you every step of the way, from choosing the perfect product to after-sales service. Your satisfaction is our top priority.</p>
      <h2 className="titlesAbout">Connect with Us</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem'}}>
        <img src="images/Contáctenos copia.png" alt="Contact with us" style={{height: '30vh'}} />
        <div>
        <p className="textAbout">We invite you to explore our store and discover everything Click and Chic has to offer. If you have any questions or need assistance, do not hesitate to contact us. We are here to help you find exactly what you're looking for.</p>        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
          <div style={{display: 'flex', alignItems: 'center'}} className="mx-2 gap-3">
            <img src="images/icons8-delivery-pin-for-parcel-delivery-location-making-96.png" alt="address" style={{height: '70%'}} />
            <div>
              <p><strong>Calle X # Y</strong></p>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}} className="mx-2 gap-3">
            <img src="images/icons8-teléfono-celular-64.png" alt="telef" />
            <div>
              <p><strong>123 456 7890</strong></p>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}} className="mx-2 gap-3">
            <img src="images/icons8-email-80.png" alt="email" style={{height: '70%'}} />
            <div>
              <p><strong>clickandchic@gmail.com</strong></p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <br />
      <p className="textAbout"><strong>Thank you for choosing Click and Chic!</strong> We are excited to accompany you on your journey towards style and technology.</p>
      </div>
      <div className="d-block d-lg-none aboutContainerSM">
        <h1 className="headerAboutSM">Welcome to Click and Chic</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
          <img src="images/nosotrosMision.jpg" alt="Mision" style={{width: '100%', height: '10rem', borderRadius: '10px'}} />
          <p className="textAboutSM mt-2">At Click and Chic, our mission is to provide you with an exceptional shopping experience where quality, fashion, and technology come together. Founded with the vision of being your trusted online store, we specialize in offering a carefully curated selection of electronic devices, jewelry, and clothing for all styles and occasions.</p>      
        </div>
      <h2 className="titlesAboutSM">Our Story</h2>
      <p className="textAboutSM">It all started with a passion for technology and fashion. In a world where trends change rapidly, we wanted to create a space where our customers could find the latest in electronic devices and fashion, all in one place. From our humble beginnings, we have grown and evolved, but our dedication to offering high-quality products and exceptional customer service remains our priority.</p>
      <h2 className="titlesAbout">What We Offer</h2>
      <ul>
        <li>
          <p className="textAboutSM"><strong>Electronic Devices:</strong> From the latest gadgets to must-have accessories, at Click and Chic you will find everything you need to stay at the forefront of technology.</p>
        </li>
        <li>
          <p className="textAboutSM"><strong>Jewelry:</strong> Our jewelry collection combines elegance and style, perfect for any occasion. Each piece is designed to highlight your individuality.</p>
        </li>
        <li>
          <p className="textAboutSM"><strong>Clothing for Everyone:</strong> We offer a wide range of clothing for both men and women. Whether you're looking for a casual outfit or something more formal, we have options that fit your personal style.</p>
        </li>
      </ul>
      <h2 className="titlesAbout">Our Values</h2>
      <p className="textAboutSM">At Click and Chic, we believe in the importance of quality and sustainability. We strive to work with suppliers who share our vision of social responsibility and environmental care. Each product we offer has been selected not only for its quality but also for its ability to make a positive difference in the world.</p>
      <h2 className="titlesAbout">Our Commitment</h2>
      <p className="textAboutSM">We are committed to providing you with an unparalleled shopping experience. Our team is here to help you every step of the way, from choosing the perfect product to after-sales service. Your satisfaction is our top priority.</p>
      <h2 className="titlesAbout">Connect with Us</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem'}}>
        <img src="images/Contáctenos copia.png" alt="Contact with us" style={{height: '22vh'}} />
        <div>
        <p className="textAboutSM">We invite you to explore our store and discover everything Click and Chic has to offer. If you have any questions or need assistance, do not hesitate to contact us. We are here to help you find exactly what you're looking for.</p>        
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <div style={{display: 'flex', alignItems: 'center'}} className="my-1 mx-2 gap-1">
            <img src="images/icons8-delivery-pin-for-parcel-delivery-location-making-96.png" alt="address" style={{height: '4vh', width: '7vw'}} />
            <div>
              <p style={{height: '3vw'}}><strong>Calle X # Y</strong></p>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}} className="my-1 gap-1 mx-2">
            <img src="images/icons8-teléfono-celular-64.png" alt="telef" style={{height: '4vh', width: '7vw'}} />
            <div>
              <p style={{height: '3vw'}}><strong>123 456 7890</strong></p>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}} className="my-1 gap-1 mx-2">
            <img src="images/icons8-email-80.png" alt="email" style={{height: '4vh', width: '7vw'}} />
            <div>
              <p style={{height: '3vw'}}><strong>clickandchic@gmail.com</strong></p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <br />
      <p className="textAboutSM"><strong>Thank you for choosing Click and Chic!</strong> We are excited to accompany you on your journey towards style and technology.</p>
      </div>
    </div>
  );
}

export default AboutPage;