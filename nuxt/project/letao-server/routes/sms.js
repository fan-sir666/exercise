const router = require('koa-router')();

const { sendsms } = require('../controller/sms')

// 短信发送接口
router.post('/sendsms', sendsms)

module.exports = router;