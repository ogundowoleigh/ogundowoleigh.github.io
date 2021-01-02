/*!
 * teak-html v1.0.1
 * Collection of high quality HTML templates created by digital agency for digital agencies and freelancers.
 * (c) 2019 Themejack
 * SEE LICENSE IN LICENSE.md
 */

( (function( $ ) {
	/**
	 * Helper function for checking which animation event is being used (cross browser issue)
	 */
	function whichAnimationEvent() {
		var t;
		var element = document.createElement( 'fakeelement' );
		var animations = {
			animation: 'animationend',
			OAnimation: 'oAnimationEnd',
			MozAnimation: 'animationend',
			WebkitAnimation: 'webkitAnimationEnd'
		};

		for ( t in animations ) {
			if ( element.style[ t ] !== undefined ) {
				return animations[ t ];
			}
		}
	}

	/**
	 * Viewport check helper method
	 */
	$.fn.isInViewport = function() {
		var bounding = this[ 0 ].getBoundingClientRect();

		return (
			bounding.top >= 0 &&
			bounding.left >= 0 &&
			bounding.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
			bounding.right <= ( window.innerWidth || document.documentElement.clientWidth )
		);
	};

	/**
	 * Projects slider
	 */
	( (function() {
		var $slider = $( '.js-projects-slider' );
		var $hint = $( '.js-projects-slider-hint' );
		var $hintIcon = $( '.js-projects-slider-hint-icon' );

		if ( $slider.length ) {
			// Slider initialization
			// eslint-disable-next-line
			var slider = new Swiper ( $slider.find( '.swiper-container' ), {
				speed: 600,
				grabCursor: true,
				slideToClickedSlide: true,
				preventClicks: false,
				preventClicksPropagation: false,
				touchStartPreventDefault: false,
				spaceBetween: 30,
			} );

			// Display hint when in viewport
			$( window ).on( 'resize scroll', (function() {
				if ( $hint.isInViewport() && ! $hint.hasClass( 'is-hidden' ) ) {
					$hint.addClass( 'is-visible' );
				}
			}) );

			// Trigger scroll event for initial check
			$( window ).scroll();

			// Remove hint when necessary
			$hintIcon[ 0 ].addEventListener(
				whichAnimationEvent(),
				(function() {
					$slider.on(
						'mouseenter mouseleave mousedown mouseup touchstart touchmove touchend',
						(function() {
							$hint.removeClass( 'is-visible' );
							$hint.addClass( 'is-hidden' );
						})
					);
				})
			);
		}
	}) )();
}) )( jQuery );
