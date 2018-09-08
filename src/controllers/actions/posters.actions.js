import {
	users,
	posters
} from '../../models/index'
import axios from 'axios'
import moment from 'moment'
import _ from 'underscore'

let tags = ['все постеры', 'девушки', 'машины', 'абстракция', 'рисованные', 'цветы', 'пляж', 'море', 'самолеты']

export default {
	posters: async (ctx) => {

		let { page, cat, tag } = ctx.query
		let options = {}
		let pagesRender = ''

		if(tag){

			options = {
			  	page: page != undefined ? page : 1,
			  	paginate: 6,
			  	order: [['id', 'ASC']],
			  	where:{
			  		tags:{
			  			like: '%' + tag + '%'
			  		}
			  	}
			}

		}else{

			options = {
			  	page: page != undefined ? page : 1,
			  	paginate: 6,
			  	order: [['id', 'ASC']]
			}

		}

		let {docs, pages, total} = await posters().paginate(options)

		for(let y = 1; y <= pages; y++){

			if(pages > 1){

				if(y == page){

					if(tag){
						pagesRender += '<a class="active-page" href="/posters?tag='+tag+'&page='+y+'">'+y+'</a>'
					}else{
						pagesRender += '<a class="active-page" href="/posters?page='+y+'">'+y+'</a>'
					}

				}else{

					if(tag){
						pagesRender += '<a href="/posters?tag='+tag+'&page='+y+'">'+y+'</a>'
					}else{
						pagesRender += '<a href="/posters?page='+y+'">'+y+'</a>'
					}

				}

			}

		}

		return ctx.render('posters', {
			title:'Постеры',
			description:'Закажи любимый постер',
			keywords:'постеры в астане, закать постер в астане, постеры, закать постер',
			posters:docs,
			pages:pages,
			total:total,
			tags:tags,
			tagTitle:tag,
			pagesRender:pagesRender
		})

	},
	viewPoster: async (ctx) => {

		let { slug } = ctx.params

		if(slug){

			let searchPoster = await posters().findOne({
				where:{
					slug:slug
				}
			})

			if(searchPoster){

				return ctx.render('view-poster', {
					title:searchPoster.dataValues.title_poster +' - '+ searchPoster.dataValues.title_ru,
					keywords:searchPoster.dataValues.keywords,
					description:searchPoster.dataValues.description,
					poster:searchPoster.dataValues,
					tags:tags
				})

			}else{

				return ctx.render('view-poster', {
					title:'Постер не найден'
				})

			}

		}else{
			return ctx.redirect('/')
		}

	}
}