import "./header.scss"
import logo from "../../assets/logo.png"
import ofcoder from "../../assets/ofcoder.png"
const Header = () => {
    return (
      <div>
        <div className="wrapper">
            <header>
                <div data-aos="fade-up" className="headline">
                <img className="logo" src={logo} alt="" />
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a id="aboutme" href="About me">About me</a> </li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Work">Work</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
                </div>
                <div className="head">
                <h2 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Hello, I'm <br /><span className="name">Feruza Odiljonova</span></h2>
         <div class="animated-text">
            <h3>Bloger</h3>
            <h3>Web developer</h3>
            <h3>Youtober</h3>
         </div>
        <button data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="head_btn">See my work</button>
         <div data-aos="flip-left" class="media-icons">
           <a href="#"><box-icon color="white" name='telegram' type='logo' ></box-icon></a>
           <a href="#"><box-icon color="white" name='instagram' type='logo' ></box-icon></a>
           <a href="#"><box-icon color="white" type='logo' name='github'></box-icon></a>
           <a href="#"><box-icon color="white" name='gmail' type='logo' ></box-icon></a>
        </div>
        <img data-aos="fade-left" className="off" src={ofcoder} alt="" />
                </div>
            </header>
        </div>
      </div>
    )
  }
  
  export default Header
