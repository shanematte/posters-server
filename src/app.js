import Koa from 'koa'
import logger from 'koa-logger'
import json from 'koa-json'
import forceSSL from 'koa-force-ssl'
import robotstxt from 'koa-robotstxt'
import bodyParser from 'koa-bodyparser'
import session from 'koa-session'
import config from 'config'
import routes from './controllers/index'
import koaNunjucks from 'koa-nunjucks-2'
import serve from 'koa-static'
import path from 'path'

const app = new Koa()

app.keys = config.get('session.keys')

const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
}
app.proxy = true
app.use(logger())
app.use(session(CONFIG, app))
app.use(json())
app.use(bodyParser())

/*import './helpers/auth'
app.use(passport.initialize())
app.use(passport.session())*/

app.use(serve(path.join('public')))
app.use(robotstxt(__dirname + '/public/robots.txt'))

app.use(koaNunjucks({
  	ext: 'html',
  	path: path.join(__dirname, 'views'),
  	nunjucksConfig: {
    	trimBlocks: true
  	}
}))

app.use(routes)

export default app