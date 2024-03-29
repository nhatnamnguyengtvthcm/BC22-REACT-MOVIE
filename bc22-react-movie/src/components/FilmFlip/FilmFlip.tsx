import { Movie } from "interfaces/movie";
import React, { useCallback } from "react";
import { NavLink, useNavigate,Link, Outlet} from "react-router-dom";

import "./FilmFlip.css";

interface FilmFlipProps {
  movie: Movie;
}
const FilmFlip = (props: FilmFlipProps) => {
  const { movie } = props;
  const navigate = useNavigate();
  // const history = useHistory();
  const gotoDetails = (maPhim: number) => {
    console.log("nam");
    navigate(`detail/${maPhim}`);
  };
  // const gotoDetails = useCallback((maPhim: number) => navigate(`/detail/${maPhim}`), [navigate]);
  return (
    <div className="flip-card my-5">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={movie.hinhAnh}
            alt="Avatar"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <div
            style={{
              position: "absolute",
              top: "-300px",
              left: 0,
              backgroundColor: "rgba(0,0,0.9)",
            }}
          >
            <img
              src={movie.hinhAnh}
              alt="Avatar"
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div style={{ position: "absolute", top: "-200px", left: "100px" }}>
            <a href={movie.trailer}>
              <img
                src={require("assets/img/play-btn.png")}
                alt="SVG as an image"
                style={{ width: 100, height: 100 }}
                className="rounded-full cursor-pointer align-middle"
              ></img>
            </a>
          </div>
          <div
            style={{
              position: "absolute",
              top: "-100px",
              left: "0px",
              width: "100%",
            }}
          >
            <h2 className=" font-bold text-center text-white ">
              {movie.tenPhim}
            </h2>
          </div>
          {/* <div
            className="w-full h-full"
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div className="text-2xl mt-2 font-bold">{movie.tenPhim}</div>
            </div>
          </div>
          <h1>John Doe</h1>
          <p>Architect &amp; Engineer</p>
          <p>We love that guy</p> */}
        </div>
      </div>
      <div
        className=" bottom-0 w-full bg-red-500"
      >
        <Link
          to={`detail/${movie.maPhim}`}
          type="button"
          className="w-full center px-16 py-3 font-semibold rounded text-white border-black text-center"
          onClick={()=>gotoDetails(movie.maPhim)}
        >
          Đặt vé
          {/* <button onClick={()=>gotoDetails(movie.maPhim)}> Đặt vé</button>
          */}
        </Link>
        
        {/* <button type="button"  onClick={()=>gotoDetails(movie.maPhim)}> Đặt vé</button> */}
       
      </div>
      
    </div>
  );
};

export default FilmFlip;
function maPhim(arg0: string, maPhim: any, number: any): void {
  throw new Error("Function not implemented.");
}

