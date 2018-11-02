import { getCar } from './api/suiyan'
// let xlsx = require('node-xlsx'),
// fs = require('fs')
// const workSheetsFromFile = xlsx.parse(`${__dirname}/data.xlsx`);
// let arr = workSheetsFromFile[0].data.map((val) => {
//   return val[0]
// })
// console.log(JSON.stringify(arr))
for(let i = 1;i < 50; i++){
  getCar().then((data)=>{
    console.log(i, data)
  })
}
