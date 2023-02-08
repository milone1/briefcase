import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";
  import deved from "../assets/dev-ed-wave.png";

const PersonalInformation = () => {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Erick Millan
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Developer and designer.
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Freelancer providing services for programming and design content needs.
        Join me down below and let's get cracking!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 relative overflow-hidden mt-20 md:h-96 md:w-96">
        <img src={deved} alt="" className="object-contain" />
      </div>
    </div>
  );
};

export default PersonalInformation;
