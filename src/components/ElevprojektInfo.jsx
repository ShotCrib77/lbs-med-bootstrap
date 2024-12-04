import LbsButton from "./LbsButton";

export default function ElevprojektInfo() {
  const handleScroll = () => {
    const section = document.querySelector("#student-projects");
    section.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
      <div className="row justify-content-evenly align-items-center justify-content-center flex-wrap p-section bg-lbs-black">
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <img className="col-8 col-md-12 image-fluid" src="https://www.gymnasieguiden.se/files/attachment/file/5455/lbsgymguide6.jpg" alt="Bild av glada elever"/>
        </div>

        <div className="col-8 col-md-4 text-white">
          <h1 className="fw-bolder fs-1 my-3 mt-md-0">Elevprojekt på LBS</h1>
          <p>
            Välkommen till vår samling av elevprojekt – en plats där gymnasieelever delar sina idéer, kreativitet och hårda arbete. Här hittar du en variation av projekt från våra gymnasiearbeten, skapade inom olika ämnen och program.
            <br/><br/>
            Syftet med elevprojekten är att ge elever möjlighet att fördjupa sig i ett ämne som intresserar dem, lösa problem eller skapa något nytt, samtidigt som de utvecklar viktiga färdigheter inför framtiden.
            <br/><br/>
            Vi är stolta över att visa upp dessa projekt, som inte bara reflekterar våra elevers engagemang och ambitioner, utan också deras förmåga att tänka kritiskt och skapa med både hjärta och hjärna. Utforska, inspireras och lär dig mer om det fantastiska arbete som sker på vår skola!
          </p>
          <LbsButton text="Se alla Elevarbeten!" func={handleScroll}/>
        </div>
      </div>
  );
};