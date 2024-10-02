import Profile from "../Profile";
import Skills from "./Skills";
import Likes from "./Likes";

const AboutMe = () => {
  return (
    <main className="flex flex-col justify-start items-center gap-20 px-8 py-16">
      <section className="w-full flex flex-col justify-start items-center gap-8 mt-24 sm:mt-48">
        <label className="w-11/12 sm:w-4/5 text-left text-gray-600 text-2xl font-oswald">
          Profile
        </label>
        <Profile />
      </section>
      <hr className="w-11/12 mt-32" />
      <section className="w-full flex flex-col justify-start items-center gap-8 mt-24 sm:mt-48">
        <label className="w-11/12 sm:w-4/5 text-left text-gray-600 text-2xl font-oswald">
          Skills
        </label>
        <Skills />
      </section>
      <hr className="w-11/12 mt-32" />
      <section className="w-full flex flex-col justify-start items-center gap-8 my-24 sm:my-48">
        <label className="w-11/12 sm:w-4/5 text-left text-gray-600 text-2xl font-oswald">
          Likes
        </label>
        <Likes />
      </section>
    </main>
  );
};

export default AboutMe;
