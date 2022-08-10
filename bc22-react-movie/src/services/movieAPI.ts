import { Movie, Banner } from "interfaces/movie";
import axiosClient from "./axiosClient"

const movieAPI = {
    getMovieList:()=>{
        // Khi muốn biết chính xác dự liệu được trả ra => set up <unknown, Movie[]>
        return axiosClient.get<unknown,Movie[]>("QuanLyPhim/LayDanhSachPhim?maNhom=GP02");
    },
    getMovieBanner: ()=>{
        return axiosClient.get<unknown,Banner[]>("QuanLyPhim/LayDanhSachBanner")
    },
    getMovieDetail: (maPhim:number)=>{
        return axiosClient.get<unknown,Banner[]>(`QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    }
}
export default movieAPI;