import React from "react";
import banner from "../../../Images/THE-BEAM-WHEEL-FLASH-2.0-high-vis-bike-reflectors-01.jpeg";
import CountUp from "react-countup";
import { BeakerIcon, ChartBarIcon, HandRaisedIcon, SparklesIcon, UserGroupIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'


const BusinessSummary = () => {
  return (
    <div>
      <div class="hero min-h-screen" style={{ background: `url(${banner})` }}>
        <div class="hero-overlay bg-accent bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div>
            <h2 className="font-bold text-5xl text-white py-5">
              Business Summary
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              obcaecati provident assumenda enim sit a esse? Voluptates
              reprehenderit exercitationem error magnam minima ea. Quis quam
              quisquam consectetur praesentium numquam non.
            </p>
            
          
            <div className="grid grid-cols-1 lg:grid-cols-5 text-white">
            <CountUp start={0} end={100} delay={0}>
              {({ countUpRef }) => (
                 <div className="p-5 m-10">
                  <HandRaisedIcon className="h-20 w-auto mx-auto text-primary mb-5"/>
                 <span className="text-7xl"  ref={countUpRef} />
                 <h2 className=" font-bold text-white text-2xl">  <br />
                 Served 
                 </h2> 
             </div>
              )}
            </CountUp>
            <CountUp start={0} end={350} delay={0}>
              {({ countUpRef }) => (
                 <div className="p-5 m-10">
                  <SparklesIcon className="h-20 w-auto mx-auto text-primary mb-5"/>
                 <span className="text-7xl"  ref={countUpRef} />
                 <h2 className="font-bold text-white text-2xl">  <br />
                 Reviews 
                 </h2> 
             </div>
              )}
            </CountUp>
            <CountUp start={0} end={504} delay={0}>
              {({ countUpRef }) => (
                 <div className="p-5 m-10">
                  <ChartBarIcon className="h-20 w-auto mx-auto text-primary mb-5"/>
                 <span className="text-7xl"  ref={countUpRef} />
                 <h2 className="font-bold text-white text-2xl">  <br />
                 Revenue 
                 </h2> 
             </div>
              )}
            </CountUp>
            <CountUp start={0} end={455} delay={0}>
              {({ countUpRef }) => (
                 <div className="p-5 m-10">
                  <WrenchScrewdriverIcon className="h-20 w-auto mx-auto text-primary mb-5"/>
                 <span className="text-7xl"  ref={countUpRef} />
                 <h2 className=" font-bold text-white text-2xl">  <br />
                 Parts 
                 </h2> 
             </div>
              )}
            </CountUp>
            <CountUp start={0} end={455} delay={0}>
              {({ countUpRef }) => (
                 <div className="p-5 m-10">
                  <UserGroupIcon className="h-20 w-auto mx-auto text-primary mb-5"/>
                 <span className="text-7xl"  ref={countUpRef} />
                 <h2 className=" font-bold text-white text-2xl">  <br />
                 Customer 
                 </h2> 
             </div>
              )}
            </CountUp>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
