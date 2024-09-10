const About = () => {
  return (
    <div className="mt-24 max-w-7xl mx-auto">
      <span className="md:text-[100px] text-[50px] ml-3 md:ml-0 text-white font-bold text-left uppercase">
        ABOUT
      </span>
      <div className="container mx-auto flex justify-center items-center px-4 md:px-10 py-20">
        <div id="modal" className="flex justify-center items-center">
          <div className="px-3 md:px-4 py-12 flex flex-col justify-center items-center">
            <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center md:w-9/12 lg:w-7/12 text-white overflow-hidden">
              Welcome to the coveted family of luxe!
            </h1>
            <p className="mt-10 text-base leading-normal text-center md:w-9/12 lg:w-7/12 text-white">
              A confirmation email has been sent to your account,
              johndoe@gmail.com, with the details of shipping and delivery.
            </p>
            <div className="mt-12 md:mt-14 w-full flex justify-center">
              <button className="text-white dark:border-white w-full sm:w-auto border border-gray-800 text-base font-medium py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-black hover:bg-white">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
