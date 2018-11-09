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

export function insert(data){
  let sql = 'INSERT INTO detail(id,model,chanpinshangbiao,qiyemingcheng,cheliangxinghao,gonggaopici,waixingchicun,meitirongji,zongzhiliang,edingzhiliang,zhengbeizhiliang,qianpaichengke,zhouhe,mianzheng,zuigaoshisu,ranyou,youhao,huanbao,ranyouleixing,paifangbiaozhun,zhuyao_qita,dipanxinghao,dipanpinpai,zhoushu,qianlunju,zhouju,houlunju,luntaishu,luntaiguige,jiejinliqujiao,qianxuanhouxuan,fadongjixinghao,fadongjishengchanqiye,pailiang,gonglv) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
  sql = mysql.format(sql, data);
  pool.query(sql, function (error, results, fields) {
    console.log('sql success~~')
    console.log(error,results,fields)
    if (error) {
      console.log('errsql:'+sql)
      console.log(data)
      // throw error
    };
    return new Promise((resolve, reject) => {
      resolve('sql success')
    })
  });
}