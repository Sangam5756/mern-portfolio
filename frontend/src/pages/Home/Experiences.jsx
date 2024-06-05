import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../../resources/experiences.js";
function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className="flex py-10">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82]">
          <div>
            {experiences.map((experience, index) => (
              <div
                className="cursor-pointer py-5"
                onClick={() => {
                  setSelectedItemIndex(index);
                }}
              >
                <h1
                  className={`text-xl px-5 ${selectedItemIndex === index
                      ? `text-tertiery border-tertiery border-l-4 -ml-[3px] bg-[#3e7c7a1e] py-4`
                      : `text-white`
                    }`}
                >
                  {experience.period}
                </h1>
              </div>
            ))}
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
