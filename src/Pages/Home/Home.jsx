import { useEffect } from "react";
import { Progallery , Title , Slider , Loading , Gallery , Error} from "../../Utilies";
import { useSelector , useDispatch } from "react-redux";
import {getNowPlaying , getUpComing , getTrending , getTredingTvs} from "../../Store/fetchData";


export default function Home() {

  const dispatch = useDispatch();

  const {nowPlayingMovies , comingSoonMovies , trendingMovies , trendingTvShows , isLoading , error} = useSelector((state) => state.dataMovies);


  useEffect(() =>{
    dispatch(getNowPlaying());
    dispatch(getUpComing());
    dispatch(getTrending(`movie`));
    dispatch(getTredingTvs());
  }, [dispatch]);


  if(error) {
    return <Error/>
  }

  return (
    <>
      {isLoading  ? <Loading/> : (
        <>
          <section id="home">
            <Slider nowPlayingMovies = {nowPlayingMovies}/>
            <div className="container">
              <Title txt = {"Coming Soon Movies"}/>
              <Progallery comingSoonMovies = {comingSoonMovies} type = "movie"/>
              <Title txt = {"Trending Movies"}/>
              <Gallery movies = {trendingMovies}  type= "movie"/>
              <Title txt = {"Trending Tvs Shows"}/>
              <Gallery movies = {trendingTvShows} type = "tv"/>
            </div>
          </section>
        </>
      )}
    </>
  )
}
