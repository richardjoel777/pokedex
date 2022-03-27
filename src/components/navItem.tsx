type navProps = {
  text: string;
};

const NavItem = ({ text }: navProps) => {
  return (
    <div
      className="
          text-center
          text-light_blue
          text-sm
          font-bold
          w-36
          cursor-pointer
          h-16
          relative
          "
    >
      <div className="absolute h-16 bottom-0 left-0 text-center rounded-t-lg py-4 w-36 border-light_blue transition-all duration-300 ease-linear shadow-nav hover:shadow-navHover hover:text-black">
        {text}
      </div>
    </div>
  );
};

export default NavItem;
