import { chiTietPhim, cinema, unitCenema } from "interfaces/cinema"
import { Movie } from "interfaces/movie"
import axiosClient from "./axiosClient"

export const cinemaAPI = {
    getCinemaList:()=>{
        return axiosClient.get<unknown,cinema[]>("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
    },
    getUnitCinemaList:(cinemaCode:string)=>{
        return axiosClient.get<unknown,unitCenema[]>(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cinemaCode}`)
    },
    getShowTimeMovie: (maPhim:number)=>{
        return axiosClient.get<unknown,chiTietPhim>(`QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    }
}