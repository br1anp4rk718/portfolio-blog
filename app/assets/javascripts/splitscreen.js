$(document).ready(function() {

	// Sliding functionality - need to refactor

	$('.first-half').on('click', function() {
		$('.first-half').hide("slide", { direction:"left"}, 2000);
		$('.second-half').on('mouseenter', function() {
			$('.first-half').show("slide", {direction:"left"}, 2000);
		});
	});
	
	$('.second-half').on('click', function() {
		$('.second-half').hide("slide", { direction:"right"}, 2000);
			$('.first-half').on('mouseenter', function() {
				$('.second-half').show("slide", {direction:"right"}, 2000);
		});
	});
});