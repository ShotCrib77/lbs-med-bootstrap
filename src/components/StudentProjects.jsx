import studentProjectsWallpaper from "../images/elevprojekt.png";
import "../App.css"

export default function StudentProjects() {
  return(
    <section className="container-12">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <img className="img-fluid col-lg-12" src={studentProjectsWallpaper} alt="Elevprojekt"/>
          <h1 className="text-white font-weight-bold position-absolute">LBS Stockholm Södras Elevprojekt!</h1>
        </div>
      </div>
    </section>
  )
};