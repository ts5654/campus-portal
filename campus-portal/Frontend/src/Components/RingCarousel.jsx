import React, { useState } from "react";

const RingCarousel = ({ images }) => {
  const [rotation, setRotation] = useState(0);
  const angle = 360 / images.length; // har image ka angle

  const handleHover = (dir) => {
    setRotation((prev) => prev + (dir === "left" ? -angle : angle));
  };

  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-black">
      <div
        className="relative"
        style={{
          perspective: "1200px",
          width: "300px",
          height: "400px",
        }}
      >
        <div
          className="absolute w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="absolute w-full h-full overflow-hidden shadow-lg rounded-xl"
              style={{
                transform: `rotateY(${index * angle}deg) translateZ(500px)`,
              }}
              onMouseEnter={() => handleHover("right")}
              onMouseLeave={() => setRotation(0)}
            >
              <img
                src={src}
                alt={`img-${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RingCarousel;
