import Router from 'koa-router'
import posterActions from '../actions/posters.actions'

const router = new Router()

router.get('/posters', posterActions.posters)
router.get('/poster/:slug', posterActions.viewPoster)

export default router.routes()