export default function FirstComp() {
  return(
    <section className="container my-5">
      <header className="row bg-dark text-light text-center">
        <h1 className="col">Min första Bootstrapsida</h1>
      </header>

      <div className="row">
        <div className="col-sm-4 bg-secondary text-light">
          <h2>col-sm-4</h2>
          <p>
            bakgrund: bg-secondary <br/>
            text: tex-light
          </p>
        </div>

        <div className="col bg-info text-warning">
          <h2>col-sm-8</h2>
          <p>
            bakgrund: bg-info <br/>
            text: tex-warning
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 bg-success text-light">
          <h2>col-sm-3</h2>
          <p>
            bakgrund: bg-success <br/>
            text: tex-light
          </p>
        </div>

        <div className="col-sm-3 bg-light text-dark">
          <h2>col-sm-3</h2>
          <p>
            bakgrund: bg-light <br/>
            text: tex-dark
          </p>
        </div>

        <div className="col-sm-3 bg-success text-light">
          <h2>col-sm-3</h2>
          <p>
            bakgrund: bg-success <br/>
            text: tex-light
          </p>
        </div>

        <div className="col-sm-3 bg-light text-dark">
          <h2>col-sm-3</h2>
          <p>
            bakgrund: bg-light <br/>
            text: tex-dark
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-10 bg-dark text-light">
          <h2>col-sm-10</h2>
          <p>
            bakgrund: bg-dark <br/>
            text: tex-light
          </p>
        </div>

        <div className="col-sm-2 bg-danger text-info">
          <h2>col-sm-2</h2>
          <p>
            bakgrund: bg-danger <br/>
            text: tex-info
          </p>
        </div>
      </div>
    </section>
  )
}