import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
function Contact() {

  const { loading, portfoliodata } = useSelector((state) => state.root);
  const { contact} = portfoliodata;

  return (
    <div>
      <SectionTitle title={"Say Hello"} />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiery ">{"{"}</p>
          {Object.keys(contact).map((key) => (
            key !=="_id" && <p key={key} className="ml-5">
              <span className="text-tertiery">{key} : </span>
              <span className="text-tertiery">{contact[key]}</span>
            </p>
          ))}

          <p className="text-tertiery">{"}"}</p>
       
      </div>
      <div className="h-[400px]">
        <dotlottie-player
          src="https://lottie.host/bf2c0921-1df9-496f-bb4b-4dd9af14a53a/OqYFm73u4D.json"
          background="transparent"
          speed="1"
          autoplay
          loop
          
        ></dotlottie-player>
      </div>
      </div>
    </div>
  );
}

export default Contact;
