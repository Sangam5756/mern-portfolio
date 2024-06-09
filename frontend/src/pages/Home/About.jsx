/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function About({aboutRef}) {
  const { loading, portfoliodata } = useSelector((state) => state.root);
  const { about } = portfoliodata;
  const {skills, lottieURL, description1, description2} = about;
  return (
    <div  ref={aboutRef} className="about-section">
      <SectionTitle title={"About"} />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            autoplay
            loop
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-3 w-1/2 sm:w-full text-white">
          <p>{description1 || ""}
          </p>
          <p>
            {description2 || " "}
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiery text-xl">
          Here are few technologies i have been working with recently
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="text-tertiery border border-tertiery py-3 px-10">
              <h1 >{skill} </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
