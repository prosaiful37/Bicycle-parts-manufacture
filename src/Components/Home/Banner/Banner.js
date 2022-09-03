import React from "react";
import banner1 from "../../../Images/banner/1.png";
import banner2 from "../../../Images/banner/2.png";
import banner3 from "../../../Images/banner/3.png";

const Banner = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={banner1} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle btn-primary">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle btn-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src={banner2} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle btn-primary">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle btn-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src={banner3} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle btn-primary">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle btn-primary">
              ❯
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
