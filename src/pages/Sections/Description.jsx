import React, { useRef } from "react";
import useOnScreen from "../../components/UseOnScreen";

function Description() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <section
      ref={ref}
      id="/about"
      className="grid grid-cols-1 grid-rows-3 h-screen w-full px-10 md:grid-cols-2 md:grid-rows-1"
    >
      <div className="flex justify-center items-center row-start-1 text-white md:row-start-1 md:col-start-1 md:justify-start">
        <div
          className={`transform text-7xl transition duration-1000 delay-150 ${
            isVisible ? "opacity-100" : "opacity-0 transform -translate-x-96"
          } md:text-9xl md:rotate-90`}
        >
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center row-start-2 col-start-1 text-white text-2xl transition-opacity duration-1000 delay-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        } md:row-start-1 md:col-start-2 md:text-4xl`}
      >
        <div>
          <h3>
            HI! I'm Muhammad Rafadana Mountheira, a Computer Science student at
            University of Queensland.
          </h3>
          <br />
          <h3>My hobbies include:</h3>
          <div>
            <ul>
              <li>Football</li>
              <li>Programming</li>
              <li>Games</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
