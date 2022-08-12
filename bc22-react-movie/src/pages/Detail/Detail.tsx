import React, { useEffect, useState } from "react";
import { CustomCard, Button, Card } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { height } from "@mui/system";
import { Box } from "@mui/material";
import { Movie } from "interfaces/movie";
import "assets/styles/circle.css";
import { Radio, Space, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {AppDispatch, RootState} from "store";
import { getShowTimeMovie } from "slices/cinema";
import { useParams } from "react-router-dom";
import moment from "moment";
const { TabPane } = Tabs;
interface props {
  maPhim: number;
}
type MovieParams = {
  maPhim: string;
};

const Detail = () => {
  const {maPhim}  = useParams<MovieParams>();
  // console.log("maPhim: ",maPhim);
  let maPhimNum = 0;
  if (typeof maPhim === 'string'){
    maPhimNum = parseInt(maPhim);
  }
  // console.log("maPhimNum: ", maPhimNum);
  
  // const {movie} = props;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
    console.log("here");
    dispatch(getShowTimeMovie(maPhimNum));
  },[])
  const {chiTietPhim} =  useSelector((state:RootState)=>(state.cinema))
  return (
    // <CustomCard
    //   effectColor="#C780FF" // required
    //   color="#14AEFF" // default color is white
    //   blur={10} // default blur value is 10px
    //   borderRadius={0} // default border radius value is 10px
    // >
    //   <h1>Hello</h1>
    //   <p>This is an example</p>
    // </CustomCard>
    <div
      style={{
        backgroundImage: `url(${chiTietPhim.hinhAnh})`,
        backgroundPosition:"center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={20} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
        style={{ minHeight: "100vh" }}
      >
        <div className="grid grid-cols-12 p-40">
          <div className="col-span-6 col-start-3">
            <div className="grid grid-cols-6 gap-5">
              <div className="col-span-3 col-start-1">
                <img src={chiTietPhim.hinhAnh} style={{width:"250px", height:"300px"}}></img>
              </div>

              <div className="noidung col-span-2 col-start-4 flex-column" style={{marginTop:"30%"}}>
                <p className="text-sm">Ngày chiếu: {moment(chiTietPhim.ngayKhoiChieu).format("DD.MM YYYY")}</p>
                <p className="text-2xl text-white">{chiTietPhim.tenPhim}</p>
                <p>Mô tả</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="c100 p25">
              <span>25%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 ml-20">
          <Tabs tabPosition="left" >
            <TabPane tab="Tab 1" key="1">
              Content of Tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab 3
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
};
export default Detail;
