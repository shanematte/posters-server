import Router from 'koa-router'
import mainRoutes from './routes/main.routes'
import postersRoutes from './routes/posters.routes'

const router = new Router()

router.use(postersRoutes)
router.use(mainRoutes)

export default router.routes()