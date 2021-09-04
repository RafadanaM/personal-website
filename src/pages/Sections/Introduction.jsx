import React, { useRef } from "react";

import CircleProfile from "../../components/CircleProfile/CircleProfile";
import useOnScreen from "../../components/UseOnScreen";

function Introduction() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <section
      ref={ref}
      id="/"
      className="grid grid-cols-1 grid-rows-2 h-screen w-full md:grid-cols-2 md:grid-rows-1"
    >
      <div className="col-start-1 row-start-1 flex p-2 justify-center items-center md:p-8">
        <CircleProfile isVisible={isVisible} />
      </div>
      <div className="col-start-1 row-start-2 row-span-2 text-5xl flex flex-col p-2 md:justify-center md:col-start-2 md:row-start-1 text-white md:p-8 md:text-7xl">
        <h1
          className={`text-center transition duration-1000 delay-150 ${
            isVisible ? "opacity-100" : "opacity-0 transform -translate-x-96"
          } md:text-left md:ml-0`}
        >
          MUHAMMAD
        </h1>
        <h1
          className={`text-center transition duration-1000 delay-150 ${
            isVisible ? "opacity-100" : "opacity-0 transform translate-x-96"
          }`}
        >
          RAFADANA
        </h1>
        <h1
          className={`text-center transition duration-1000 delay-150 ${
            isVisible ? "opacity-100" : "opacity-0 transform -translate-x-96"
          } md:text-right`}
        >
          MOUNTHEIRA
        </h1>
      </div>
    </section>
  );
}

export default Introduction;
