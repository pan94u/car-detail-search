import request from '../utils/request'

export function getCar(params) {
  return request({
    url: 'http://www.suiyan.com.cn/index.php?m=car_affiche&f=index&v=carSelect',
    method: 'POST',
    'content-type':'application/x-www-form-urlencoded; charset=UTF-8',
    data: {
      '_TOKEN': '76bb9239c60a0ecca4c13c1ebddec15795aa9cfb',
      'token': '76bb9239c60a0ecca4c13c1ebddec15795aa9cfb',
      'select[modelNumber]': 'SGM6521ata',
      'dosubmit': 'search'
    }
  })
}