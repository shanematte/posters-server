import Sequelize from 'sequelize'
import config from 'config'
import moment from 'moment'

const timezone = 'Asia/Almaty'
moment.tz.setDefault(timezone)

const sequelize = new Sequelize(config.get('database.db'), config.get('database.user'), config.get('database.password'), {
  dialect: 'postgres',
  timezone: timezone
})

export default sequelize
