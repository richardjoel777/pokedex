import { Ability } from "./Ability";
import Area from "./Area";
import NumLimit from "./NumLimit";
import ResetSearch from "./ResetSearch";
import { Type } from "./Type";

type Iprops = {
  isArrow: boolean;
  setIsArrow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ExpAdvancedSearch = ({ isArrow, setIsArrow }: Iprops) => {
  return (
    <div className="mt-6 space-y-6 w-11/12 mx-auto shadow-blue rounded-lg border-2 border-text_primary flex flex-col items-center px-14 py-6 space-y-2 space-x-4 bg-dark_blue bg-opacity-50">
      <div className="flex w-full h-auto text-white space-x-8">
        <Type></Type>
        <div className="w-1/2 flex flex-col">
          <Ability></Ability>
          <NumLimit></NumLimit>
        </div>
      </div>
      <ResetSearch></ResetSearch>
      <div
        className="text-shadow"
        onClick={() => {
          setIsArrow((prevState) => !prevState);
        }}
      >
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
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>
      <div className="text-white text-xl sec-text-shadow">
        Hide Advanced Search
      </div>
    </div>
  );
};
