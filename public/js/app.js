function loadScripts(){

	let indexSlide = 0
	let timeSlider = 6500
	let lengthSlides = $('.slide').length

	function nextSlide(index){

		$('.slide').removeClass('slide-active')
		$('.slide').eq(index).addClass('slide-active')

	}

	setInterval(function(){

		indexSlide++

		if(indexSlide >= lengthSlides){
			indexSlide = 0
			nextSlide(indexSlide)
		}else{
			nextSlide(indexSlide)
		}

	}, timeSlider)

	$('.filter-block-colors span').on('click', function(){

		let color = $(this).attr('data-color')

		$('.filter-block-colors span').css({
			border:'none'
		})
		$(this).css({
			border:'2px solid #fff'
		})

		$('.filter-block-colors span[data-color="#fff"]').css({
			display:'flex'
		})

		$('.content-poster img').css({
			boxShadow:'0 0 40px rgba(0, 0, 0, 0.84)'
		})

		$('body').css({
			background:color
		})

		//opacity blocks
		$('.content-nav').stop().animate({
			opacity:0
		}, 400)

		$('.main-container h1').stop().animate({
			opacity:0
		}, 400)

		$('.price-block').stop().animate({
			opacity:0
		}, 400)

		$('.tags-block-bottom').stop().animate({
			opacity:0
		}, 400)


	})

	$('.filter-block-colors span[data-color="#fff"]').on('click', function(){

		let color = $(this).attr('data-color')
		$('.filter-block-colors span').css({
			border:'none'
		})

		$('.filter-block-colors span[data-color="#fff"]').css({
			display:'none'
		})

		$('body').css({
			background:color
		})

		$('.content-poster img').css({
			boxShadow:'0 0 40px rgba(0, 0, 0, 0)'
		})

		//opacity blocks
		$('.content-nav').stop().animate({
			opacity:1
		}, 400)

		$('.main-container h1').stop().animate({
			opacity:1
		}, 400)

		$('.price-block').stop().animate({
			opacity:1
		}, 400)

		$('.tags-block-bottom').stop().animate({
			opacity:1
		}, 400)

	})

}