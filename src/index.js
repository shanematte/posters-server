import config from 'config'
import http from 'http'
import app from './app'

const PORT = config.get('DEFAULT_PORT')

http.createServer(app.callback()).listen(PORT, () => {
	console.log('started default server')
})
