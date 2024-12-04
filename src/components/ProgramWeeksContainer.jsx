import LbsButton from "./LbsButton";

export default function ProgamWeeksContainerAWGD({ year, projectTheme, mainPageLink }) {
  const openLink = (url) => {
    window.open(url)
  };
  
  return (
      <div className="row d-flex flex-column align-items-center">
        <h2 className="col-5 col-md-12 fw-bold text-center mb-4">{year} - {projectTheme}</h2>


        <div className="ratio ratio-4x3 col-12 col-md-5 iframe-container">
          <iframe
            src={mainPageLink}
            title="App och Webbutveckling samt Grafisk designs programveckohemsidor"
          ></iframe>
        </div>
        <LbsButton text={"Se hela sidan"}  func={() => openLink(mainPageLink)} /> 
      </div>
  );
};