const clientuserModel = require('../models/clientuser')
require('../utils/date.format')

const add = async (req, res, next) => {

  res.set('Content-Type', 'application/json; charset=utf8')

  const result = await clientuserModel.add({
    ...req.body,
    createTime:new Date().Format('yyyy-MM-dd'),
  })
  console.log(result)
  if (result) {
    res.render('position/succ.ejs',{
      data:JSON.stringify({
        message:'恭喜你:) 数据添加成功'
      })
    })
  }else {

    res.render('position/err.ejs',{
      errorMsg:'数据添加失败:('
    })
  }

}

const list = async(req, res, next)=>{

  res.set('Content-Type','application/json; charset=utf8')
  const {count, start} = req.query
  const result = await clientuserModel.findlist({
    count,
    start
  })
  if (result) {
    res.render('position/succ.ejs',{
      data:JSON.stringify(result)
    })
  }else {
    res.render('position/err.ejs',{
      data:{
        message:'演出信息查询失败'
      }
    })
  }
}
module.exports = {
  add,
  list
}
