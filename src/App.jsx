import {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
