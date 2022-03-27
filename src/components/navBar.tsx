import { Link } from "react-router-dom";
import brandLogo from "../assets/brandLogo.png";
import NavItem from "./navItem";

const NavBar = () => {
  return (
    <div className="flex justify-center space-x-1 bg-primary px-6 py-2 fixed top-0 w-full z-30">
      <Link className="h-16 w-45 cursor-pointer self-start" to="/">
        <img src={brandLogo} alt="Pokemon" className="h-full" />
      </Link>
    </div>
  );
};

export default NavBar;
