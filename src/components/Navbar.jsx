import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
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
              <a className="nav-link active" aria-current="page" href="#">
                Hem
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Program
              </a>
            </li>
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Våra Elevprojekt
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Elevprojekt
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Programveckor
                  </a>
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