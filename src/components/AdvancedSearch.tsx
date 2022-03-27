import { useState } from "react";
import { ColAdvancedSearch } from "./ColAdvancedSeach";
import { ExpAdvancedSearch } from "./ExpAdvancedSearch";

export const AdvancedSearch = () => {
  const [isArrow, setIsArrow] = useState(false);
  return (
    <div>
      {!isArrow && (
        <ColAdvancedSearch isArrow={isArrow} setIsArrow={setIsArrow} />
      )}
      {isArrow && (
        <ExpAdvancedSearch isArrow={isArrow} setIsArrow={setIsArrow} />
      )}
    </div>
  );
};
