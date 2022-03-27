import { useState } from "react";

type Props = {
  text: string;
};

export const AreaItem = ({ text }: Props) => {
  const [selected, setselected] = useState(false);
  return (
    <div
      onClick={() => {
        setselected((prevState) => !prevState);
      }}
      className={`text-center select-none text-lg border-2 border-white py-1 rounded-full cursor-pointer ${
        selected ? "text-black bg-white" : "text-white"
      }`}
    >
      {text}
    </div>
  );
};
