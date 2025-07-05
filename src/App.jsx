import { useState, useEffect } from "react";
import translator from "myanglish-translator";
import { FaArrowsRotate } from "react-icons/fa6";
import { GoCopy } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import MyanglishBox from "./components/MyanglishBox.jsx";
import BurmeseBox from "./components/BurmeseBox.jsx";
import { MdContactMail } from "react-icons/md";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isReversed, setIsReversed] = useState(false);

  const clearText = () => {
    setInput("");
    setOutput("");
  };

  useEffect(() => {
    console.log("isReversed changed to:", isReversed);
  }, [isReversed]);

  const handleMyanglishChange = (e) => {
    const text = e.target.value;
    setInput(text);
    const translated = translator.convertToBurmese(text);
    setOutput(translated);
  };

  const handleBurmeseChange = (e) => {
    const text = e.target.value;
    setOutput(text);
    const translated = translator.convertToMyanglish(text);
    setInput(translated);
  };

  return (
    <div className="flex flex-col items-center h-screen ">
      <div className="fixed top-4 right-6 text-2xl font-bold text-gray-600 z-10">
        <a href="">
          {" "}
          <img
            src="\public\images\logoWhite.png"
            alt="logo"
            className="w-10 hover:cursor-pointer"
          />
        </a>{" "}
      </div>
      <div className="font-Nunito mt-10 h-[5%] sm:text-2xl">
        <span className="font-Oswald text-3xl sm:text-5xl">M</span>yanglish to{" "}
        <span className="font-Oswald text-3xl sm:text-5xl">B</span>urmese
      </div>

      <div className="flex flex-col sm:flex-row items-center mt-5 w-[80%] h-[70%] gap-8 ">
        {isReversed ? (
          <>
            <BurmeseBox
              burmese={output}
              onChange={handleBurmeseChange}
              editable={true}
              onClear={clearText}
            />
            <MyanglishBox
              myanglish={input}
              onChange={handleMyanglishChange}
              editable={false}
              onClear={clearText}
            />
          </>
        ) : (
          <>
            <MyanglishBox
              myanglish={input}
              onChange={handleMyanglishChange}
              editable={true}
              onClear={clearText}
            />
            <BurmeseBox
              burmese={output}
              onChange={handleBurmeseChange}
              editable={false}
              onClear={clearText}
            />
          </>
        )}
      </div>

      <div className="flex flex-col bg-gray-100 w-full h-[20%]">
        <div className="flex flex-row w-full h-[60%] items-center">
          {/* Left side (Always Myanglish or Burmese, Select Language stays) */}
          <div className="flex flex-col w-[40%] items-center justify-center">
            {isReversed ? "Burmese" : "Myanglish"}
            <span className="text-[12px]">(Select language)</span>
          </div>

          {/* Arrow icon in the middle */}
          <div className="w-[20%] flex justify-center">
            <FaArrowsRotate
              className="hover:cursor-pointer"
              onClick={() => setIsReversed(!isReversed)}
            />
          </div>

          {/* Right side (Opposite of left) */}
          <div className="w-[40%] flex justify-center items-center">
            {isReversed ? "Myanglish" : "Burmese"}
          </div>
        </div>

        <div className="flex justify-center items-center ">
          {/* <a
            href="https://my-portfolio-henna-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-80 transition-transform duration-200 flex flex-row items-center gap-2=1"
          >
            
          </a> */}
        </div>

        <div className="text-center text-gray-600 text-sm py-2">
          © 2025 Myanglish Translator
        </div>
      </div>
    </div>
  );
}

export default App;
