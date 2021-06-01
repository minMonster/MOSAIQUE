const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const koaStatic = require('koa-static')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')

const app = new Koa()
const router = new Router()

app.use(
  historyApiFallback({
    index: '/index.html'
  }))
  .use(koaStatic(path.join(__dirname, '../dist/product')))

router
  .get('/', async ctx => {
    ctx.render('index')
  })

// 应用路由
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(5000)
