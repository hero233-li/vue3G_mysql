const cors = require('@koa/cors')

const { SERVER_PORT } = require('./config/server')
const { app } = require('./app')
require('./utils/register/user.ErrorCode')
require('./utils/login/login.ErrorCode')
app.use(cors())
app.listen(SERVER_PORT, () => {
  console.log('后台管理系统服务器启动成功')
})
