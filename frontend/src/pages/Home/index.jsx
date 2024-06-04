import Header from "../../components/Header";
import Intro from "./intro";
function index() {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40">
        <Intro />
      </div>
    </div>
  );
}

export default index;
