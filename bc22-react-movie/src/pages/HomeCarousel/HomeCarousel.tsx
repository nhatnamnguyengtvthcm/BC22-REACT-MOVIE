import type { RadioChangeEvent } from "antd";
import { Carousel, Radio } from "antd";
import type { DotPosition } from "antd/es/carousel";
import React, { Dispatch, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BannerState, getBannerList } from "slices/banner";
// import { Banner } from "interfaces/movie";
import { AppDispatch, RootState } from "store";
import className from "classnames";
// import styles from "./carousel.module.scss";
import "./carousel.css";
import { isNamedTupleMember } from "typescript";
import styled from 'styled-components';

const HomeCarousel: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    height: "990px",
    width: "",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    //   background: "#364d79",
    position: "relative",

    
  };

  const [dotPosition, setDotPosition] = useState<DotPosition>("bottom");
  const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
    setDotPosition(value);
  };
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.banner.data);
  console.log("banner: ", data);
  useEffect(() => {
    dispatch(getBannerList());
  }, []);
  const bindingBanner = () => {
    const baner_list = data?.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={contentStyle}
            className={`w-full h-full .ant-carousel .slick-dots `}
          >
            <img src={item.hinhAnh} alt="" className="w-full h-full" />
          </div>
        </div>
      );
    });
    return baner_list;
  };
  const bindingBanner1 = () => {
    const baner_list = data?.map((item, index) => {
      return (
        <div className="carousel-item active float-left w-full">
          <img
            src={item.hinhAnh}
            className="block w-full"
            alt="Wild Landscape"
          />
        </div>
      );
    });
    return baner_list;
  };
  return (
    // const Item = bindingBanner();

    <Carousel
      autoplay={true}
      effect="fade"
      dotPosition={dotPosition}
      className={`w-full `}
    >
      {bindingBanner()}
    </Carousel>

   
  );
};

export default HomeCarousel;
