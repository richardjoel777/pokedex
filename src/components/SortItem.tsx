type Props = {
  text: string;
};

const SortItem = ({ text }: Props) => {
  return (
    <div className="w-full py-1 h-auto text-center hover:bg-white hover:bg-opacity-40">
      {text}
    </div>
  );
};

export default SortItem;
