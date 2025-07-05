import { useState } from "react";

export default function ClearButton({ onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    // Reset the clicked state after animation
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <button
        className={`hover:cursor-pointer text-gray-500 transition-all duration-200  ${
          isClicked ? "scale-85" : ""
        }`}
        onClick={handleClick}
      >
        Clear
      </button>
    </div>
  );
}
