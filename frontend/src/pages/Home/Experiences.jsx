import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../../resources/experiences.js";
function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-scroll sm:w-full">
          <div>
            {experiences.map((experience, index) => (
              <div
                className="cursor-pointer py-5"
                onClick={() => {
                  setSelectedItemIndex(index);
                }}
              >
                <h1
                  className={`text-l px-4 ${
                    selectedItemIndex === index
                      ? `text-tertiery border-tertiery border-l-4 -ml-[3px] bg-[#3e7c7a1e] py-4`
                      : `text-white`
                  }`}
                >
                  {experience.period}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
           <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiery text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            expedita ab excepturi totam asperiores aspernatur quae error vel
            esse, placeat ipsum, atque nam commodi consequuntur quidem quia,
            sunt voluptates? Beatae.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
