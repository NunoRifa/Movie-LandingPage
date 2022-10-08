import logo from "../../img/NetflixLogo.svg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__personal">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Navbar;
