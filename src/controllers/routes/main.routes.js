import Router from 'koa-router'
import mainActions from '../actions/main.actions'

const router = new Router()

router.get('/', mainActions.home)
router.get('*', mainActions.notFound)

export default router.routes()