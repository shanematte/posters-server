import Sequelize from 'sequelize'
import sequelizePaginate from 'sequelize-paginate'
import sequelize from '../connectors/sequelize'

const DataTypes = Sequelize.DataTypes

export default () => {

  const posters = sequelize.define('posters', {
    title_poster: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    width_poster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    height_poster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    style_poster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price_poster:{
      type: DataTypes.STRING,
      allowNull: true
    },
    preview_poster:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    images_showroom:{
      type: DataTypes.JSON,
      allowNull: true
    },
    views:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    slug:{
      type: DataTypes.TEXT,
      allowNull: true 
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: true 
    },
    keywords:{
      type: DataTypes.TEXT,
      allowNull: true 
    },
    title_ru:{
      type: DataTypes.TEXT,
      allowNull: true 
    },
    cat_id:{
      type: DataTypes.INTEGER,
      allowNull: true 
    },
    tags:{
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

  sequelizePaginate.paginate(posters)

  sequelize.sync()

  return posters

}
