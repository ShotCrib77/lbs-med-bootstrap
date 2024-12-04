export default function ProgramButton({ program, bgColorClass, iconSource, isActive, toggleActive }) {
  const handleScroll = () => {
    const section = document.querySelector("#student-projects");
    section.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleButtonClick = () => {
    toggleActive(program);
    handleScroll()
  };
  
  return (
    <>
      <button
        className={`btn fs-5 p-2 text-lbs-black program-btn ${bgColorClass} col-12 rounded-0
        ${isActive ? `fw-bold text-white bg-active` : ""}`}
        onClick={handleButtonClick}
      >
        {program} <img className={`max-w-40 program-image ${
          isActive ? `filter-100` : ""}`} src={iconSource} alt={`${program} icon`}/>
      </button>
    </>
  );
}