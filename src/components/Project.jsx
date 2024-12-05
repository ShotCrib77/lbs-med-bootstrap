import ImageFiller from 'react-image-filler';

export default function Project({ projectImgSrc, projectDescription })  {
  return (
    <div className="mx-4 my-3 d-flex flex-column">
      {projectImgSrc ? (<img className="mb-1" src={projectImgSrc} alt="Kentle" />) : (<ImageFiller className="mb-1" width={300} height={250} />)}
      <span className="bg-semi-transparent-grey p-2 rounded-4 text-center max-w-300">{projectDescription}</span>
    </div>
  );
};