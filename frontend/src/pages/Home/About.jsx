/* eslint-disable react/jsx-key */
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = ["Javascript", "React", "Node", "Mongodb", "Express", "Sql"];
  return (
    <div>
      <SectionTitle title={"About"} />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/a601d813-6f3c-4690-9270-e583409a985f/CThpiyB4xn.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-3 w-1/2 sm:w-full text-white">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, impedit laboriosam temporibus voluptate aliquam, amet
            provident vitae dolores maiores optio iusto necessitatibus maxime?
            Dignissimos quidem nisi voluptatem veniam rem perferendis ducimus
            suscipit sunt! Cupiditate earum adipisci aliquam vitae magnam
            repellendus ab explicabo ad. Quod eos veniam, quidem quo iusto
            omnis?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            voluptatem! Voluptate dignissimos eos omnis quos aliquam
            reprehenderit pariatur laboriosam doloremque velit, culpa nihil
            recusandae vero, consequatur error quibusdam eligendi! Consequuntur
            numquam, enim incidunt id autem soluta at ut suscipit magnam.
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
