import axios from "@/axios/request";
export const getUserInfo = function (data) {
  return axios.post("/weixinApp/reportData/xq/103269/init",data);
};
