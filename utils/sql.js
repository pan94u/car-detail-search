const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'pan9pang',
  database: 'car_detail',
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0
})

// 34
export function insert(data){
  pool.query('INSERT INTO detail(id,chanpinshangbiao,qiyemingcheng,cheliangxinghao,gonggaopici,waixingchicun,meitirongji,zongzhiliang,edingzhiliang,zhengbeizhiliang,qianpaichengke,zhouhe,mianzheng,zuigaoshisu,ranyou,youhao,huanbao,ranyouleixing,paifangbiaozhun,zhuyao_qita,dipanxinghao,dipanpinpai,zhoushu,qianlunju,zhouju,houlunju,luntaishu,luntaiguige,jiejinliqujiao,qianxuanhouxuan,fadongjixinghao,fadongjishengchanqiye,pailiang,gonglv) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', data, function (error, results, fields) {
    if (error) {
      console.log(error)
      // throw error
    };
    return new Promise((resolve, reject) => {
      resolve('sql success')
    })
  });
}