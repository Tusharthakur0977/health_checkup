"use client";

import React from "react";

interface IStickyButton {
  label: string;
  isSticky?: boolean;
  bgColor: string;
  color: string;
  extraClasses?: string;
  onClick?: () => void;
}

const StickyButton: React.FC<IStickyButton> = ({
  bgColor,
  color,
  isSticky,
  label,
  extraClasses,
  onClick,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      console.log("HHHHH");

      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={onClick}
      className={`text-${color}  font-bold bg-[${bgColor}] ${extraClasses} hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 rounded-lg text-sm px-5 py-2.5 text-center ${
        isSticky && isVisible && "fixed bottom-2 mx-auto"
      }  `}
    >
      {label}
    </button>
  );
};

export default StickyButton;
