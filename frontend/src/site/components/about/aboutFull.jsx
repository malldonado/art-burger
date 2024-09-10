const aboutFull = () => {
  return (
    <div className="mt-24 max-w-7xl mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutFull;
