import request from "@/utils/request";

const baseurl = "/keyauth/api/v1";

// 用户登录的接口
export function LOGIN(data, params) {
  return request({
    url: `${baseurl}/oauth2/tokens`,
    method: "post",
    // basic auth, 前端调用凭证(web application)
    auth: {
      username: process.env.VUE_APP_CLIENT_ID,
      password: process.env.VUE_APP_CLIENT_SECRET,
    },
    data,
    params,
  });
}

// 用户退出登录的接口
export function LOGOUT(data, params) {
  return request({
    url: `${baseurl}/oauth2/tokens`,
    method: "delete",
    auth: {
      username: process.env.VUE_APP_CLIENT_ID,
      password: process.env.VUE_APP_CLIENT_SECRET,
    },
    data,
    params,
  });
}

// 校验当前token的合法性
export function QUERY_TOKEN(params) {
  return request({
    url: `${baseurl}/self/tokens/`,
    method: "get",
    params,
  });
}

// 获取用户的Profile信息
export function GET_PROFILE(params) {
  return request({
    url: `${baseurl}/profile`,
    method: "get",
    params,
  });
}
