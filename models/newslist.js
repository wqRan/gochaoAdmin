const mongoose = require('./config')

const NewslistSchema = new mongoose.Schema({
  comName: {
    type: String,
    required: true
  },
  comPic: {
    type: String,
    required: true
  },
  comPrice: {
    type: String,
    required: true
  },
  comNumber: {
    type: String,
    required: true
  },
  comCategory: {
    type: String,
    required: true
  }
})

const Newslist = mongoose.model('Newslist',NewslistSchema)

const add = ({comName,comPic,comPrice,comNumber,comCategory}) => {
  // console.dir({showName,showPic,showTime,showLocal,showPrice})
	return new Newslist({
      comName,
      comPic,
      comPrice,
      comNumber,
      comCategory
  })
    .save()
    .then((result) => {
      return result
    })
    .catch((err) => {
      return false
    })
}

const list = ({limit,skip,cb}) => {
  Newslist.find()
  .limit(limit)
  .skip(skip)
  .sort({_id:-1})
  .then((result) => {
    cb(result)
  })
  .catch((err) => {
    cb(false)
  })
}

const findAll = (sort) => {
  sort = sort == 'true' ? 1 : -1
  return Newslist.find()
  .sort({_id:sort})
  .then((result) => {
    return result
  })
  .catch(() => {
    return false
  })
}


const findOne = (id) => {
  return Newslist.findById(id)
  .then((result) => {
    return result
  })
  .catch(() => {
    return false
  })
}

const update = ({id,comName,comPic,comPrice,comNumber,comCategory}) =>{
  const update = comPic ? {
    comName,comPic,comPrice,comNumber,comCategory
  } : {
    comName,comPrice,comNumber,comCategory
  }
  return Newslist.findByIdAndUpdate(id,update)
  .then(()=>{
    return true
  })
  .catch(()=>{
    return false
  })
}

const remove = (id) => {
  return Newslist.findByIdAndRemove(id)
  .then(() =>{
    return true
  })
  .catch(()=>{
    return false
  })
}

const search = (keywords) => {
  let reg = new RegExp(keywords,'i')
  return Newslist.find({
    '$or':[
      {'comName':{$regex:reg} },
      {'comPrice':{$regex:reg} },
      {'comNumber':{$regex:reg} },
      {'comCategory':{$regex:reg} }   
    ]
  })
  .then((result) => {
    return result
  })
  .catch(() => {
    return false
  })
}

const findlist = ({count, start}) => {
  return Newslist.find()
    .limit(count)
    .skip(start)
    .sort({_id:-1})
    .then((result) => {
      return result
    })
    .catch(() => {
      return false
    })
}

module.exports = {
  add,
  list,
  findAll,
  findOne,
  update,
  remove,
  search,
  findlist
}