import styles from "./Gallery.module.scss";
import noImage from "../../assets/noimage.png";
import { Link } from "react-router-dom";

export default function Gallery(props) {

    const { movies , type } = props;
    const showsList = movies.slice(0,12);
    const img_URL_base = `https://image.tmdb.org/t/p/w500`; 
    
    let typeDetails;

    if (type == "movie") {
        typeDetails = "movieDetails";
    } else if (type == "tv") {
        typeDetails = "tvDetails";
    }

  return (
    <>
        <section id={styles.gallery_grid}>
            <div className="row">
                {
                    showsList.map((movie , i)=> (
                        <>
                            <div key={i} className="col-lg-2 col-md-4 col-sm-6">
                                <Link to={`/${typeDetails}/${movie.id}`} className="text-decoration-none">
                                    <div className={`${styles.movie_card} position-relative rounded-3`}>
                                        <div className={`${styles.img}`}>
                                            <img src={movie.poster_path?  `${img_URL_base}${movie.poster_path}` : noImage} alt="" className={`img-fluid`} />
                                        </div>
                                        <h2 className={`${styles.title} p-3 text-center`}>{movie.title ? movie.title : movie.name}</h2>
                                        <div className={`${styles.rating} rounded-3 text-center`}>
                                            <span className={`${styles.num}`}>{Math.round(movie.vote_average)}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </>
                    ))
                }
            </div>
        </section>
    </>
  )
}
