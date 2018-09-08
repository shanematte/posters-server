import {
	users,
	posters
} from '../../models/index'
import axios from 'axios'
import moment from 'moment'
import _ from 'underscore'

export default {
	home: async (ctx, next) => {

		return ctx.render('home', {
			title:'Закажи любимый постер',
			description:'Заказ постеров',
			keywords:'печать постера, заказ постера, постеры в астане, закать постер в астане, постеры, закать постер',
			language:'ru'
		})

	},
	notFound: async (ctx, next) => {

		return ctx.redirect('/404')

	}
}