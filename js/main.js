$(document).ready(function(){


	$('.btn-1').addClass('select');
    $('.price-1').addClass('table-selected');


	$('.btn-1').click(function(){
		$('.btn-1').addClass('select');
		$('.btn-2').removeClass('select');

			$('.price-1').addClass('table-selected');
			$('.price-2').removeClass('table-selected');


	});
	$('.btn-2').click(function(){
		$('.btn-1').removeClass('select');
		$('.btn-2').addClass('select');


		$('.price-1').removeClass('table-selected');
		$('.price-2').addClass('table-selected');


	});


	
});