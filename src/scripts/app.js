import Swiper from 'swiper';
import Tab from './libraries/tab';
import { getSVGs } from './libraries/utils';
import { MoveElement } from './libraries/MoveElement';

const moveFlyingCart = () => {
	return new MoveElement('.flying-cart', {
		mobileNode: '.searchIcon',
		mobileMethod: 'insertAfter',
		desktopNode: '.header-user-information',
		desktopMethod: 'appendTo',
		breakpoint: 1025,
	});
};

const initHomeSliderBanner = () => {
	let homeSliderBanner = new Swiper('.home-slider-banner .swiper-container', {
		navigation: {
			nextEl: '.home-slider-banner-button-next',
		},
	});
};

const initHomeTabSliderProduct = () => {
	let homeSliderTabProduct = new Swiper(
		'.slider-tab-products-homepage .swiper-container',
		{
			slidesPerView: 2,
			spaceBetween: 14,
			navigation: {
				prevEl: '.home-slider-tab-product-button-prev',
				nextEl: '.home-slider-tab-product-button-next',
			},
			breakpoints: {
				1025: {
					slidesPerView: 3,
					spaceBetween: 62,
				},
			},
		},
	);
};

const initShowcaseSlider = () => {
	let showcaseSlider = new Swiper('.showcase-homepage .swiper-container', {
		navigation: {
			prevEl: '.showcase-homepage .slider-showcase-clients-prev',
			nextEl: '.showcase-homepage .slider-showcase-clients-next',
		},
		pagination: {
			el: '.showcase-homepage .swiper-pagination',
			type: 'bullets',
		},
	});
};

const initClientSlider = () => {
	let clientSlider = new Swiper('.client-homepage .swiper-container', {
		navigation: {
			prevEl: '.client-homepage .slider-showcase-clients-prev',
			nextEl: '.client-homepage .slider-showcase-clients-next',
		},
		pagination: {
			el: '.client-homepage .swiper-pagination',
			type: 'bullets',
		},
	});
};

const initPartnersSlider = () => {
	let partnersSlider = new Swiper('.slider-partners .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 24,
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			1025: {
				slidesPerView: 6,
				spaceBetween: 80,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		},
	});
};

const initSliderNewsOther = () => {
	let newsOtherSlider;
	const breakpoint = window.matchMedia('(max-width:768px)');
	const check = document.querySelector('.slider-news-other');
	if (breakpoint.matches === true && check) {
		newsOtherSlider = new Swiper('.slider-news-other .swiper-container', {
			spaceBetween: 20,
			slidesPerView: 2,
			navigation: {
				prevEl: '.slider-item-other-prev',
				nextEl: '.slider-item-other-next',
			},
		});
	} else {
		if (newsOtherSlider instanceof Swiper) {
			newsOtherSlider.destroy(true, true);
		}
	}
};

const initSliderProductOther = () => {
	let productOtherSlider = new Swiper(
		'.slider-products-other .swiper-container',
		{
			init: false,
			slidesPerView: 'auto',
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			navigation: {
				prevEl: '.slider-item-other-prev',
				nextEl: '.slider-item-other-next',
			},
		},
	);
	const breakpoint = window.matchMedia('(max-width:767.98px)');
	const check = document.querySelector('.slider-products-other');
	if (breakpoint.matches === true && check) {
		productOtherSlider.init();
	}
};

const initSliderFilterProductByPrice = () => {
	// PARAMS
	const slider = document.querySelector('#slider-filter-price');
	const inputValue = document.querySelector('#slider-filter-price-input');
	// INIT SLIDER
	if (slider) {
		// PARAMS
		let valueMin = Number(
			document
				.querySelector('#slider-filter-price')
				.getAttribute('min-price'),
		);
		let valueMax = Number(
			document
				.querySelector('#slider-filter-price')
				.getAttribute('max-price'),
		);
		// FUNCTION INIT
		noUiSlider.create(slider, {
			start: [valueMin, valueMax],
			connect: true,
			range: {
				min: [valueMin],
				max: [valueMax],
			},
		});
		inputValue.setAttribute('value', slider.noUiSlider.get());
		// UPDATE VALUE
		slider.noUiSlider.on('update', function (values) {
			// PARAMS
			let valueFinalMin = document.querySelector(
				'#slider-filter-price-value .min',
			);
			let valueFinalMax = document.querySelector(
				'#slider-filter-price-value .max',
			);
			// FUNCTION INIT
			valueFinalMin.innerHTML = values[0];
			valueFinalMax.innerHTML = values[1];
			inputValue.setAttribute('value', slider.noUiSlider.get());
		});
	}
};

