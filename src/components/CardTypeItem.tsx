type Iprops = {
  color: string;
  text: string;
};

export default function CardTypeItem({ text, color }: Iprops) {
  return (
    <div
      className={`text-center select-none text-lg text-black py-1 rounded-3xl cursor-pointer ${color}`}
    >
      {text}
    </div>
  );
}
