import {useEffect , useState , useRef} from 'react';
import axios from 'axios';
import {Gallery} from "../../Utilies/index";
import styles from "./Search.module.scss";

export default function Search() {

    const [query, setQuery] = useState("");
    const  [results, setResults] = useState([]);
    const [category , setCategory] = useState("movie");
    const selectedCateogryRef = useRef();

    const API_KEY = import.meta.env.VITE_API_KEY;
    let baseUrl = `https://api.themoviedb.org/3/search/`;


    const getQueryTxt =  (e) => {
        setQuery(e.target.value);
    };

    const getSearchData = async (query) => {
        const selectedCateogry = selectedCateogryRef.current.value;
        setCategory(selectedCateogry);

        const {data} = await axios.get(`${baseUrl}${selectedCateogry}${API_KEY}&language=en-US&query=${query}`);

        setResults(data.results);
    }
    
    
    useEffect(() => {
        getSearchData(query);
    }, [query]);

  return (
    <>
        <section id={styles.search} className='py-5'>
            <div className="container">
                <h2 className='text-center fw-bolder'>Search for Movies or TV Shows</h2>
                <div className={`${styles.search_bar} d-flex justify-content-center align-items-center my-4`}>
                    <span className={`${styles.searchIcon}`}><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" name="search" value={query} onChange={getQueryTxt} className={styles.searchInput}/>
                    <select className={`${styles.selectInput}`} ref={selectedCateogryRef}>
                        <option value={'movie'}>Movies</option>
                        <option value={'tv'}>Tv Shows</option>
                    </select>
                </div>
                {
                    results && <Gallery movies = {results} type = {category}/>
                }
            </div>
        </section>
    </>
  )
}
