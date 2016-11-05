$(function() {
	$('select[name^="pagefield"]').filter(function() {
		return !$(this).val();
	}).empty();

	var tpl_select = $('select[name^="template"]');
	var spinner = '<i class="ui-priority-secondary fa fa-fw fa-spin fa-spinner"></i>';

	tpl_select.each(function() {
		if($(this).val()) {
			$(this).closest('.Inputfield').next().find('select[name^="pagefield"]').css('visibility', 'hidden').before(spinner);
			$.get('?cpf_inputfield=' + $(this).attr('name') + '&cpf_value=' + $(this).val(), function(data){
				var field = updateSelect(data);
				var select = $('select[name="' + field.name + '"]');
				var selected_value = $(select).val();
				$(select).empty().append(field.str).val(selected_value).prev('.fa-spinner').remove().end().css('visibility', 'visible');
			});
		}
	});

	tpl_select.on('change', function() {
		$(this).closest('.Inputfield').next().find('select[name^="pagefield"]').css('visibility', 'hidden').before(spinner);
		$.get('?cpf_inputfield=' + $(this).attr('name') + '&cpf_value=' + $(this).val(), function(data){
			var field = updateSelect(data);
			$('select[name="' + field.name + '"]').empty().append(field.str).prev('.fa-spinner').remove().end().css('visibility', 'visible');
		});
	});

	function updateSelect(data) {
		var obj = $.parseJSON(data);
		var name = obj.name;
		var options = obj.options;
		var str = '';
		if(options) {
			$.each(options, function(key, text) {
				str += '<option value="' + key + '">' + text + '</option>';
			});
		}
		return {
			name: name,
			str: str
		};
	}

});