//	d is DOM, contains mostly cached HTML elements.
//	v is variables, namespacing as much possible
var d = {}, v = {};

d.primary_menu	= $('#primary_menu');
d.primary_menu_anc	= d.primary_menu.find('a');
d.articles	= {};
d.articles.wrap		= $('#article-wrapper');
d.articles.items	= $('.article');

d.primary_menu_anc.bind('click', initMenuAction);

v.t	= [];

function initMenuAction(e) {
	e.preventDefault();
	var $mi, id, top;
	$mi	= $(this);
	id	= $mi.attr('href');
	//id	= id.substring(1);	// eliminate #
	
	top	= parseInt(d.articles.wrap.find(id).position().top);
	
	
	$('html, body').animate({scrollTop: top}, 800);
};

$(window).bind('scroll', function(e) {
	var $win = $(this);
	var hilited_menu;
	var scrollDir = 1;
	
	
	
	d.articles.items.each(function(idx){
		var article	= $(this);
		var top;
		var speed = 10;
		var posY;
		
		
		if(typeof v.t[idx] == 'undefined') {
			v.t[idx]	= parseInt(article.position().top);
		}
		
		var offTop = $win.scrollTop() - v.t[idx];
		
		//	field of vision
		if(offTop > -($win.height()) && offTop < 0) {
			
			posY	= parseInt(article.css('top'),10);
			
			if(posY < 0) {
				posY = posY * -1;
			}
			
			posY+=2;
			
			console.log('PosY: ' + posY);
			
			
			article.css({
			//	top: -(posY)   + 'px'
			});
			
			console.log( 'Element ' + article.attr('id') + ' is in the field of vision and top pos is: ' + parseInt(article.css('top'),10));
			
		}
			
		
		if( offTop >=-80 && offTop <= 0 ) {		
			d.primary_menu_anc.removeClass('on');
			hilited_menu	= d.primary_menu_anc.filter('[href=#' + article.attr('id')+']');
			hilited_menu.addClass('on');
		}
		
		
		if( article.attr('id') == 'menu_one') {
			console.log( article.attr('id') + ' : ' + v.t[idx] + ' Offsetted: ' + offTop  +' Win Scroll Top: ' + $win.scrollTop() + ' Win H: ' + $win.height());
		}
		//	Parallax Effect
		
	});
});



