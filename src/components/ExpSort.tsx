import SortItem from "./SortItem";

const ExpSort = () => {
  return (
    <div className="w-11/12 flex flex-col space-y-4 absolute top-full">
      <div className="w-11/12 border-2 border-light_blue"></div>
      <SortItem text="Lowest Number(First)"></SortItem>
      <SortItem text="Highest Number(First)"></SortItem>
      <SortItem text="Lowest Weight(First)"></SortItem>
      <SortItem text="Highest Weight(First)"></SortItem>
      <SortItem text="Lowest Height(First)"></SortItem>
      <SortItem text="Highest Height(First)"></SortItem>
    </div>
  );
};

export default ExpSort;
