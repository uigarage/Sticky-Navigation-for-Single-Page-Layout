(function(window, document, undefined) {
	'use strict';
	
	var log	= function(o) {
		
		if(window.console)
			console.log(o);
		
	};
	
	var stickym	= window.stickym = {
		init:	function(options) {
			return new Stickym(options);
		},
		VERSION: '0.1'
	};
	
	var 
		win			= window,
		hasProp		= Object.prototype.hasOwnProperty,
		Math 		= window.Math,
		getStyle	= window.getComputedStyle,
		body,
		documentElement,
		htmlbody,
		_instance,
		elm			= {},
		speed		= 800
		;
	
	function Stickym(options) {
		_instance	= this;
		
		var 
			options	= options || {},
			$w	= $(win)	// window
		;
		
		elm.menu		= $('#primary_menu').find('a');				
		elm.art			= {};
		elm.art.wrap	= $('#article-wrapper');
		elm.art.items	= $('.article');
		
		htmlbody	= $('html, body');
		
		$w.bind('load', _instance.init);
		
		//	Let the ball roll
		elm.menu.bind('click', _instance.roll);
		$w.bind('scroll', _instance.skroll);
		
		return _instance;
	}
	
	Stickym.prototype.init	= function() {
		
		if( win.location.hash === '' || $(window).scrollTop() === 0 ) {
			elm.menu
				.eq(0)
				.trigger('click')			
				.addClass('on')
				.css({ opacity: 1.0 })	//	IE < 8 hack (not tested in IE 9)
			;
		}
	};
	
	//	scroll page based on menu call to action	
	Stickym.prototype.roll	= function(e) {
		e.preventDefault();
		var 
			$mi, id, top
		;
		$mi	= $(this);
		id	= $mi.attr('href');
		//id	= id.substring(1);	// eliminate #
		
		top	= parseInt( elm.art.wrap.find( id ).position().top );
		htmlbody.animate( {scrollTop: top}, speed, function() {
			win.location.hash	= id;
		});        		
	};

	Stickym.prototype.skroll	= function(e) {
		var
			w	= $(this),
			wH	= w.height(),
			scrollTop	= w.scrollTop()
		;

		elm.art.items.each( function( inx ) {
			var
				art		= $(this),	//	article
				artId	= art.attr('id'),
				artPosTop	= parseInt(art.position().top),
				aOffsetTop	= scrollTop - artPosTop,	// Not neccessary
				opacity
			;

			if( (scrollTop + (wH/2)) > artPosTop  ) {
				elm.menu
					.removeClass('on')
					.filter('[href=#' + art.attr('id')+']')
					.addClass('on');
			}

			//	scrollTop > artpostop && artPosTop + artHeight < scrollTop
			if( (scrollTop + wH) > artPosTop && aOffsetTop <= (art.height()/2) ) {
				
				opacity	= parseFloat( ( (scrollTop)/artPosTop ), 1 ).toFixed(2);        				
				if( opacity === 'Infinity' || opacity === 'NaN' ) {
					opacity = 1.0;
				}

				art.css( {
					opacity: opacity
				});
			}
		});
	};        	
})(window,document);

var s	= stickym.init({});
