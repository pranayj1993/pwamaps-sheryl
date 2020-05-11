$(document).ready(function () {

$(".navbar-toggle").on('click',function(){
	if($(this).hasClass('open')){
		$(".mobile-nav").removeClass("show-menu");
        $(".navbar-toggle").removeClass("open").addClass("menu");
		//$(".site-search, .search_content .sgds-icon-cross").hide();
		//$(".search_content .sgds-icon-search").show();
	}
	else{
		$(".js-input-search").val('');
		$(".mobile-nav").addClass("show-menu");
		$(".navbar-toggle").removeClass("menu").addClass("open");
		$('.mobile-nav-item').removeClass('on-hover');
		$('.mobile-nav-subpanel').removeClass('active').hide();
	}
});


$(".search_content .sgds-icon-cross").hide();
	$(".search_content .sgds-icon-search").on('click',function(){
		$(".js-input-search").val('');
		$(".site-search, .search_content .sgds-icon-cross").show();
		$(".search_content .sgds-icon-search, .alert-bar").hide();
	});
	$(".search_content .sgds-icon-cross").on('click',function(){
		$(".site-search, .search_content .sgds-icon-cross").hide();
		$(".search_content .sgds-icon-search").show();
	});


});