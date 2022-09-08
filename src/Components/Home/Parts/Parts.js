import React, { useEffect, useState } from "react";
import Part from "./Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div>
      <div class="hero">
        <div class="hero-content text-center">
          <div class="">
            <div class="text-4xl divider divider-primary">
              <h2>Our Bike Parts</h2>
            </div>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. <br /> In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
          <div className="grid md:grid-cols-3 gap-5">
            {parts.map((part) => (
              <Part key={part.id} part={part}></Part>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parts;
