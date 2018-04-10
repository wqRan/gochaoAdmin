const mongoose = require('./config')

const ClientuserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  createTime: {
    type: String
  },
  sex:{
    type: String,
    required: true
  }
})

const Clientuserlist = mongoose.model('Clientuserlist',ClientuserSchema)

const add = ({userName,createTime,sex}) => {
  // console.dir({showName,showPic,showTime,showLocal,showPrice})
  return new Clientuserlist({
      userName,
      createTime,
      sex
  })
    .save()
    .then((result) => {
      return result
    })
    .catch((err) => {
      return false
    })
}


const findlist = ({count, start}) => {
  return Clientuserlist.find()
    .limit(count)
    .skip(start)
    // .sort({_id:-1})
    .then((result) => {
      return result
    })
    .catch(() => {
      return false
    })
}

module.exports = {
  add,
  findlist,

}