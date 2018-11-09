import { getCar, getCarDetail } from './api/suiyan' //network api
import { insert } from './utils/sql' //insert func
const xlsx = require('node-xlsx') //解析HTML插件
const Queue = require("promise-queue-plus") //队列插件
let q = Queue.Q; //内置的Promise，仿Q的API
const cheerio = require('cheerio') //解析HTML
let stime,etime
let queue = new Queue(10,{
  "queueStart": queueStart
  ,"queueEnd": queueEnd
  ,"workResolve": workResolve
  ,"workReject": workReject
  ,"workFinally": workFinally
  ,"retry":1 //出错重试次数 默认0;
  ,'workAdd':workAdd //workAdd只会在push/unshift方法添向项时才触发！
})
// readXls()
getDetail('BMW7200QL(BMW320Li)')
function readXls (){
  //读取车辆型号表格文件
  const workSheetsFromFile = xlsx.parse(`${__dirname}/singledata.xlsx`);
  //读出的型号数组
  let arr = workSheetsFromFile[0].data.map((val) => {
    return val[0]
  })
  work(arr.slice(1,20))
  // work(arr)
}

function work (arr){
  //循环数组，队列工作
  for(let i in arr){
    queue.push(getDetail.bind(this,arr[i])).then((result) => console.log(`当前队列完成${result}`)).catch((e)=>{
        console.log('queue catch err+'+ JSON.stringify(e).substr(0,50))
    })
  }
}

function getDetail(model){
  return new Promise((resolve,reject) => {
    getCar(model).then((res) => {
      // console.log('getCarRes:' + JSON.stringify(res.result))
      if(!res.result){
        let arr = new Array(35)
        arr[1] = model
        insert(arr).then((result) => {resolve(result)}).catch((err)=>{console.log(err)})
      }
      else{
        let id = res.result[0].id
        getCarDetail(id).then((res) => {
          let $ = cheerio.load(res)
          //----------主要参数----------
          let mainTb = $('.view-table-first tbody tr td')    //获取主要参数table
          let mainDetail = []
          //遍历表格所有内容
          mainTb.each(function(i, elem){
            mainDetail.push($(this).text())
          })
          //删除第一个（标题）
          mainDetail.splice(0, 1)
          //取偶数项（详情内容）
          let mainDetailData = mainDetail.filter((currentVal, index) => {
            if(index % 2 != 0){
              if(!currentVal){
                return ' '
              }
              return currentVal
            }
          })
          mainDetailData.splice(0, 0, id, model)
          //----------底盘参数----------
          let dipanTb = $('.view-table-second tbody tr td')    //获取底盘参数table
          let dipanDetail = []
          //遍历表格所有内容
          dipanTb.each(function(i, elem){
            dipanDetail.push($(this).text())
          })
          //删除第一个（标题）
          dipanDetail.splice(0, 1)
          //取偶数项（详情内容）
          let dipanDetailData = dipanDetail.filter((currentVal, index) => {
            if(index % 2 != 0){
              if(!currentVal){
                return ' '
              }
              return currentVal
            }
          })
          //----------发动机参数----------
          let fadongjiTb = $('.view-table-three tbody tr td')    //获取底盘参数table
          let fadongjiDetail = []
          //遍历表格所有内容
          fadongjiTb.each(function(i, elem){
            fadongjiDetail.push($(this).text())
          })
          //删除第一个（标题）
          fadongjiDetail.splice(0, 5)
          //取偶数项（详情内容）
          let fadongjiData = fadongjiDetail.filter((currentVal, index) => {
              return currentVal
          })
          let data = mainDetailData.concat(dipanDetailData, fadongjiData)
          console.log('success~~')
          insert(data).then((result) => {resolve(result)}).catch((err)=>{console.log(err)})
        }).catch((err) => {
          let arr = new Array(35)
          arr[1] = model
          // insert(arr).then((result) => {resolve(result)})
          console.log(`getCarErr1:` + err)
        })
      }
      
    }).catch((err) => {
      let arr = new Array(35)
      arr[1] = model
      insert(arr).then((result) => {resolve(result)}).catch((err)=>{console.log(err)})
      console.log(`getCarErr2:` + err)
    })
  })

}


//定义一些方法
function workResolve(data,obj){
console.log('第' + data + '事件完成 - 运行中事件数：' + this.getRunCount() + ' - 剩余：' + this.getLength())
}
function workReject(err,obj){
  console.log('一个执行单元状态拒绝' + err)
  queue1.stop()
}
function queueStart(){
console.log('>>>>>> 队列开始')
}
function queueEnd(){
  console.log('<<<<<< 队列结束了')
  console.log(`一共花了${new Date() - stime}ms`)
}
function workFinally(){
console.log('一个执行单元完成')
}
function workAdd(){
console.log("向队列添加项 ",this.isStart(),this.getLength()) 
if(!this.isStart() && this.getLength() >= 2){ //当添加了2个项后,运行队列
  console.log(">> 触发自动运行条件")
  this.start();
}
}