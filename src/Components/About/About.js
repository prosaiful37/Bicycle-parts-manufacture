import React from "react";

const About = () => {
  return (
    <div>
      <div className="py-7">
        <h2 className="text-primary font-bold md:text-5xl sm:text-4xl text-center">
          About
        </h2>
      </div>
      <div class="hero min-h-screen">
        <div class="hero-content">
          <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid gap-10 lg:grid-cols-2">
              <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                <div class="max-w-xl mb-6">
                  <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Our Mission next <br class="hidden md:block" />
                    <span class="inline-block text-deep-purple-accent-400">
                      {" "}
                      destination
                    </span>
                  </h2>
                  <p class="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae. explicabo.
                  </p>
                </div>
                <div>
                  <a
                    href="/"
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Learn more
                    <svg
                      class="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="flex items-center justify-center -mx-4 lg:pl-8">
                <div class="flex flex-col items-end px-3">
                  <img
                    class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                  <img
                    class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                </div>
                <div class="px-3">
                  <img
                    class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                    src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our team */}
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Our expert team
          </p>
          <p class="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
        <div class="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
          <div class="flex flex-col items-center">
            <img
              class="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div class="flex flex-col items-center">
              <p class="text-lg font-bold">Oliver Aguilerra</p>
              <p class="text-sm text-gray-800">Product Manager</p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div class="flex flex-col items-center">
              <p class="text-lg font-bold">Marta Clermont</p>
              <p class="text-sm text-gray-800">Design Team Lead</p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div class="flex flex-col items-center">
              <p class="text-lg font-bold">Anthony Geek</p>
              <p class="text-sm text-gray-800">CTO, Lorem Inc.</p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div class="flex flex-col items-center">
              <p class="text-lg font-bold">Alice Melbourne</p>
              <p class="text-sm text-gray-800">Human Resources</p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt="Person"
            />
            <div class="flex flex-col items-center">
              <p class="text-lg font-bold">Martin Garix</p>
              <p class="text-sm text-gray-800">Bad boy</p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div class="flex flex-col items-center">
              <p class="text-lg font-bold">Andrew Larkin</p>
              <p class="text-sm text-gray-800">Backend Developer</p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div class="flex flex-col items-center">
              <p class="text-lg font-bold">Sophie Denmo</p>
              <p class="text-sm text-gray-800">Designer UI/UX</p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div class="flex flex-col items-center">
              <p class="text-lg font-bold">Benedict Caro</p>
              <p class="text-sm text-gray-800">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
