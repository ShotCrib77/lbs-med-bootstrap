import ProgramButtons from "./ProgramButtons";
import { useState, useEffect } from "react";
import  kentlePoster from "../images/kentle.png"
import Project from "./Project";

export default function StudentProjectsContainer() {
  const [currentActiveProgram, setCurrentActiveProgram] = useState({
    "App/Webb & AI": false,
    "Spelutveckling": false,
    "Spelgrafik": false,
    "Grafisk Design": false,
    "Foto/Film": false,
    "Media Beteende": false,
  });

  const getActiveProgram = () => {
    const activeProgram = Object.entries(currentActiveProgram).find(
      ([, isActive]) => isActive
    );
    return activeProgram ? activeProgram[0] : "Välj ett program!";
  };

  const [currentDisplayedProgram, setCurrentDisplayedProgram] = useState("Välj ett program!");

  useEffect(() => {
    setCurrentDisplayedProgram(getActiveProgram());
  }, [currentActiveProgram]);

  const programProjects = {
    "App/Webb & AI": [
      { imgSrc: kentlePoster, description: "Musikquiz med Kent-tema" },
      { description: "App/Webb och AI-projekt 2" },
      { description: "App/Webb och AI-projekt 3" },
      { description: "App/Webb och AI-projekt 4" },
      { description: "App/Webb och AI-projekt 5" },
      { description: "App/Webb och AI-projekt 6" },
    ],
    "Spelutveckling": [
      { description: "Spelutvecklingsprojekt 1" },
      { description: "Spelutvecklingsprojekt 2" },
      { description: "Spelutvecklingsprojekt 3" },
      { description: "Spelutvecklingsprojekt 4" },
      { description: "Spelutvecklingsprojekt 5" },
      { description: "Spelutvecklingsprojekt 6" },
    ],
    "Spelgrafik": [
      { description: "Seplgrafikprojekt 1" },
      { description: "Seplgrafikprojekt 2" },
      { description: "Seplgrafikprojekt 3" },
      { description: "Seplgrafikprojekt 4" },
      { description: "Seplgrafikprojekt 5" },
      { description: "Seplgrafikprojekt 6" },
      { description: "Seplgrafikprojekt 7" },
      { description: "Seplgrafikprojekt 8" },
      { description: "Seplgrafikprojekt 9" },
      { description: "Seplgrafikprojekt 10" },
      { description: "Seplgrafikprojekt 11" },
      { description: "Seplgrafikprojekt 12" },
    ],
    "Grafisk Design": [
      { description: "Grafisk Designprojekt 1" },
      { description: "Grafisk Designprojekt 2" },
      { description: "Grafisk Designprojekt 3" },
      { description: "Grafisk Designprojekt 4" },
      { description: "Grafisk Designprojekt 5" },
      { description: "Grafisk Designprojekt 6" },
      { description: "Grafisk Designprojekt 7" },
      { description: "Grafisk Designprojekt 8" },
      { description: "Grafisk Designprojekt 9" },
      { description: "Grafisk Designprojekt 10" },
      { description: "Grafisk Designprojekt 11" },
      { description: "Grafisk Designprojekt 12" },
    ],
    "Foto/Film": [
      { description: "Foto/Filmprojekt 1" },
      { description: "Foto/Filmprojekt 2" },
      { description: "Foto/Filmprojekt 3" },
      { description: "Foto/Filmprojekt 4" },
    ],
    "Media Beteende": [
      { description: "Mediebeteendeprojekt 1" },
      { description: "Mediebeteendeprojekt 2" },
    ],
  };

  const projectsToDisplay = programProjects[currentDisplayedProgram] || [];

  return (
    <section className="bg-white text-lbs-black p-section justify-content-center">
      <div className="row">
        <h1 className="col-12 text-center mb-5 fw-bold">Elevprojekt</h1>
      </div>

      <ProgramButtons setCurrentActiveProgram={setCurrentActiveProgram} currentActiveProgram={currentActiveProgram}/>
  
      <div className="row" id="student-projects">
        <h2 className="text-lbs-black text-center my-5">{currentDisplayedProgram}</h2>
      </div>

      <section className="projects-section d-flex flex-column gap-5">
        <div className="row justify-content-center">
          <div className="col-12 d-flex justify-content-center align-items-center flex-wrap">
            {projectsToDisplay.length > 0 ? (
              projectsToDisplay.map((project, index) => (
                <Project
                  key={index}
                  projectImgSrc={project.imgSrc}
                  projectDescription={project.description}
                />
              ))
            ) : (
              <p className="text-center">Inga projekt att visa för detta program.</p>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};