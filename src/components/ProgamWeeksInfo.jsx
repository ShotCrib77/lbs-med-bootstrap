import LbsButton from "./LbsButton";

export default function ProgamWeeksInfo() {
  const handleScroll = () => {
    const section = document.querySelector("#projects");
    section.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
      <div className="row justify-content-evenly align-items-center justify-content-center flex-wrap p-section bg-lbs-black text-white">
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <img className="col-8 col-md-12 image-fluid" src="https://lbs.se/wp-content/uploads/sites/21/2023/06/lbs-kreativa-gymnasiet-202304-600x600.jpg" alt="Bild av glada elever"/>
        </div>

        <div className="col-8 col-md-4 text-LBS-black">
          <h1 className="fw-bolder fs-1 my-3 mt-md-0">Programveckorna – Kreativitet i samspel</h1>
          <p>
            Under programveckorna på LBS Kreativa Gymnasiet Stockholm Södra möts elever från olika program för att skapa tillsammans. Oavsett vad du läser arbetar eleverna mot gemensamma mål, som spelprototyper, kortfilmer eller hemsidor i mindre grupper.
            <br/> <br/>
            Det är en chans att använda sina kunskaper, lära av andra och uppleva hur kreativt samarbete fungerar i praktiken. Programveckorna förstärker gemenskapen och förbereder dig för framtiden i kreativa branscher. Här möts idéer och verklighet – och magi skapas!
          </p>
          <LbsButton text="Se tidigare programveckor" func={handleScroll}/>
        </div>
      </div>
  );
};