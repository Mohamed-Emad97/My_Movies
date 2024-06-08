import Styles from "./Navbar.module.scss";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className={`navbar-brand fs-3 ${Styles.logo}`} to={"home"}>Movies</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className={`fa-solid fa-bars ${Styles.link}`}></i>
            </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className={`nav-link ${Styles.link}`} to="home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${Styles.link}`} to="movies">Movies</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${Styles.link}`} to="tvs">Tv Shows</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${Styles.link}`} to="search">Browse Movies</Link>
                  </li>
                </ul>
              </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar;