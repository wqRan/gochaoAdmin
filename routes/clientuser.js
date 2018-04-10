var express = require('express');
var router = express.Router();

const ClientuserController = require('../controllers/ClientuserController');



router.route('/add')
	.post(ClientuserController.add)

router.route('/list')
	.get(ClientuserController.list)



module.exports = router















