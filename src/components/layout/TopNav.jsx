import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <header className="flex items-center justify-between text-sm font-normal bg-white px-5 leading-10 shadow-xl">
      <NavLink>Home</NavLink>
      <NavLink>Search</NavLink>
    </header>
  );
};

export default TopNav;
