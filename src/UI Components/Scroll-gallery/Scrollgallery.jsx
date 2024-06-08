import styles from "./Scrollgallery.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import noImage from "../../assets/noimage.png";
import { Link } from "react-router-dom";


export default function Scrollgallery(props) {

    const {movies , type} = props;
    const img_URL_base = `https://image.tmdb.org/t/p/w500`;
    const showList = movies;

    let typeDetails;

    if (type == "movie") {
        typeDetails = "movieDetails";
    } else if (type == "tv") {
        typeDetails = "tvDetails";
    }

  return (
    <>
        <div id={`${styles.scroll_gallery}`}>
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    480: { slidesPerView: 3, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 20 },
                    1024: { slidesPerView: 6, spaceBetween: 20 },
                }}
                loop = {true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    showList.map((show, i) => 
                    <>
                        <SwiperSlide key={i}>
                            <Link className="text-decoration-none" to={`/${typeDetails}/${show.id}`}>
                                <div className={`${styles.movie_card} position-relative rounded-3`}>
                                    <div className={`${styles.img}`}>
                                        <img src={show.poster_path?  `${img_URL_base}${show.poster_path}` : noImage} alt="" className={`img-fluid`} />
                                    </div>
                                    <h2 className={`${styles.title} p-3 text-center`}>{show.title ? show.title : show.name}</h2>
                                    <div className={`${styles.rating} rounded-3 text-center`}>
                                        <span className={`${styles.num}`}>{Math.round(show.vote_average)}</span>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </>
                    )
                }
                
            </Swiper>
        </div>
    </>
  )
}
