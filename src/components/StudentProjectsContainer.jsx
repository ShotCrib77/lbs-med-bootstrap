import ProgramButtons from "./ProgramButtons";
import { useState, useEffect } from "react";
import  kentlePoster from "../images/kentle.png"
import Project from "./Project";
import programProjects from "./data";

export default function StudentProjectsContainer() {
  const [currentActiveProgram, setCurrentActiveProgram] = useState({
    "App/Webb & AI": false,
    "Spelutveckling": false,
    "Spelgrafik": false,
    "Grafisk Design": false,
    "Foto/Film": false,
    "Media Beteende": false,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentDisplayedProgram, setCurrentDisplayedProgram] = useState("Välj ett program!");

  useEffect(() => {
    const activeProgram = Object.entries(currentActiveProgram).find(
      ([, isActive]) => isActive
    );
    setCurrentDisplayedProgram(activeProgram ? activeProgram[0] : "Välj ett program!");
  }, [currentActiveProgram]);

  useEffect(() => {
    const projectsToDisplay = programProjects[currentDisplayedProgram] || [];
    const filtered = projectsToDisplay.filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [searchTerm, currentDisplayedProgram]);

  return (
    <section className="bg-white text-lbs-black p-section justify-content-center">
      <div className="row">
        <h1 className="col-12 text-center mb-5 fw-bold">Elevprojekt</h1>
      </div>

      <ProgramButtons
        setCurrentActiveProgram={setCurrentActiveProgram}
        currentActiveProgram={currentActiveProgram}
      />

      <div className="row" id="student-projects">
        <h2 className="text-lbs-black text-center my-5">{currentDisplayedProgram}</h2>
      </div>

      <div className="row search-width mx-auto mb-5">
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Sök på ett projekt..."
            className="form-control rounded-5 border-3 border-lbs-black"
          />
        </div>
      </div>

      <section className="projects-section d-flex flex-column gap-5">
        <div className="row justify-content-center">
          <div className="col-12 d-flex justify-content-center align-items-center flex-wrap">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
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