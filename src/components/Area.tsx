import { AreaItem } from "./AreaItem";

const Area = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="h-auto border-b-2 w-full border-light_blue pb-3 text-3xl text-light_blue">
        Area
      </div>
      <div className="my-5 w-full grid gap-3 grid-cols-7 grid-flow-row">
        <AreaItem text="Kanto"></AreaItem>
        <AreaItem text="Johto"></AreaItem>
        <AreaItem text="Hoenn"></AreaItem>
        <AreaItem text="Sinho"></AreaItem>
        <AreaItem text="Unova"></AreaItem>
        <AreaItem text="Kalos"></AreaItem>
        <AreaItem text="Alola"></AreaItem>
        <AreaItem text="Galar"></AreaItem>
      </div>
    </div>
  );
};

export default Area;
