import { Route , Routes } from "react-router-dom";
import { Home , SingleMovie, SingleTv , Movies, TVs,  Navbar , Footer , Search} from "./Utilies";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="home" element={<Home/>}></Route>
      <Route path="movies" element={<Movies/>}></Route>
      <Route path="search" element={<Search/>}></Route>
      <Route path="tvs" element={<TVs/>}></Route>
      <Route path="/movieDetails">
        <Route path=":id" element={<SingleMovie/>}/>
      </Route>
      <Route path="/tvDetails">
        <Route path=":id" element={<SingleTv/>}/>
      </Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
