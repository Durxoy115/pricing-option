import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Link from "../Link/Link";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:id", name: "Profile" },
    { id: 6, path: "*", name: "Not Found" },
  ];

  return (
    <nav>
      {/* Menu Icon for Mobile */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <MdClose /> : <IoMenu />}
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex absolute md:static bg-white  md:w-auto transition-all duration-300 ease-in-out ${
          open ? "block" : "hidden"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
