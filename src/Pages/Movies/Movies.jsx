import { useEffect } from "react";
import { Progallery , Title , Scrollgallery  , Loading , Gallery , Error} from "../../Utilies";
import { useSelector , useDispatch } from "react-redux";
import {getNowPlaying , getUpComing , getTrending , getTopRated , getAnimeMovies} from "../../Store/fetchData";

const Movies = () => {

  const dispatch = useDispatch();

  const {nowPlayingMovies , comingSoonMovies , trendingMovies , trendingAnime , topRatedMovies , isLoading , error} = useSelector((state) => state.dataMovies);

  useEffect(() =>{
    dispatch(getNowPlaying());
    dispatch(getUpComing());
    dispatch(getTrending(`movie`));
    dispatch(getTopRated("movie"));
    dispatch(getAnimeMovies());
  }, [dispatch]);

  if(error) {
    return <Error/>
  }

  return (
    <>
      {isLoading ? <Loading/> :
        <section id="movies-page">
          <div className="container">
            <Title txt = "Top Rated Movies"/>
            <Scrollgallery movies = {topRatedMovies} type = "movie"/>
            <Title txt = "Up Coming Movies" />
            <Progallery  comingSoonMovies = {comingSoonMovies} type = "movie"/>
            <Title txt = "Now Playing Movies" />
            <Scrollgallery movies = {nowPlayingMovies} type = "movie"/>
            <Title txt = "Trending Movies" />
            <Gallery movies = {trendingMovies} type = "movie"/>
            <Title txt = "Trending Anime Movies"/>
            <Gallery movies = {trendingAnime} type = "movie"/>
          </div>
        </section>}
    </>
  )
}

export default Movies;