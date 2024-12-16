import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar navbar-expand-lg position-sticky top-0 sticky-navbar drop-shadow navbar-dark bg-lbs-black p-3">
      <div className="container-fluid">
        <img className="navbar-brand img-fluid nav-logo" src="https://lbs.se/wp-content/uploads/2023/04/lbs-logo-white2.gif"/>

        <button
          className="navbar-toggler border-0 no-outline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          {isExpanded ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className="collapse navbar-collapse justify-content-center position-relative"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav text-center">
            <li className="nav-item mx-2">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                Hem
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link ${location.pathname === "/programs" ? "active" : ""}`} to="/programs">
                Program
              </Link>
            </li>
            <li className="nav-item dropdown mx-2">
              <Link
                className={`nav-link dropdown-toggle ${
                  location.pathname.includes("/studentprojects") ||
                  location.pathname.includes("/projectweeks")
                    ? "active"
                    : ""
                }`}
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Våra Elevprojekt
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className={`dropdown-item ${location.pathname === "/studentprojects" ? "active" : ""}`} to="/studentprojects">
                    Elevprojekt
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${location.pathname === "/projectweeks" ? "active" : ""}`} to="/projectweeks">
                    Programveckor
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block" style={{ width: "175px" }}></div> {/* Samma width some loggan för att centrera Hem/Program/Elevprojekt i mitten*/}
      </div>
    </nav>
  );
}