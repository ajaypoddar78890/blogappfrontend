import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-gradient-to-b from-green-50 to-green-100 h-[80vh] border-b-2">
      <div className="hero-content h-full container mx-auto px-4   flex items-center justify-center">
        {" "}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 w-full ">
          {" "}
          <div className="lg:order-1">
            {" "}
            <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl leading-tight">
              {" "}
              A World of Ideas, at Your
              <div className="relative inline-flex">
                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                <span className="relative"> Fingertips</span>
              </div>
            </h1>
            <p className="mt-8 text-base text-black sm:text-xl leading-relaxed">
              {" "}
              Welcome to your go-to destination for stories, insights, and
              inspiration. Whether you're exploring new ideas, staying updated
              on trends, sparking conversations, and celebrating the art of
              storytelling. Dive in and let your curiosity lead the way!
            </p>
            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
              <a
                href="#"
                title="Start exploring"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 rounded-lg"
                role="button"
              >
                Start exploring
              </a>

              <a
                href="#"
                title="Watch video"
                className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
              >
                <svg
                  className="w-10 h-10 mr-3 fill-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.555 0V14.13a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch video
              </a>
            </div>
          </div>
          <div className="lg:order-2">
            {" "}
            <img
              className="w-full h-auto max-h-[80vh] object-contain"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
              alt="Hero Image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
