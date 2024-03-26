import "./footer.scss"
import logo from "../../assets/logo.png"   
   

function Footer() {
  return (
    <footer className="footer_wrapper">
      <div>
        <img data-aos="flip-left"
     data-aos-easing="linear"
     data-aos-duration="1500" src={logo} alt="logo" className="footer_logo" />
        <p data-aos="flip-up" data-aos-duration="1000" className='footer_desc'>Feruza Odiljonova | {new Date().getFullYear()}</p>
      </div>
      <div data-aos="flip-up"
      data-aos-duration="2000">

        <p className="footer_nav_item footer_nav_item_title">Links</p>

        <p className="footer_nav_item">About me</p>
        <p className="footer_nav_item">Skills</p>
        <p className="footer_nav_item">Services</p>
        <p className="footer_nav_item">Work</p>
        <p className="footer_nav_item">Contact</p>

      </div>
  
    
    </footer>
  )
}

export default Footer