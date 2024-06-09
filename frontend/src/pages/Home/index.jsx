import Header from "../../components/Header";
import Intro from "./intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";
function index() {
  const { portfoliodata } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfoliodata && (
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          { /*<About />*/}
          {/* <Experiences /> */}
          <Projects />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
    </div>
  );
}

export default index;
