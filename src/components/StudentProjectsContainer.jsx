import { PiPlaceholder, PiPlaceholderBold } from "react-icons/pi";
import ProgramButtons from "./ProgramButtons";
import { useState, useEffect } from "react";
import ImageFiller from 'react-image-filler';

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
        <div className="row">
          <div className="col-12 d-flex justify-content-around">
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-around">
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-around">
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-around">
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-around">
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
            <ImageFiller width={200} height={200} />
          </div>
        </div>
      </section>
    </section>
  );
}