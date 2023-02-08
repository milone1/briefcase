const Stacks = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">My Stack</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          {/* <Image src={design} width={100} height={100} /> */}
          <h3 className="text-3xl font-medium pt-8 pb-2 uppercase">Frontend</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Javascript</h4>
          <p className="text-gray-800 py-1">Typescript</p>
          <p className="text-gray-800 py-1">React</p>
          <p className="text-gray-800 py-1">Next.js</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          {/* <Image src={code} width={100} height={100} /> */}
          <h3 className="text-3xl font-medium pt-8 pb-2 uppercase">Backend</h3>
          <p className="py-2">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <h4 className="py-4 text-teal-600">NodeJS</h4>
          <p className="text-gray-800 py-1">DJango</p>
          <p className="text-gray-800 py-1">.net</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          {/* <Image src={consulting} width={100} height={100} /> */}
          <h3 className="text-3xl font-medium pt-8 pb-2 uppercase">Mobile</h3>
          <p className="py-2">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 className="py-4 text-teal-600">Flutter</h4>
          <p className="text-gray-800 py-1">ReactNative</p>
          <p className="text-gray-800 py-1">Xamarin</p>
        </div>
      </div>
    </section>
  );
};

export default Stacks;
