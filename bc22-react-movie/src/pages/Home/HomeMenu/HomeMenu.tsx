import React, { Fragment, useEffect } from "react";
import { Radio, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import Tab from "components/Tab";
import { getCinemaList, getUnitCinemaList } from "slices/cinema";
import { NavLink } from "react-router-dom";
import moment from "moment";
// import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
const HomeMenu = () => {
  const { cinemaList, unitCinemaList } = useSelector(
    (state: RootState) => state.cinema
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCinemaList());
  }, []);
  const handleLoadUnitCenemaList = (cinemaCode: string) => {
    dispatch(getUnitCinemaList(cinemaCode));
    console.log("unitCinemaList: ", unitCinemaList);
  };
  const bidingCinemaList = () => {
    const cinemas = cinemaList.map((cinema, index) => {
      // return <Tab key={index} cinema={item}></Tab>;
      // dispatch(getUnitCinemaList(item.maHeThongRap));
      return (
        // <div onClick={() => handleLoadUnitCenemaList(item.maHeThongRap)}>
        //   <TabPane
        //     className="w-full h-full"
        //     tab={<img src={item.logo} className="w-20 h-20"></img>}
        //     key={index}
        //   ></TabPane>
        // </div>
        <TabPane
          className="w-full h-full"
          tab={<img src={cinema.logo} className="w-20 h-20"></img>}
          key={index}
        >
          <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: 220 }}>
            {cinema.lstCumRap.map((cumRap, index) => {
              return (
                <TabPane
                  className="w-full h-full"
                  tab={
                    <div className="flex justify-around align">
                      <div>
                        <img src={cumRap.hinhAnh} className="w-10 h-10"></img>
                      </div>

                      <div className="ml-3">
                        {cumRap.tenCumRap}
                        <p className="text-left color-blue-200">Chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="flex m-10">
                          <div className="">
                            <img
                              src={phim.hinhAnh}
                              alt=""
                              className="w-20 h-20 mr-5"
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src="https://picsum.photos/20/20";
                              }}
                            />
                          </div>
                          <div className="">
                            <h2 className="text-xl text-green-700">
                              {phim.tenPhim}
                            </h2>
                            <p>{cumRap.diaChi}</p>
                            <div className="grid grid-cols-5 gap-4">
                              {phim.lstLichChieuTheoPhim?.slice(0, 10).map((lich, index) => {
                                return (
                                  <NavLink to="/" key={index} className="text-green-500">
                                    {moment(lich.ngayChieuGioChieu).format("hh:mmA")}
                                  </NavLink>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        <hr className=" bg-sky-200 h-0.5 border"></hr>
                      </Fragment>
                    );
                  })}
                  ;
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
    return cinemas;
  };
  return (
    <div className="px-40 my-40 h-auto">
      <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: "auto" }}>
        {bidingCinemaList()}
      </Tabs>
    </div>
  );
};

export default HomeMenu;
