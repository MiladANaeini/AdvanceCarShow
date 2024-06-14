import { NavLink } from "react-router-dom";
import MBLogo from "../../assets/images/Mercedes-Benz-Logo-19331.png";

const TopNav = () => {
  return (
    <header className="flex items-center justify-between text-sm text-white font-normal p-1 px-5 w-screen leading-10 shadow-xl absolute z-50">
      <NavLink>
        <img src={MBLogo} alt="MBLogo" width={60} />
      </NavLink>
      <NavLink>Search</NavLink>
    </header>
  );
};

export default TopNav;
