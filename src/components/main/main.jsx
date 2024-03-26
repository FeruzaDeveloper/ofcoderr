import "./main.scss";
import coder from "../../assets/coder.jpg";
import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";
import work5 from "../../assets/work5.jpg";
import work6 from "../../assets/work6.jpg";
import { useState } from "react";
import axios from "axios";

const Main = () => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [msg, setMsg] = useState();

  const sendMessage = async () => {
    if (name && address && msg) {
      const TOKEN = "7089946998:AAGaAdrPR_oYMsPejgqL88rEhoFTM8V_PtE";
      const CHAT_ID = "-1002070332555";
      const URL_API = "https://api.telegram.org/bot" + TOKEN + "/sendMessage";

      let msge = `<b>---------------------------</b>\n`;
      msge += `<b>${name}</b>\n`;
      msge += `<b>${address}</b>\n`;
      msge += `<b>${msg}</b>\n`;
      msge += `<b>---------------------------</b>`;

      await axios
        .post(URL_API, {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text: msge,
        })
        .then(() => {
          window.location.href = "/";
        });
    }
  };

  return (
    <div>
      <h1 data-aos="zoom-out-down" id="aboutme">
        About <span className="meee">Me</span>
      </h1>
      <div data-aos="fade-left" className="about_div">
        <img data-aos="fade-down-right" className="coder" src={coder} alt="" />
        <div data-aos="fade-down" className="about_tittle">
          <p className="about_mee">Hey there! I'm Feruza Odiljonova</p>
          <p className="about_long_tittle">
            I'm student at school. My birthday 10.10.2007
            <br />
            I like programming. I'm learn programming <br />
            in digital city now. Inshallah, I want to get a job <br /> in a
            great companys I will be the best developer....
          </p>
          <button className="about_btn">See More</button>
        </div>
      </div>
      <section data-aos="fade-right">
        <h1 id="Skills">Skills</h1>
        <div className="skills_card">
          <div class="info">
            <span>Figma</span>
            <span>85%</span>
          </div>
          <div class="line_1 html">
            <span className="animation"></span>
          </div>
          <div class="info">
            <span>HTML</span>
            <span>65%</span>
          </div>
          <div class="line_2 html">
            <span className="animation"></span>
          </div>
          <div class="info">
            <span>CSS</span>
            <span>50%</span>
          </div>
          <div class="line_3 html">
            <span className="animation"></span>
          </div>
          <div class="info">
            <span>Javascript</span>
            <span>40%</span>
          </div>

          <div class="line_4 html">
            <span className="animation"></span>
          </div>
          <div class="info">
            <span>React</span>
            <span>35%</span>
          </div>
          <div class="line_5 html">
            <span className="animation"></span>
          </div>
        </div>
      </section>
      <section>
        <div className="services">
          <div class="title reveal">
            <h1 data-aos="zoom-out-down" id="Service">
              My <span className="service">Service</span>
            </h1>
            <p className="service_tittle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id alias
              assumenda at minima omnis ea, qui molestiae aut facilis, voluptas{" "}
              <br /> earum doloribus incidunt ad asperiores cumque porro odit
              quod atque.
            </p>
          </div>
          <div data-aos="fade-down-right" class="content">
            <div class="card reveal">
              <div class="service-icon">
                <i class="fas fa-palette"></i>
                <h3>Web Design</h3>
              </div>
              <div class="info">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsum expedita tempore cumque qui quam autem consequatur nulla
                  saepe exercitationem?
                </p>
              </div>
            </div>
            <div class="card reveal">
              <div class="service-icon">
                <i class="fas fa-file-code"></i>
              </div>
              <h3>Web developer</h3>
              <div class="info">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsum expedita tempore cumque qui quam autem consequatur nulla
                  saepe exercitationem?
                </p>
              </div>
            </div>
            <div class="card reveal">
              <div class="service-icon">
                <i class="fas fa-object-group"></i>
              </div>
              <h3>Youtuber</h3>
              <div class="info">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsum expedita tempore cumque qui quam autem consequatur nulla
                  saepe exercitationem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="work">
          <section class="work" id="work">
            <div class="title reveal">
              <h1 data-aos="zoom-out-down" id="Work">
                My <span className="service">Work</span>
              </h1>
            </div>
            <div data-aos="flip-right" data-aos-duration="2500" class="content">
              <div class="card reveal">
                <div class="card-img">
                  <img src={work1} alt="" />
                </div>
              </div>

              <div class="card reveal">
                <div class="card-img">
                  <img src={work2} alt="" />
                </div>
              </div>

              <div class="card reveal">
                <div class="card-img">
                  <img src={work3} alt="" />
                </div>
              </div>

              <div class="card reveal">
                <div class="card-img">
                  <img src={work4} alt="" />
                </div>
              </div>

              <div class="card reveal">
                <div class="card-img">
                  <img src={work5} alt="" />
                </div>
              </div>

              <div class="card reveal">
                <div class="card-img">
                  <img src={work6} alt="" />
                </div>
              </div>
              <div class="title reveal">
                <button className="work_btn">See All</button>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="fcf-body"
      >
        <div id="fcf-form">
          <h3 class="fcf-h3" id="Contact">
            Contact me
          </h3>

          <div
            class="fcf-form-class"
            method="post"
            action="contact-form-process.php"
          >
            <div class="fcf-form-group">
              <label for="Name" class="fcf-label">
                Your name
              </label>
              <div class="fcf-input-group">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="Name"
                  name="Name"
                  class="fcf-form-control"
                  required
                />
              </div>
            </div>

            <div class="fcf-form-group">
              <label for="Email" class="fcf-label">
                Your email address
              </label>
              <div class="fcf-input-group">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  id="Email"
                  name="Email"
                  class="fcf-form-control"
                  required
                />
              </div>
            </div>

            <div class="fcf-form-group">
              <label for="Message" class="fcf-label">
                Your message
              </label>
              <div class="fcf-input-group">
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  id="Message"
                  name="Message"
                  class="fcf-form-control"
                  rows="6"
                  maxlength="3000"
                  required
                ></textarea>
              </div>
            </div>
            <div class="fcf-form-group">
              <button
                onClick={sendMessage}
                id="fcf-button"
                class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
