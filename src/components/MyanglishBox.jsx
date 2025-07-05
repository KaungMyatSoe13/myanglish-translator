import ClearButton from "./ClearButton";
import CopyButton from "./CopyButton";

export default function MyanglishBox({
  myanglish,
  onChange,
  editable,
  onClear,
}) {
  return (
    <div className="bg-white rounded-md p-2 shadow-sm w-full h-[45%] sm:h-[75%] flex flex-col">
      <span className="text-[13px] text-gray-500 underline">Myanglish</span>
      <textarea
        value={myanglish}
        onChange={editable ? onChange : undefined}
        readOnly={!editable}
        placeholder="Mingalar par..."
        className="text-xl text-black h-[85%] mt-2"
      />
      <hr className="border-t border-gray-300 mt-2" />
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex items-center gap-2">
          {editable && <ClearButton onClick={onClear} />}
        </div>
        <CopyButton textToCopy={myanglish} />
      </div>
    </div>
  );
}
