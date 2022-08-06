import { cinema, unitCenema } from "interfaces/cinema"
import axiosClient from "./axiosClient"

export const cinemaAPI = {
    getCinemaList:()=>{
        return axiosClient.get<unknown,cinema[]>("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
    },
    getUnitCinemaList:(cinemaCode:string)=>{
        return axiosClient.get<unknown,unitCenema[]>(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cinemaCode}`)
    }
}