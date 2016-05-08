$(document).ready(function(){
	// $('p').click(function(){
	// 	alert("this is a paragraph element");
	// })
	$('h1').click(function(){
		$('p').fadeOut('slow');
	});

	$('#clickMe').click(function(){
		$('.top').toggleClass('transparent'); 
	});

	$('#scrollup').click(function(){
		// alert('scroll to top');
		$('html,body').animate({scrollTop: 0}, 'slow');	
	});
 
});