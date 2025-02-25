import { Link } from "react-router"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="firstContainer">
        <div className="d-none d-lg-inline footerLogo">
          <img src="images/LOGO_OK.png" alt="Logo" className="LogoFooter" />
        </div>
        <div className="d-inline d-lg-none footerLogoSM">
          <img src="images/LOGO_OK.png" alt="Logo" className="LogoFooterSM" />
        </div>
        <div className="redesSocialesContainer gap-1">
          <div><a href="..."><img src="images/redes_sociales/facebook_2504903.png" alt="facebook" className="d-none d-lg-inline Logo" /></a></div>
          <div><a href="..."><img src="images/redes_sociales/facebook_2504903.png" alt="facebook" className="d-inline d-lg-none LogoSM" /></a></div>
          
          <div><a href="..."><img src="images/redes_sociales/instagram_2111463.png" alt="instagram" className="d-none d-lg-inline Logo" /></a></div>
          <div><a href="..."><img src="images/redes_sociales/instagram_2111463.png" alt="instagram" className="d-inline d-lg-none LogoSM" /></a></div>
          
          <div><a href="..."><img src="images/redes_sociales/linkedin_3536505.png" alt="linkedin" className="d-none d-lg-inline Logo" /></a></div>
          <div><a href="..."><img src="images/redes_sociales/linkedin_3536505.png" alt="linkedin" className="d-inline d-lg-none LogoSM" /></a></div>
          
          <div><a href="..."><img src="images/redes_sociales/X.png" alt="twitter" className="d-none d-lg-inline Logo" /></a></div>
          <div><a href="..."><img src="images/redes_sociales/X.png" alt="twitter" className="d-inline d-lg-none LogoSM" /></a></div>
          
          <div><a href="..."><img src="images/redes_sociales/youtube_3938037.png" alt="youtube" className="d-none d-lg-inline Logo" /></a></div>
          <div><a href="..."><img src="images/redes_sociales/youtube_3938037.png" alt="youtube" className="d-inline d-lg-none LogoSM" /></a></div>
        </div>
      </div>
      <div style={{padding: '0 2rem', margin: '0 0'}}>
        <hr style={{margin: '0 0 '}} />
      </div>
      <div className='d-none d-lg-flex SecondContainer px-5 py-3'>
        <div className="d-none d-lg-inline textFooter">All Rigths Reserved</div>
        
        <div className="d-none d-lg-inline textFooter"><strong>Follow us in:</strong> <a href="#" className="linksFooter">miprivacidad@gmail.com</a> </div>
        
        <div className="d-none d-lg-inline textFooter"><Link to='/about' className="linksFooter">About us</Link></div>
        
        <div className="d-none d-lg-inline textFooter"><Link to='/privacity' className="linksFooter">Privacy Policy</Link></div>
      </div>
      <div className='d-flex d-lg-none SecondContainer px-2 py-3 gap-2'>
        <div className="d-inline d-lg-none textFooterSM">All Rigths Reserved</div>
        
        <div className="d-inline d-lg-none textFooterSM"><strong>Follow us in:</strong> <a href="#" className="linksFooter">miprivacidad@gmail.com</a> </div>
        
        <div className="d-inline d-lg-none textFooterSM"><Link to='/about' className="linksFooter">About us</Link></div>
        
        <div className="d-inline d-lg-none textFooterSM"><Link to='/privacity' className="linksFooter">Privacy Policy</Link></div>
      </div>
    </div>
  )
}

export default Footer