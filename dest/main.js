//js hamburger-menu
const btnMenu = document.querySelector('header .btn-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menus = document.querySelector('.menu-desk');

btnMenu.addEventListener('click', () => {
	hamburgerMenu.classList.toggle('clicked');
	menus.classList.toggle('show-menu-mobile');
});
window.addEventListener('resize', () => {
	let windowWidth = window.innerWidth;
	// console.log(windowWidth);
	if (windowWidth > 991) {
		hamburgerMenu.classList.remove('clicked');
		menus.classList.remove('show-menu-mobile');
	}
});
var windowWidth = $(window).innerWidth();
$(window).on('resize', () => {
	windowWidth = $(window).innerWidth();
});
$('.menu-desk li .menu-link').on('click', function () {
	if (windowWidth < 991) {
		$('.menu-desk-item').not($(this).parent()).removeClass('active');
		$('.wrapul').not($(this).next()).slideUp('fast');
		$(this).next().slideToggle('fast');
		$(this).parent().toggleClass('active');
	}
});

var swiper = new Swiper('.slider .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 0,
	// loop: true,
	// autoplay: {
	//     delay: 2500,
	// },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper = new Swiper('.products .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 30,
	// loop: true,
	// autoplay: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 3,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	autoHeight: true,
	thumbs: {
		swiper: galleryThumbs,
	},
});

//tabs product details
$(document).ready(function () {
	function Tabs(item) {
		$('.product-details-page .title-tabs a').removeClass('active');
		$(item).addClass('active');
		const id = $(item).attr('href');
		$('.content-tabs .content').hide();
		$(id).show();
	}

	$('.product-details-page .title-tabs a').on('click', function () {
		Tabs(this);
		return false;
	});

	Tabs($('.product-details-page .title-tabs a:first-child'));
});
