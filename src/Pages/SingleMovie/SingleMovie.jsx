import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { getDetails } from "../../Store/details";
import {Loading , Error} from "../../Utilies/index";
import { useParams } from "react-router-dom";
import noImage from "../../assets/noimage.png";
import styles from "./SingleMovies.module.scss";

const SingleMovie = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const img_URL_base = `https://image.tmdb.org/t/p/w500`; 

  const {isLoading , isError , movie} = useSelector((state) => state.detailsSlice);

  useEffect(() =>{
    dispatch(getDetails({category: "movie" , id: params.id}))
  }, [dispatch]);

  console.log(params.id ,isError , isLoading , movie);

  if(isLoading) {
    return <Loading/>
  }

  if(isError) {
    return <Error/>
  }

  return (
    <>
      {
        movie && <section id={styles.movie_details} className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className={styles.img}>
                <img src={movie.poster_path?  `${img_URL_base}${movie.poster_path}` : noImage} alt="" className={`img-fluid`}/>
              </div>
            </div>
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className={styles.details}>
                <h3 className={styles.title}>{movie.title}</h3>
                <div className={styles.geners}>
                  {movie.genres ? (movie.genres.map((genre) => (
                    <span key={genre.id} className={styles.g_btns}>
                      {genre.name}
                    </span>
                  ))
                  ) : (
                    <span>No genres available</span>
                  )}
                </div>
                <p className={styles.vote}><span className="fw-bold">Vote :</span>{movie.vote_average}</p>
                <p className={styles.popularity}><span className="fw-bold">Popularity :</span>{movie.popularity}</p>
                <p className={`${styles.date} pb-2`}><span className="fw-bold">Release Date :</span>{movie.release_date}</p>
                <p className={styles.overview}><span className="fw-bold">OverView :</span>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      }
    </>
  )
}


export default SingleMovie;
