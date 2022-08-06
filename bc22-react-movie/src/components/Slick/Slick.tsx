import Film from "components/Film/Film";
import FilmFlip from "components/FilmFlip";
import { Movie } from "interfaces/movie";
import React from "react";
import Slider from "react-slick";
import styleSlick from "./slick.module.css"
interface Props {
  className: any;
  style: any;
  onClick: any
}

interface slickProps{
    listFilm: Movie[],
}
const Slick = (props:slickProps) => {
  const SampleNextArrow = (props: Props) => {
    const { className, style, onClick} = props;
    return (
      <div
        className={`${className} ${styleSlick["slick-prev"]}`}
        style={{ ...style, display: "block", background: "bg-gay-200"}}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props: Props) => {
    const { className, style, onClick } = props;
    return (
      <div
      className={`${className} ${styleSlick["slick-prev"]}`}
        style={{ ...style, display: "block", background: "bg-grat-900" }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    swipeDirection: "left"
  }; 
  return (
    <div>
      <h2>Multiple Rows</h2>
      <Slider {...settings}>
        {/* <div>
          <h3>1</h3>
        </div> */}
        {props.listFilm.map((item)=>{
          return <FilmFlip movie={item}></FilmFlip>
          
        })}
      </Slider>
    </div>
  );
};

export default Slick;
