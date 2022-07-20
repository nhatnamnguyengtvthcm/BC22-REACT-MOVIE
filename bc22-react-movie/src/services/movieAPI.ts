import { Movie } from "interfaces/movie";
import axiosClient from "./axiosClient"

const movieAPI = {
    getMovieList:()=>{
        // Khi muốn biết chính xác dự liệu được trả ra => set up <unknown, Movie[]>
        return axiosClient.get<unknown,Movie[]>("QuanLyPhim/LayDanhSachPhim");
    },
    getMovieBanner: ()=>{
        return axiosClient.get("QuanLyPhim/LayDanhSachBanner")
    }
}
export default movieAPI;