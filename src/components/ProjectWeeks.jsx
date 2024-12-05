import ProgamWeeksInfo from "./ProgamWeeksInfo";
import ProgamWeeksContainerAWGD from "./ProgramWeeksContainer";
import ProjectsWallpaper from "./ProjectsWallpaper";

import projectWeeksWallpaperImageLg from "../images/1920projektVeckorna.png"
import projectWeeksWallpaperImageMd from "../images/1024projektVeckorna.png"
import projectWeeksWallpaperImageSm from "../images/420projektVeckorna.png"

export default function ProjectWeeks() {
  return (
    <section className="container-fluid">

      <ProjectsWallpaper text={"LBS Stockholms Södras Projektveckor"} projectsWallpaperImageLg={projectWeeksWallpaperImageLg} projectsWallpaperImageMd={projectWeeksWallpaperImageMd} projectsWallpaperImageSm={projectWeeksWallpaperImageSm} />

      <ProgamWeeksInfo />

      <section className="p-section bg-lbs-black text-white d-flex flex-column align-items-center mx-0" id="projects">
        <div className="row justify-content-center">
          <h1 className="col-10 text-center mb-5 fw-bold">Programveckorna - AW&#8288;/&#8288;AI&nbsp;och&nbsp;GD</h1> {/*AW&#8288;/&#8288;AI&nbsp;och&nbsp;GD -> Gör så att det hänger ihop med varandra*/}
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          <div className="row justify-content-center mb-5">
            <ProgamWeeksContainerAWGD 
              year="2024" 
              projectTheme="Mänskliga&nbsp;Rättigheter" 
              mainPageLink="http://humanrights.lbsforsustainability.se/home" 
            />
          </div>

          <div className="row justify-content-center">
            <ProgamWeeksContainerAWGD 
              year="2023" 
              projectTheme="Hållbarhet" 
              mainPageLink="https://lbsforsustainability.se/sustainability2023/pages/home"
            />
          </div>
        </div>
      </section>
    </section>
  ); 
};