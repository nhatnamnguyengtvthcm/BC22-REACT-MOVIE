import axios, { AxiosError } from "axios";
import store from "store";
// Setup  cấu hình mặc định cho axios
const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMiIsIkhldEhhblN0cmluZyI6IjMwLzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2OTc2NjQwMDAwMCIsIm5iZiI6MTY0MTgzNDAwMCwiZXhwIjoxNjY5OTE0MDAwfQ.mTJaYLlwFuAG-SiC8fUlH-taW8wV0VAASxdCPf54RX8",
  },
});

interface ErrorResponse {
  content: string;
}
// setup respone interceptor
axiosClient.interceptors.response.use(
  (respone) => {
    // call API thành công ta có thể modify respone trước khi trả cho nơi gọi requests
    // response.data: format của axios
    // content: format của cybersoft
    return respone.data.content;
  },
  (error: AxiosError<ErrorResponse>) => {
    // request API thất bại, ta có thể thay đổi cái err trước khi trả ra cho nơi gọi request
    return Promise.reject(error.response?.data.content);
  }
);

// setUp request interceptor
/*
axiosClient.interceptors.request.use((config) => {
  // Config là thông tin của rquest sẽ được gửi lên server
  // Kiểm tra xem user dẫ đăng nhậph hay chưa đẻ lấy acccessToken gắn vào headers
  const {accessToken} = store.getState().auth.currentUser;
  if(config.headers){
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken} `
      }
  }
  return config;
});
*/

export default axiosClient;
