import { useState } from "react";
import ExpSort from "./ExpSort";

const Sort = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="mt-6 flex w-11/12 mx-auto justify-end relative">
      <div
        onClick={() => setExpand((newValue) => !newValue)}
        className="w-2/5 onClick={() => setExpand((newValue) => !newValue)} select-none space-y-4 p-6 flex flex-col text-lg shadow-blue rounded-lg border-2 border-text_primary bg-dark_blue bg-opacity-50 text-white px-8 py-2 cursor-pointer"
      >
        <div className="flex items-center space-x-4 justify-center text-center">
          <div>Lowest Number(First)</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {expand && <ExpSort></ExpSort>}
      </div>
    </div>
  );
};

export default Sort;