const initSliderProductDetail = () => {
	let thumbsProductDetailSlider = new Swiper(
		'.slider-thumbs-product-detail .swiper-container',
		{
			slidesPerView: '4',
			spaceBetween: 10,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			freeMode: true,
			breakpoints: {
				1025: {
					direction: 'vertical',
					slidesPerView: '5',
				},
				896: {
					slidesPerView: '4',
				},
				768: {
					slidesPerView: '3',
				},
			},
		},
	);
	let productDetailSlider = new Swiper(
		'.slider-product-detail .swiper-container',
		{
			navigation: {
				prevEl: '.slider-product-detail .swiper-prev',
				nextEl: '.slider-product-detail .swiper-next',
			},
			slidesPerView: '1',
			thumbs: {
				swiper: thumbsProductDetailSlider,
			},
			effect: 'fade',
		},
	);
};

const initClassNavigation = () => {
	const navigationItems = document.querySelectorAll('.navigation__item');
	const subMenuItems = document.querySelectorAll('.sub-menu__item');
	navigationItems.forEach((item) => {
		const subMenu = item.querySelector('.nav-sub-menu-wrapper');
		if (subMenu != null) {
			item.classList.add('has-sub');
			item.addEventListener('click', (e) => {
				subMenu.classList.add('show');
			});
		}
	});
	subMenuItems.forEach((item) => {
		const subMenu = item.querySelector('.nav-sub-menu-wrapper');
		if (subMenu != null) {
			item.classList.add('has-sub');
			item.addEventListener('click', (e) => {
				subMenu.classList.add('show');
			});
		}
	});
};

const toggleMenuMobile = () => {
	const hamburger = document.querySelector('.hamburgerIcon');
	const navigation = document.querySelector('.header-navigation');
	const userInfo = document.querySelector('.header-user-information');
	const body = document.querySelector('body');
	const overlay = document.querySelector('#overlay');
	const listAllSubMenu = document.querySelectorAll('.nav-sub-menu-wrapper');
	const subMenusLv1 = document.querySelectorAll(
		'.navigation__item .nav-sub-menu-wrapper',
	);
	const subMenusLv2 = document.querySelectorAll(
		'.sub-menu__item .nav-sub-menu-wrapper',
	);
	const btnBackLv1 = document.querySelectorAll('.sub-menu__item.back');
	const btnBackLv2 = document.querySelectorAll('.nav-sub-menu__item.back');
	if (hamburger) {
		hamburger.addEventListener('click', (e) => {
			hamburger.classList.add('active');
			navigation.classList.add('show');
			userInfo.classList.add('show');
			body.classList.add('disabled');
			overlay.classList.add('active');
		});
	}
	if (overlay) {
		overlay.addEventListener('click', (e) => {
			hamburger.classList.remove('active');
			navigation.classList.remove('show');
			userInfo.classList.remove('show');
			body.classList.remove('disabled');
			overlay.classList.remove('active');
			listAllSubMenu.forEach((item) => {
				item.classList.remove('show');
			});
		});
	}
	btnBackLv1.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.stopPropagation();
			subMenusLv1.forEach((item) => {
				item.classList.remove('show');
			});
		});
	});
	btnBackLv2.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.stopPropagation();
			subMenusLv2.forEach((item) => {
				item.classList.remove('show');
			});
		});
	});
};

const toggleFlyingCart = () => {
	const icon = $('.flying-cart .cart-icon');
	const wrapper = $('.flying-cart .cart-wrapper');
	icon.on('click', function (e) {
		e.preventDefault();
		icon.toggleClass('active');
		wrapper.toggleClass('collapsed');
	});
};

// SHOW FILLTER PRODUCTS IN LIST PPODUCT PAGE
const toggleFilterProductsMobile = () => {
	const btn = document.querySelector('.button-show-filter-mobile');
	const filter = document.querySelector('.filter-products-wrapper');
	if (btn) {
		btn.addEventListener('click', (e) => {
			btn.classList.toggle('active');
			filter.classList.toggle('show');
		});
	}
};

// SHOW SELECT IN MOBILE CATEGORY
const toggleCategorySelectMobile = () => {
	const btn = document.querySelectorAll('.button-show-categories-mobile');
	btn.forEach((item) => {
		item.addEventListener('click', (e) => {
			const filter = item.nextElementSibling;
			item.classList.toggle('active');
			filter.classList.toggle('show');
		});
	});
};

