import Film from "components/Film";
import Slick from "components/Slick";
import { Movie } from "interfaces/movie";
import Footer from "pages/Footer";
import Header from "pages/Header";
import HomeCarousel from "pages/HomeCarousel";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "slices/movies";
import { AppDispatch, RootState } from "store";
import Banner from "../Banner";
import HomeMenu from "./HomeMenu";
import { showingMovie, comingMovie } from "slices/movies";
import styleSlick from "components/Slick/slick.module.css";

const Home: React.FC = () => {
  const { movies, isComingMovie, isShowingMovie } = useSelector(
    (state: RootState) => state.movies
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  const bindingMovies = () => {
    const movieCartList = movies.map((item, index) => {
      return <Film key={index} movie={item}></Film>;
    });
    return movieCartList;
  };
  const handleShowingMovie = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(showingMovie(movies));
  };
  const handleComingMovie = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(comingMovie(movies));
  };
  const activeClassShowingMovie =
    isShowingMovie === true ? "activeMovie" : "deactiveMovie";
  const activeClassComingMovie =
    isComingMovie === true ? "activeMovie" : "deactiveMovie";
  return (
    <div>
      <HomeCarousel />
      <section className=" bg-gray-200 pt-2">
        <div className="type-film-btn my-5">
          <button
            type="button"
            className={`mx-8 px-16 py-3 font-semibold rounded border-black  ${styleSlick[activeClassShowingMovie]}`}
            onClick={handleShowingMovie}
          >
            Phim đang chiếu
          </button>
          <button
            type="button"
            className={`px-16 py-3 font-semibold rounded  ${styleSlick[activeClassComingMovie]}`}
            onClick={handleComingMovie}
          >
            Phim sắp chiếu
          </button>
        </div>

        <div className="container ">
          <Slick movies={movies}></Slick>
        </div>

        {/* <div className="grid md:grid-cols-4 xs:grid-cols-1  gap-20 container">
        {bindingMovies()}
      </div> */}

        <HomeMenu />
        <hr className="mx-20 leading-3 decoration-sky-500" />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
