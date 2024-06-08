import { useEffect } from "react";
import { Progallery , Title , Scrollgallery  , Loading , Gallery , Error} from "../../Utilies";
import { useSelector , useDispatch } from "react-redux";
import { getTrending , getTopRated , getTredingTvs , getAnimeShows } from "../../Store/fetchData";


const TVs = () => {

  const dispatch = useDispatch();

  const {  trendingMovies , topRatedMovies , trendingTvShows , trendingAnimeShows , isLoading , error} = useSelector((state) => state.dataMovies);

  useEffect(() =>{
    dispatch(getTrending(`tv`));
    dispatch(getTopRated("tv"));
    dispatch(getTredingTvs());
    dispatch(getAnimeShows())
  }, [dispatch]);

  if(error) {
    return <Error/>
  }

  return (
    <>
      {
        isLoading ? <Loading/> :
        <section id="Tv-shows">
          <div className="container">
            <Title txt = "Top Rated TV Shows" />
            <Progallery comingSoonMovies = {topRatedMovies} type = "tv" />
            <Title txt = "Popular Tv Shows" />
            <Gallery movies = {trendingTvShows} type = "tv"/>
            <Title txt = "Trending Tv Shows" />
            <Scrollgallery movies = {trendingMovies} type = "tv"/>
            <Title txt = "Trending Animes Shows" />
            <Gallery movies = {trendingAnimeShows} type = "tv" />
          </div> 
        </section>
      }
    </>
  )
}

export default TVs;
