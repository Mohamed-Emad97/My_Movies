import Styles from "./Slider.module.scss";

export default function Slider(props) {

    const moviesList = props.nowPlayingMovies;
    const img_URL_base = `https://image.tmdb.org/t/p/w500`;
 
  return (
    <>
            <section id={Styles.playing_now}>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={`${img_URL_base}${moviesList[0]?.backdrop_path}`} className="d-block w-100" alt="img-1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{moviesList[0]?.title}</h5>
                        <p>{moviesList[0]?.overview}</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={`${img_URL_base}${moviesList[1]?.backdrop_path}`} className="d-block w-100" alt="img-2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{moviesList[1]?.title}</h5>
                        <p>{moviesList[1]?.overview}</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={`${img_URL_base}${moviesList[2]?.backdrop_path}`} className="d-block w-100" alt="img-3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{moviesList[2]?.title}</h5>
                        <p>{moviesList[2]?.overview}</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    </>
  )
}

