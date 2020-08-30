import {request} from "./request";

export function getShopMultidata() {
  return request({
    url:'/home/multidata'
  })
}