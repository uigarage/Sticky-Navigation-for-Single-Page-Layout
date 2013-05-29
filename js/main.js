(function(window, document, undefined){
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
		elm			= {}
		;
	
	function Stickym(options) {
		_instance	= this;
		
		var 
			options	= options || {},
			$w	= $(win)	// window
		;
		
		elm.menu				= $('#primary_menu').find('a');				
		elm.articles			= {};
		elm.articles.wrap		= $('#article-wrapper');
		elm.articles.items		= $('.article');
		
		htmlbody	= $('html, body');
		
		$w.bind('load', _instance.init);
		
		//	Let the ball roll
		elm.menu.bind('click', _instance.roll);
		$w.bind('scroll', _instance.skroll);
		
		return _instance;
	}
	
	Stickym.prototype.init	= function() {
		if( win.location.hash === '' || win.pageYOffset === 0 ) {
			elm.menu
				.eq(0)
				.trigger('click')				
				.addClass('on');
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
		
		top	= parseInt( elm.articles.wrap.find( id ).position().top );
		htmlbody.animate( {scrollTop: top}, 800 );
		win.location.hash	= id;
	};

	Stickym.prototype.skroll	= function(e) {
		var
			w	= $(this),
			wH	= w.height(),
			scrollTop	= win.pageYOffset
		;

		elm.articles.items.each( function( inx ){
			var 
				article	= $(this),
				aOffsetTop = scrollTop - parseInt(article.position().top)
			;			
			
			if( aOffsetTop >= -80 && aOffsetTop <= 0 ) {
				elm.menu
					.removeClass('on')
					.filter('[href=#' + article.attr('id')+']')
					.addClass('on');
			}
		});
	};	
})(window,document);

var s	= stickym.init({});
