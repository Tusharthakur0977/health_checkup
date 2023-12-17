import React, { useState, useEffect } from "react";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const divs = document.querySelectorAll(".list-item");

      divs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        const isMiddleVisible =
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2;

        if (isMiddleVisible) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const divs = Array.from({ length: 10 }, (_, index) => (
    <div
      key={index}
      className={`list-item ${activeIndex === index ? "active" : ""}`}
      style={{
        height: "100px",
        backgroundColor: activeIndex === index ? "#3498db" : "#e74c3c",
        transition: "background-color 0.5s ease",
        marginBottom: "10px",
      }}
    >
      Item {index + 1}
    </div>
  ));

  return <div>{divs}</div>;
};

export default Timeline;
