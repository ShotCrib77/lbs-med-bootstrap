export default function ProjectsWallpaper({text, projectsWallpaperImageSm, projectsWallpaperImageMd, projectsWallpaperImageLg, projectsWallpaperImageXl}) {
  return(
      <div className="row">
        <div className="d-flex justify-content-center align-items-center col-12">
          <picture className="col-12">
            <source srcSet={projectsWallpaperImageXl} media="(min-width: 2048px)"/>
            <source srcSet={projectsWallpaperImageLg} media="(min-width: 1025px)"/>
            <source srcSet={projectsWallpaperImageMd} media="(min-width: 420px)"/>
            <img className="col-12 img-fluid" src={projectsWallpaperImageSm} alt="Elevprojekt"/>
          </picture> 
          <h1 className="bg-semi-transparent text-lbs-black text-center mx-4 p-3 p-lg-4 rounded-5 fw-bolder responsive-heading display-md-5 position-absolute">{text}</h1>
        </div>
      </div>
  )
};