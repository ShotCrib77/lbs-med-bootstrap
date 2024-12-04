import projectsWallpaperImageSm from "../images/420elevprojektsBakgrundsbild.png"
import projectsWallpaperImageMd from "../images/1024elevprojektsBakgrundsbild.png"
import projectsWallpaperImageLg from "../images/1920elevprojektsBakgrundsbild.png"
import projectsWallpaperImageXl from "../images/4kelevprojektsBakgrundsbild.png"
import ProjectsWallpaper from "./ProjectsWallpaper"
import ElevprojektInfo from "./ElevprojektInfo"
import StudentProjectsContainer from "./StudentProjectsContainer"

// LBS Stockholm Södras Elevprojekt!
export default function StudentProjects() {
  return (
    <section className="container-fluid">

      <ProjectsWallpaper text={"LBS Stockholms Södras Elevprojekt!"} projectsWallpaperImageXl={projectsWallpaperImageXl} projectsWallpaperImageLg={projectsWallpaperImageLg} projectsWallpaperImageMd={projectsWallpaperImageMd} projectsWallpaperImageSm={projectsWallpaperImageSm} />

      <ElevprojektInfo />

      <StudentProjectsContainer />

    </section>
  ); 
};