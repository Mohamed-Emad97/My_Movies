import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { getDetails } from "../../Store/details";
import { useParams } from "react-router-dom";
import {Loading , Error} from "../../Utilies/index";
import noImage from "../../assets/noimage.png";
import styles from "./SingleTv.module.scss";

const SingleTv = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const img_URL_base = `https://image.tmdb.org/t/p/w500`; 

  const {isLoading , isError , tv} = useSelector((state) => state.detailsSlice);

  useEffect(() =>{
    dispatch(getDetails({category: "tv" , id: params.id}))
  }, [dispatch]);

  console.log(params.id ,isError , isLoading , tv);

  if(isLoading) {
    return <Loading/>
  }

  if(isError) {
    return <Error/>
  }

  return (
    <>
      {tv && <section id={styles.tv_details} className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className={styles.img}>
                <img src={tv.poster_path?  `${img_URL_base}${tv.poster_path}` : noImage} alt="" className={`img-fluid`}/>
              </div>
            </div>
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className={styles.details}>
                <h3 className={styles.title}>{tv.original_name}</h3>
                <div className={styles.geners}>
                  {tv.genres ? (tv.genres.map((genre) => (
                    <span key={genre.id} className={styles.g_btns}>
                      {genre.name}
                    </span>
                  ))
                  ) : (
                    <span>No genres available</span>
                  )}
                </div>
                <p className={styles.vote}><span className="fw-bold">Vote :</span>{tv.vote_average}</p>
                <p className={styles.popularity}><span className="fw-bold">Popularity :</span>{tv.popularity}</p>
                <p className={`${styles.date} pb-2`}><span className="fw-bold">First Air Date :</span>{tv.first_air_date}</p>
                <p className={styles.eps}><span className="fw-bold">Number Of Episodes :</span>{tv.number_of_episodes}</p>
                <p className={styles.seasons}><span className="fw-bold">Seasons :</span>{tv.number_of_seasons}</p>
                <p className={styles.overview}><span className="fw-bold">OverView :</span>{tv.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      }
    </>
  )
}

export default SingleTv;