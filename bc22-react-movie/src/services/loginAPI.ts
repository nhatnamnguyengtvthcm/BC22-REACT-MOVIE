
import axiosClient from "./axiosClient";
import {CurrentUser} from "interfaces/auth";
interface LoginValues {
    taiKhoan: string;
    matKhau: string;
}

const authAPI = {
    login: (values:LoginValues)=>{
        return axiosClient.post<unknown, CurrentUser>("QuanLyNguoiDung/DangNhap",values)
    }
}

export default authAPI;