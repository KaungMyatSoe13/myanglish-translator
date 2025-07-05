import { GoCopy } from "react-icons/go";
import { useState } from "react";

export default function CopyButton({ textToCopy }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    navigator.clipboard.writeText(textToCopy);
    // Reset the clicked state after animation
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <div className="flex flex-row justify-end items-center w-full">
      <div className="flex items-center gap-2">
        <GoCopy
          className={`text-gray-500 hover:cursor-pointer transition-all duration-200 ${
            isClicked ? "scale-85" : ""
          }`}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
