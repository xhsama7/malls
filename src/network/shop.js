import {request} from "./request";

export function getShopMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getShopGoods(type,page) {
  return request({
    url:'home/data',
    params:{
      type,
      page
    }
  })
}