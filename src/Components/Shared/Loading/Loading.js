import React from "react";

const Loading = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="flex items-center justify-center ">
            <div class="w-24 h-24 border-t-4 border-b-4 border-primary rounded-full animate-spin">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
