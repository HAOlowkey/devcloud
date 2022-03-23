import request from "@/utils/request";

const cmdb_baseurl = "/cmdb/api/v1";

// 查询主机列表
export function HOST_LIST(params) {
  return request({
    url: `${cmdb_baseurl}/hosts`,
    method: "get",
    params,
  });
}
