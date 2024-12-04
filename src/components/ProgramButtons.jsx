import ProgramButton from "./ProgramButton";

import awai_icon from "../images/awai_icon.png"
import su_icon from "../images/su_icon.png"
import sg_icon from "../images/sg_icon.png"
import gd_icon from "../images/gd_icon.png"
import ff_icon from "../images/ff_icon.png"
import mb_icon from "../images/mb_icon.png"

export default function ProgramButtons({ setCurrentActiveProgram, currentActiveProgram }) {
  const programs = [
    { name: "App/Webb & AI", icon: awai_icon, bgColorClass: "bg-lbs-green" },
    { name: "Spelutveckling", icon: su_icon, bgColorClass: "bg-lbs-purple" },
    { name: "Spelgrafik", icon: sg_icon, bgColorClass: "bg-lbs-yellow-secondary" },
    { name: "Grafisk Design", icon: gd_icon, bgColorClass: "bg-lbs-orange" },
    { name: "Foto/Film", icon: ff_icon, bgColorClass: "bg-lbs-pink" },
    { name: "Media Beteende", icon: mb_icon, bgColorClass: "bg-lbs-blue" },
  ];

  const toggleActive = (program) => {
    setCurrentActiveProgram((prevState) =>
      Object.fromEntries(
        Object.entries(prevState).map(([key]) => [key, key === program])
      )
    );
  };

  return (
    <div className="row">
      {programs.map(({ name, icon, bgColorClass }) => {
        return (
          <ProgramButton
            key={name}
            program={name}
            bgColorClass={bgColorClass}
            iconSource={icon}
            isActive={currentActiveProgram[name]}
            toggleActive={() => toggleActive(name)}
          />
        );
      })}
    </div>
  );
};