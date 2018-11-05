import request from '../utils/request'
import qs from 'qs'
export function getCar(model) {
  let data = {
    '_TOKEN': '76bb9239c60a0ecca4c13c1ebddec15795aa9cfb',
    'select[modelNumber]': model,
    'dosubmit': 'search'
  }
  return request({
    url: 'http://www.suiyan.com.cn/index.php?m=car_affiche&f=index&v=carSelect&' + qs.stringify(data),
    method: 'POST',
    'content-type':'application/x-www-form-urlencoded; charset=UTF-8'
  })
}

export function getCarDetail(id) {
  return request({
    url: `http://www.suiyan.com.cn/index.php?m=car_affiche&f=index&v=toHtml&id=${id}&type=1`,
    method: 'GET'
  })
}