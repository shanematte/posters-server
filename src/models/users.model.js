import Sequelize from 'sequelize'
import sequelizePaginate from 'sequelize-paginate'
import sequelize from '../connectors/sequelize'

const DataTypes = Sequelize.DataTypes

export default () => {

  const users = sequelize.define('users', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    googleid:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    facebookid:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    vkid:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    twitterid:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    statusPay:{
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
    linkedinid:{
      type: DataTypes.TEXT,
      allowNull: true 
    }
  },
  {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  })

  sequelizePaginate.paginate(users)

  sequelize.sync()

  return users

}
