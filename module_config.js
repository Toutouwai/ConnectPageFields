$(function() {
	$('.Inputfield_add_new label span').addClass('ui-button ui-widget ui-corner-all ui-state-default ui-button-text').prepend('<i class="fa fa-plus-circle"></i> ');
	$('#Inputfield_add_new').change(function() {
		$('#Inputfield_submit_save_module').trigger('click');
	});
});
