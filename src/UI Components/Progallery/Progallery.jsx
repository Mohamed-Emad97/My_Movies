import styles from "./Progallery.module.scss";
import noImage from "../../assets/noimage.png";
import { Link } from "react-router-dom";


const Progallery = (props) => {

    const { comingSoonMovies , type } = props;
    const moviesList = [ ...comingSoonMovies, ...comingSoonMovies];
    const img_URL_base = `https://image.tmdb.org/t/p/w500`; 
    
    let typeDetails;

    if (type == "movie") {
        typeDetails = "movieDetails";
    } else if (type == "tv") {
        typeDetails = "tvDetails"
    }



  return (
    <>
        <section id={styles.gallery_scroll}>
                <div className={`${styles.scroll_contanier}`}>
                    <div className={`${styles.scroll_inner}`}>
                        {
                            moviesList.map((movie , i) => (
                                <>
                                <Link to={`/${typeDetails}/${movie.id}`}>
                                    <div key={i} className={`${styles.movie_card} position-relative`}>
                                        <img src={movie.poster_path?  `${img_URL_base}${movie.poster_path}` : noImage} alt="" className="" />
                                        <div className={`${styles.caption} p-2`}>
                                            <h2 className={`${styles.title} h6`}>{movie.title ? movie.title : movie.name}</h2>
                                            <span className={`${styles.release_date}`}>{movie.release_date}</span>
                                        </div>
                                    </div>
                                </Link>
                                </> 
                            )) 
                        }
                    </div>
                </div>
        </section>
    </>
  )
}

export default Progallery;