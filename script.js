var l33t = function(inText){
	var exText = inText;
	var l33tChance = 3;
	for(i=0;i<inText.length;i++){
		if(exText.charAt(i) === 'i'){
			if(Math.floor(Math.random()*10) < l33tChance){
				exText.replace("i","1");
			}
		}
		if(exText.charAt(i) === 'e'){
			if(Math.floor(Math.random()*10) < l33tChance){
				exText.replace("e","3");
			}
		}
		if(exText.charAt(i) === 'a'){
			if(Math.floor(Math.random()*10) < l33tChance){
				exText.replace("a","4");
			}
		}
		if(exText.charAt(i) === 'o'){
			if(Math.floor(Math.random()*10) < l33tChance){
				exText.replace("o","0");
			}
		}
	}
	return exText;
}



$(function(){
	$('.card').draggable({
		revert: true, stop: function( event, ui ) {}, drag: function(event, ui) {}
	});
	$('.nameInput').val(l33t($('.nameInput').val()));
	$('.card').click(function(){
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
		$(this).slideDown('slow');
	});
	$('.card').on("drag", function( event, ui ){
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
		$('.selected').css('width', '6%');
		$('.selected').css('height', '12.5%');
		$('.selected').css('margin-right', '4%');
		$('.selected').css('margin-left', '4%');
	});
	$('.card').on("dragstop", function( event, ui ){
		$('.selected').css('width', '12%');
		$('.selected').css('height', '25%');
		$('.selected').css('margin-right', '1%');
		$('.selected').css('margin-left', '1%');
	});
	$('.subBox').on('submit', function(){	
		if($('.nameInput').val() === 'pizza_killer'){
			$(this).val('Come on, kid...');
		}
	});
});
