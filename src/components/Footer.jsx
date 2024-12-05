import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container-fluid bg-lbs-black justify-content-center flex-column align-items-center p-5">
      <div className="row justify-content-center">
        <img className="col-12 max-w-200 img-fluid" src="https://lbs.se/wp-content/uploads/2023/04/lbs-logo-white2.gif" />
      </div>

      <div className="row justify-content-center my-4">
        <hr className="col-12 col-md-6 text-white border-3" />
      </div>

      <div className="row justify-content-center">
        <div className="col-6 d-flex justify-content-center">
          <a href="https://www.facebook.com/LBSKreativaGymnasiet" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={50} style={{ color: "#f6f6f6"}} />
          </a>
          <a className="mx-5" href="https://www.youtube.com/@LBSKreativaGymnasiet" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={50} style={{ color: "#f6f6f6"}} />
          </a>
          <a href="https://www.instagram.com/lbs_kreativa_gymnasiet/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={50} style={{ color: "#f6f6f6"}} />
          </a>
        </div>
      </div>

      <div className="row justify-content-center my-4">
        <hr className="col-12 col-md-6 text-white border-3" />
      </div>

      <div className="pages">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <h4 className="nav-link text-white fs-5 fw-bold" to="/programs">
              Vår skola
            </h4>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <Link className="nav-link text-white" to="/programs">
              Program
            </Link>
          </div>
        </div>

        <div className="row justify-content-center my-3">
          <div className="col-12 col-md-6 text-center">
            <Link className="nav-link text-white" to="/projectweeks">
              Projektveckorna
            </Link>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <Link className="nav-link text-white" to="/studentprojects">
              Elevprojekt
            </Link>
          </div>
        </div>
      </div>

      <div className="row justify-content-center my-4">
        <hr className="col-12 col-md-6 text-white border-3" />
      </div>

      <div className="organization">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <h4 className="nav-link text-white fs-5 fw-bold" to="/programs">
              Organisationen
            </h4>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <Link className="nav-link text-white" to="/">
              Kontakta oss
            </Link>
          </div>
        </div>

        <div className="row justify-content-center my-3">
          <div className="col-12 col-md-6 text-center">
            <Link className="nav-link text-white" to="/">
              En del av AcadeMedia
            </Link>
          </div>
        </div>
      </div>
      
      <div className="row justify-content-center my-4">
        <hr className="col-12 col-md-6 text-white border-3" />
      </div>

      <div className="row justify-content-center my-3">
          <div className="col-12 col-md-6 text-center text-white">
            <span><i>Vi använder cookies för att mäta trafiken på hemsidan och för statistik. Informationen som samlas in är anonym.</i></span>
          </div>
        </div>


    </footer>
  );
};