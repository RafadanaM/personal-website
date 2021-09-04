import React from "react";

const ClickableIcon = ({ image, alt, onClick }) => {
  return (
    <div className="h-12 w-12 m-5 rounded-2xl transition duration-500 md:h-24 md:w-24 md:p-3 cursor-pointer hover:bg-gray-600 hover:bg-opacity-30">
      <img className="h-auto m-auto" src={image} alt={alt} onClick={onClick} />
    </div>
  );
};

export default ClickableIcon;