// SHOW SEACH MOBILE
const toggleShowSearchMobile = () => {
	const btn = document.querySelector('.searchIcon');
	const seach = document.querySelector('.header-search-wrapper');
	if (btn) {
		btn.addEventListener('click', (e) => {
			btn.classList.toggle('active');
			seach.classList.toggle('show');
		});
	}
};

const AccountSettingTab = () => {
	return new Tab('.tab-container');
};

const customFancybox = () => {
	const closeAccountMenu = () => {
		const accountMenus = document.querySelectorAll('.header__menuWrapper');
		accountMenus.forEach((menu) => {
			menu.classList.remove('show');
		});
	};
	$('[data-fancybox]').fancybox({
		touch: false,
		hash: false,
		closeExisting: true,
	});
	$("[data-fancybox='signin']").fancybox({
		touch: false,
		hash: false,
		closeExisting: true,
		beforeShow: function (e) {
			$('#popup-signinup').find('[toggle-for="signin"]').trigger('click');
			closeAccountMenu();
		},
	});
	$("[data-fancybox='signup']").fancybox({
		touch: false,
		hash: false,
		closeExisting: true,
		beforeShow: function (e) {
			$('#popup-signinup').find('[toggle-for="signup"]').trigger('click');
			closeAccountMenu();
		},
	});

	$('#signup-successful .btn-signinup').on('click', function (e) {
		e.preventDefault();
		$.fancybox.close(true);
	});
};

const showPasswordInForm = () => {
	const formgroups = Array.from(document.querySelectorAll('.form-password'));
	formgroups.forEach((formgroup) => {
		const viewPassword = formgroup.querySelector('.view-password');
		if (viewPassword) {
			let view = false;
			viewPassword.addEventListener('click', (e) => {
				if (!view) {
					formgroup
						.querySelector('.form-control')
						.setAttribute('type', 'text');
					viewPassword.classList.add('show');
					view = !view;
				} else {
					formgroup
						.querySelector('.form-control')
						.setAttribute('type', 'password');
					viewPassword.classList.remove('show');
					view = !view;
				}
			});
		}
	});
};

const countRating = () => {
	const items = document.querySelectorAll('.rating-input');
	items.forEach((item) => {
		const count = item.getAttribute('data-rate');
		const stars = item.querySelectorAll('.star');
		stars.forEach((item) => {
			item.classList.remove('fill');
		});
		for (let i = 0; i < count; i++) {
			stars[i].classList.add('fill');
		}
	});
};

const getDataValuteRating = () => {
	const forms = document.querySelectorAll('.review-form .rate-review');
	forms.forEach((item) => {
		let valueInput = item.querySelector('.rate-review-input').value;
		const stars = item.querySelectorAll('.star');
		stars.forEach((star, index) => {
			star.addEventListener('click', (e) => {
				valueInput = index + 1;
				item.querySelector('.rating-input').setAttribute(
					'data-rate',
					index + 1,
				);
				countRating();
			});
		});
	});
};

const showBlockReplyComment = () => {
	const items = document.querySelectorAll('.comment__item');
	items.forEach((item) => {
		const btn = item.querySelector('.btn-reply');
		const blockReply = item.querySelector('.input-reply');
		btn.addEventListener('click', (e) => {
			blockReply.classList.toggle('show');
		});
	});
};

const countKeyword = () => {
	const items = document.querySelectorAll('.input-reply');
	items.forEach((item) => {
		const input = item.querySelector('.textarea-control');
		const count = item.querySelector('.keyword span');
		input.addEventListener('keyup', (e) => {
			count.textContent = input.value.length;
		});
	});
};

const toggleCheckboxSelector = () => {
	const itemsSelector = Array.from(
		document.querySelectorAll('.items-checkbox-selector'),
	);
	itemsSelector.forEach((selector) => {
		if (selector.getAttribute('type') === 'radio') {
			const itemsRadio = Array.from(
				selector.querySelectorAll('.checkbox__item'),
			);
			const reset = () => {
				itemsRadio.forEach((item) => {
					item.removeAttribute('checked');
				});
			};
			itemsRadio.forEach((item) => {
				item.addEventListener('click', (e) => {
					reset();
					item.setAttribute('checked', '');
				});
			});
		} else {
			const itemsCheckbox = Array.from(
				selector.querySelectorAll('.checkbox__item'),
			);
			itemsCheckbox.forEach((item) => {
				item.addEventListener('click', (e) => {
					item.toggleAttribute('checked');
				});
			});
		}
	});
};

