import React, { useEffect, useState } from "react";
import { CustomCard, Button, Card } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { height } from "@mui/system";
import { Box } from "@mui/material";
import { Movie } from "interfaces/movie";
import "assets/styles/circle.css";
import { Radio, Space, Tabs, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { getShowTimeMovie } from "slices/cinema";
import { NavLink, useParams } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;
interface props {
  maPhim: number;
}
type MovieParams = {
  maPhim: string;
};

const Detail = () => {
  const { maPhim } = useParams<MovieParams>();
  // console.log("maPhim: ",maPhim);
  let maPhimNum = 0;
  if (typeof maPhim === "string") {
    maPhimNum = parseInt(maPhim);
  }
  // console.log("maPhimNum: ", maPhimNum);

  // const {movie} = props;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    console.log("here");
    dispatch(getShowTimeMovie(maPhimNum));
  }, []);
  const { chiTietPhim } = useSelector((state: RootState) => state.cinema);
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
        backgroundPosition: "center",
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
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-6 gap-5">
              <div className="col-span-3 col-start-1">
                <img
                  src={chiTietPhim.hinhAnh}
                  style={{ width: "250px", height: "300px" }}
                ></img>
              </div>

              <div
                className="noidung col-span-3 col-start-4 flex-column"
                style={{ marginTop: "5%" }}
              >
                <p className="text-sm">
                  Ngày chiếu:{" "}
                  {moment(chiTietPhim.ngayKhoiChieu).format("DD.MM YYYY")}
                </p>
                <p className="text-2xl text-white">{chiTietPhim.tenPhim}</p>
                <p>{chiTietPhim.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 col-start-9">
            <div className="w-100 col-span-2 col-start-5">
              <h1 style={{ paddingLeft: "30px" }}>Đánh giá</h1>
              <h1 style={{ paddingLeft: "50px" }}>
                <Rate allowHalf defaultValue={2.5} />
              </h1>
            </div>

            <div className={`c100 p${chiTietPhim.danhGia * 10} big`}>
              <span>{chiTietPhim.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 ml-20 container bg-white">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
              <div>
                <Tabs tabPosition={"left"}>
                  {chiTietPhim.heThongRapChieu
                    ?.slice(0, 4)
                    .map((htr, index) => {
                      return (
                        <TabPane
                          tab={
                            <div className="flex flex-row items-center justify-center ">
                              <div>
                                <img
                                  src={htr.logo}
                                  style={{ width: "50px" }}
                                ></img>
                                <h2 className=" ml-2 mt-2">
                                  {htr.tenHeThongRap}
                                </h2>
                              </div>
                            </div>
                          }
                          key={index}
                        >
                          {/* load thông tin loạt tương ứng */}
                          {htr.cumRapChieu?.slice(0, 4).map((cumRap, index) => {
                            return (
                              <div key={index} className="mt-5">
                                <div className="flex flex-column">
                                  <img
                                    src={htr.logo}
                                    style={{ width: "80px" }}
                                    alt=""
                                  />
                                  <div className="ml-2 mt-2">
                                    <p
                                      style={{
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        lineHeight: 0.5,
                                      }}
                                    >
                                      {cumRap.tenCumRap}
                                    </p>
                                    <p className="text-gray-400">{cumRap.tenCumRap}</p>
                                  </div>
                                </div>
                                <div className="thong-tin-lich-chieu grid grid-cols-4">
                                  {/* <div className="col-span-1">Nam</div>
                                  <div className="col-span-1">Nam</div>
                                  <div className="col-span-1">Nam</div>
                                  <div className="col-span-1">Nam</div> */}
                                  {cumRap.lichChieuPhim?.slice(0,10).map((lichChieu, index)=>{
                                    return  <NavLink to ="/" className="col-span-1 text-green-400 text-xl" key={index}>{moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}</NavLink>
                                  })}
                                  
                                </div>
                              </div>
                            );
                          })}
                        </TabPane>
                      );
                    })}
                </Tabs>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
};
export default Detail;