const filterSelect = () => {
	$('.filter-select').each(function () {
		const _this = $(this);
		const result = _this.find('.result');
		const inputs = _this.find('.checkbox__item input');
		inputs.each(function () {
			const input = $(this);
			input.on('change', function () {
				let arr = [];
				let str = '';
				inputs.each(function () {
					if (this.checked) {
						const name = this.value;
						arr.push(name);
						str = arr.join(', ');
					}
				});
				if (_this.hasClass('product__color')) {
					const images = $('img[data-filter-color]');
					images.each(function () {
						$(this).removeClass('show');
						if ($(this).attr('data-filter-color') == str) {
							$(this).addClass('show');
						} else {
						}
					});
				}
				result.html(str);
			});
		});
	});
};

const countDownSale = () => {
	// Set the date we're counting down to
	var blockCountDown = document.querySelector('.countdown-time');
	if (blockCountDown) {
		var dateEND = new Date(
			blockCountDown.getAttribute('date-over'),
		).getTime();

		// Update the count down every 1 second
		var x = setInterval(function () {
			// Get today's date and time
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = dateEND - now;

			// Time calculations for days, hours, minutes and seconds

			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours =
				days * 24 +
				Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
				);
			var minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60),
			);
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Display the result in the element
			try {
				// document.getElementById("days").innerHTML = days;
				document.getElementById('hours').innerHTML = hours;
				document.getElementById('minutes').innerHTML = minutes;
				document.getElementById('seconds').innerHTML = seconds;
				// If the count down is finished, write some text
				if (distance < 0) {
					clearInterval(x);
					blockCountDown.classList.add('hidden');
					document
						.querySelector('.countdown-over')
						.classList.remove('hidden');
				}
			} catch (error) {}
		}, 1000);
	}
};

const productInputQuantity = () => {
	const blocks_input = Array.from(
		document.querySelectorAll('.product__quantity'),
	);
	blocks_input.forEach((item) => {
		const minus = item.querySelector('.minus');
		const plus = item.querySelector('.plus');
		const input = item.querySelector('input');
		const min = Number(input.getAttribute('min'));
		const max = Number(input.getAttribute('max'));
		const checkData = () => {
			if (input.value < min) {
				input.value = min;
			}
			if (input.value > max) {
				input.value = max;
			}
		};
		plus.addEventListener('click', (e) => {
			input.value++;
			if ((min, max)) {
				checkData();
			}
		});
		minus.addEventListener('click', (e) => {
			input.value--;
			if ((min, max)) {
				checkData();
			}
		});
	});
};

const previewImage = () => {
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#avatar-preview').attr('src', e.target.result);
			};

			reader.readAsDataURL(input.files[0]);
		}
	}

	$('#imgInput').on('change', function () {
		readURL(this);
	});
};

document.addEventListener('DOMContentLoaded', () => {
	getSVGs();
	moveFlyingCart();
	initHomeSliderBanner();
	initHomeTabSliderProduct();
	initShowcaseSlider();
	initClientSlider();
	initPartnersSlider();
	initSliderProductOther();
	initSliderFilterProductByPrice();
	initClassNavigation();
	toggleMenuMobile();
	toggleFlyingCart();
	toggleFilterProductsMobile();
	toggleCategorySelectMobile();
	toggleShowSearchMobile();
	AccountSettingTab();
	customFancybox();
	showPasswordInForm();
	initSliderNewsOther();
	countRating();
	initSliderProductDetail();
	countDownSale();
	productInputQuantity();
	previewImage();
	getDataValuteRating();
	showBlockReplyComment();
	countKeyword();
	filterSelect();
	const dealHot = new Swiper('.deal-hot .swiper-container', {
		slidesPerView: 1,
		loop: true,
		speed: 1200,
	});
	const productDetailTab = new Tab('.ProductDetailTab');
	$('.item-products-wrapper').each(function () {
		const item = $(this);
		const popupPreview = item.find('.product__quickview');
		const popupBuy = item.find('.product__quickbuy');
		const btnPreview = item.find('.btn__preview');
		const btnBuy = item.find('.btn__add-cart');
		let swiper;
		btnPreview.on('click', function () {
			$.fancybox.open(popupPreview, {
				touch: false,
				afterShow: function () {
					swiper = new Swiper('.');
				},
			});
		});
		btnBuy.on('click', function () {
			$.fancybox.open(popupBuy, {
				touch: false,
			});
		});
	});
});
