 var socket = io();

 console.log($('#button-emp'))

socket.on('connect', function () {
	console.log('Connected to the server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

$('#emp_insert').on('click', function (){
	$('#myDIV').show();
	$('#cook_block_insert').hide();
	$('#cs_block_insert').hide();
	$('#sg_block_insert').hide();
	$('#emp_block_search').hide();
	$('#cook_block_search').hide();
	$('#cs_block_search').hide();
	$('#sg_block_search').hide();
	$('#emp_block_update').hide();
	$('#emp_block_delete').hide();
	$('#cook_block_delete').hide();
	$('#cs_block_delete').hide();
	$('#sg_block_delete').hide();

	var template = $('#emp-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Employee's Details</u></b></h3><br><br>");
	$('#emp_block_insert').show();
	$('#emp_block_insert').html('');
	$('#emp_block_insert').append(tag);
	$('#emp_block_insert').append(html);	
	$('#button-emp').text('insert');
});

$('#cook_insert').on('click', function (){
	$('#myDIV').show();
	$('#emp_block_insert').hide();
	$('#cs_block_insert').hide();
	$('#sg_block_insert').hide();
	$('#emp_block_search').hide();
	$('#cook_block_search').hide();
	$('#cs_block_search').hide();
	$('#sg_block_search').hide();
	$('#emp_block_update').hide();
	$('#emp_block_delete').hide();
	$('#cook_block_delete').hide();
	$('#cs_block_delete').hide();
	$('#sg_block_delete').hide();

	var template = $('#cook-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Cook's Details</u></b></h3><br><br>");
	$('#cook_block_insert').show();
	$('#cook_block_insert').html('');
	$('#cook_block_insert').append(tag);
	$('#cook_block_insert').append(html);
	$('#button-cook').text('insert');
});

$('#cs_insert').on('click', function (){
	$('#myDIV').show();
	$('#emp_block_insert').hide();
	$('#cook_block_insert').hide();
	$('#sg_block_insert').hide();
	$('#emp_block_search').hide();
	$('#cook_block_search').hide();
	$('#cs_block_search').hide();
	$('#sg_block_search').hide();
	$('#emp_block_update').hide();
	$('#emp_block_delete').hide();
	$('#cook_block_delete').hide();
	$('#cs_block_delete').hide();
	$('#sg_block_delete').hide();

	var template = $('#cs-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Cleaning Staff's Details</u></b></h3><br><br>");
	$('#cs_block_insert').show();
	$('#cs_block_insert').html('');
	$('#cs_block_insert').append(tag);
	$('#cs_block_insert').append(html);
	$('#button-cs').text('insert');
});

$('#sg_insert').on('click', function (){
	$('#myDIV').show();
	$('#emp_block_insert').hide();
	$('#cook_block_insert').hide();
	$('#cs_block_insert').hide();
	$('#emp_block_search').hide();
	$('#cook_block_search').hide();
	$('#cs_block_search').hide();
	$('#sg_block_search').hide();
	$('#emp_block_update').hide();
	$('#emp_block_delete').hide();
	$('#cook_block_delete').hide();
	$('#cs_block_delete').hide();
	$('#sg_block_delete').hide();
	
	var template = $('#sg-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Security Guard's Details</u></b></h3><br><br>");
	$('#sg_block_insert').show();
	$('#sg_block_insert').html('');
	$('#sg_block_insert').append(tag);
	$('#sg_block_insert').append(html);
	$('#button-sg').text('insert');
});

$('#emp_search').on('click', function (){
	$('#myDIV').show();
	$('#emp_block_insert').html('').hide();
	$('#cook_block_insert').hide();
	$('#cs_block_insert').hide();
	$('#sg_block_insert').hide();
	$('#cook_block_search').hide();
	$('#cs_block_search').hide();
	$('#sg_block_search').hide();
	$('#emp_block_update').hide();
	$('#emp_block_delete').hide();
	$('#cook_block_delete').hide();
	$('#cs_block_delete').hide();
	$('#sg_block_delete').hide();

	var template = $('#emp-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Employee's Details</u></b></h3><br><br>");
	$('#emp_block_search').show();
	$('#emp_block_search').html('');
	$('#emp_block_search').append(tag);
	$('#emp_block_search').append(html);
	$('#button-emp').text('search');
});

$('#cook_search').on('click', function (){
	$('#myDIV').show();
	$('#emp_block_insert').hide();
	$('#cook_block_insert').html('').hide();
	$('#cs_block_insert').hide();
	$('#sg_block_insert').hide();
	$('#emp_block_search').hide();
	$('#cs_block_search').hide();
	$('#sg_block_search').hide();
	$('#emp_block_update').hide();
	$('#emp_block_delete').hide();
	$('#cook_block_delete').hide();
	$('#cs_block_delete').hide();
	$('#sg_block_delete').hide();

	var h = $("<select name='cook_mealtime'><option value='' selected>Select your option</option><option value='Breakfast'>Breakfast</option><option value='Lunch'>Lunch</option><option value='Dinner'>Dinner</option></select><br><br><select name='cook_day'><option value='' selected>Select your option</option><option value='Monday'>Monday</option><option value='Tuesday'>Tuesday</option><option value='Wednesday'>Wednesday</option><option value='Thursday'>Thursday</option><option value='Friday'>Friday</option><option value='Saturday'>Saturday</option><option value='Sunday'>Sunday</option></select><br><br>");
	var template = $('#cook-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Cook's Details</u></b></h3><br><br>");
	$('#cook_block_search').show();
	$('#cook_block_search').html('');
	$('#cook_block_search').append(tag);
	$('#cook_block_search').append(html);
	$('#button-cook').remove();
	$('#cook_block_search').append(h);
	h = $("<button id='button-cook' onclick='subCook(event)'>search</button>");
	$('#cook_block_search').append(h);
});

$('#cs_search').on('click', function (){
	$('#myDIV').show();
	$('#emp_block_insert').hide();
	$('#cook_block_insert').hide();
	$('#cs_block_insert').html('').hide();
	$('#sg_block_insert').hide();
	$('#emp_block_search').hide();
	$('#cook_block_search').hide();
	$('#sg_block_search').hide();
	$('#emp_block_update').hide();
	$('#emp_block_delete').hide();
	$('#cook_block_delete').hide();
	$('#cs_block_delete').hide();
	$('#sg_block_delete').hide();

	var template = $('#cs-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Cleaning Staff's Details</u></b></h3><br><br>");
	$('#cs_block_search').show();
	$('#cs_block_search').html('');
	$('#cs_block_search').append(tag);
	$('#cs_block_search').append(html);
	$('#button-cs').text('search');
});

$('#sg_search').on('click', function (){
	$('#myDIV').show();
	$('#emp_block_insert').hide();
	$('#cook_block_insert').hide();
	$('#cs_block_insert').hide();
	$('#sg_block_insert').html('').hide();
	$('#emp_block_search').hide();
	$('#cook_block_search').hide();
	$('#cs_block_search').hide();
	$('#emp_block_update').hide();
	$('#emp_block_delete').hide();
	$('#cook_block_delete').hide();
	$('#cs_block_delete').hide();
	$('#sg_block_delete').hide();

	var template = $('#sg-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Security Guard's Details</u></b></h3><br><br>");
	$('#sg_block_search').show();
	$('#sg_block_search').html('');
	$('#sg_block_search').append(tag);
	$('#sg_block_search').append(html);
	$('#button-sg').text('search');
});

$('#emp_update').on('click', function (){
	$('#myDIV').show();
	$('#emp_block_insert').html('').hide();
	$('#cook_block_insert').hide();
	$('#cs_block_insert').hide();
	$('#sg_block_insert').hide();
	$('#emp_block_search').html('').hide();
	$('#cook_block_search').hide();
	$('#cs_block_search').hide();
	$('#sg_block_search').hide();
	$('#emp_block_delete').hide();
	$('#cook_block_delete').hide();
	$('#cs_block_delete').hide();
	$('#sg_block_delete').hide();
	
	var template = $('#emp-form-template').html();
	$('#emp_block_update').show();
	$('#emp_block_update').html('');
	var tag = $("<h3><b><u>Employee's Details</u></b></h3><br><input type='text' name='emp_old_name' style='color:black' placeholder='Old Name...'><br><br>");
	var html = Mustache.render(template, {});
	$('#emp_block_update').append(tag);
	$('#emp_block_update').append(html);
	$('[name=emp_name]').attr('name', 'emp_new_name');
	$('[name=emp_new_name]').attr('placeholder', 'New Name...');
	$('#button-emp').text('update');
});

$('#emp_delete').on('click', function(){
	$('#myDIV').show();
	$('#emp_block_insert').html('').hide();
	$('#cook_block_insert').hide();
	$('#cs_block_insert').hide();
	$('#sg_block_insert').hide();
	$('#emp_block_search').html('').hide();
	$('#cook_block_search').hide();
	$('#cs_block_search').hide();
	$('#sg_block_search').hide();
	$('#emp_block_update').html('').hide();
	$('#cook_block_delete').hide();
	$('#cs_block_delete').hide();
	$('#sg_block_delete').hide();

	var template = $('#emp-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Employee's Details</u></b></h3><br><br>");
	$('#emp_block_delete').show();
	$('#emp_block_delete').html('');
	$('#emp_block_delete').append(tag);
	$('#emp_block_delete').append(html);
	$('#button-emp').text('delete');
});

$('#cook_delete').on('click', function(){
	$('#myDIV').show();
	$('#emp_block_insert').hide();
	$('#cook_block_insert').html('').hide();
	$('#cs_block_insert').hide();
	$('#sg_block_insert').hide();
	$('#emp_block_search').hide();
	$('#cook_block_search').html('').hide();
	$('#cs_block_search').hide();
	$('#sg_block_search').hide();
	$('#emp_block_update').hide();
	$('#emp_block_delete').hide();
	$('#cs_block_delete').hide();
	$('#sg_block_delete').hide();

	var template = $('#cook-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Cook's Details</u></b></h3><br><br>");
	$('#cook_block_delete').show();
	$('#cook_block_delete').html('');
	$('#cook_block_delete').append(tag);
	$('#cook_block_delete').append(html);
	$('#button-cook').text('delete');
});

$('#cs_delete').on('click', function(){
	$('#myDIV').show();
	$('#emp_block_insert').hide();
	$('#cook_block_insert').hide();
	$('#cs_block_insert').html('').hide();
	$('#sg_block_insert').hide();
	$('#emp_block_search').hide();
	$('#cook_block_search').hide();
	$('#cs_block_search').html('').hide();
	$('#sg_block_search').hide();
	$('#emp_block_update').hide();
	$('#emp_block_delete').hide();
	$('#cook_block_delete').hide();
	$('#sg_block_delete').hide();

	var template = $('#cs-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Cleaning Staff's Details</u></b></h3><br><br>");
	$('#cs_block_delete').show();
	$('#cs_block_delete').html('');
	$('#cs_block_delete').append(tag);
	$('#cs_block_delete').append(html);
	$('#button-cs').text('delete');
});

$('#sg_delete').on('click', function(){
	$('#myDIV').show();
	$('#emp_block_insert').hide();
	$('#cook_block_insert').hide();
	$('#cs_block_insert').hide();
	$('#sg_block_insert').html('').hide();
	$('#emp_block_search').hide();
	$('#cook_block_search').hide();
	$('#cs_block_search').hide();
	$('#sg_block_search').html('').hide();
	$('#emp_block_update').hide();
	$('#emp_block_delete').hide();
	$('#cook_block_delete').hide();
	$('#cs_block_delete').hide();

	var template = $('#sg-form-template').html();
	var html = Mustache.render(template, {});
	var tag = $("<h3><b><u>Security Guard's Details</u></b></h3><br><br>");
	$('#sg_block_delete').show();
	$('#sg_block_delete').html('');
	$('#sg_block_delete').append(tag);
	$('#sg_block_delete').append(html);
	$('#button-sg').text('delete');
});

const subEmp = event => {
	event.preventDefault();
	var but = $('#button-emp').html();
	if(but == 'update'){
		var message = {
			id: 'emp',
			old_name: $('[name=emp_old_name]').val().trim(),
			new_name: $('[name=emp_new_name]').val().trim(),
			designation: $('[name=emp_designation]').val().trim(),
			phone_no: $('[name=emp_phone]').val(),
			salary: $('[name=emp_salary]').val()
		};
	}
	else{
		var message = {
			id: 'emp',
			name: $('[name=emp_name]').val().trim(),
			designation: $('[name=emp_designation]').val().trim(),
			phone_no: $('[name=emp_phone]').val(),
			salary: $('[name=emp_salary]').val()
		};
	}
	if(but == 'insert'){
		if(message.name && message.designation && message.phone_no && message.salary){
			socket.emit('insert', message, function(result) {
				$('[name=emp_name]').val('');
				$('[name=emp_designation]').val('');
				$('[name=emp_phone]').val('');
				$('[name=emp_salary]').val('');
				$('#myModal').show();
				$('#results').text('Successfully inserted to the database');
			});
		}
		else{
			$('#myModal').show();
			$('#results').text('Oops!,It seems you have left some of the fields empty.');
		}
	}
	else if(but == 'search' || but=='delete'){
		if(message.name || message.designation || message.phone_no || message.salary){
			if(but == 'search'){
				socket.emit('search', message, function(result) {
					$('[name=emp_name]').val('');
					$('[name=emp_designation]').val('');
					$('[name=emp_phone]').val('');
					$('[name=emp_salary]').val('');
					$('#myModal').show();
					if(result.length == 0){
						$('#results').text('Sorry!, No results found.');
					}
					else{
						var output = '';
						var ol = $('<ol></ol>');
						for(i=0;i<result.length;i++){	
							output='Name: '+result[i].name+', Designation: '+result[i].designation+', Salary'+result[i].salary+', Phone no: '+result[i].phone;
							ol.append('<li>'+output+'</li><br>');
						}
						$('#results').text('');
						$('#results').append(ol);
					}
				});
			}
			else{
				socket.emit('delete', message, function(){
					$('[name=emp_name]').val('');
					$('[name=emp_designation]').val('');
					$('[name=emp_phone]').val('');
					$('[name=emp_salary]').val('');
					$('#myModal').show();
					$('#results').text('Successfully deleted from the database');
				});
			}
		}
		else{
			$('#myModal').show();
			$('#results').text('Oops!,It seems you have left all the fields empty.');
		}
	}
	else if(but == 'update'){
		if(message.old_name){
			if(message.new_name || message.designation || message.phone_no || message.salary){
				socket.emit('update', message, function(){
					$('[name=emp_old_name]').val('');
					$('[name=emp_new_name]').val('');
					$('[name=emp_designation]').val('');
					$('[name=emp_phone]').val('');
					$('[name=emp_salary]').val('');
					$('#myModal').show();
					$('#results').text('Successfully updated the database.');
				});
			}
			else{
				$('#myModal').show();
				$('#results').text('Sorry, you have to fill atleast one field.');
			}
		}
		else{
			$('#myModal').show();
			$('#results').text('Oops!,It seems you have left the old name field empty.');
		}
	}
}


const subCook = event => {
	event.preventDefault();
	var val = $('#button-cook').html();
	if(val == 'update'){
		var message = {
			id: 'cook',
			old_name: $('[name=cook_old_name]').val().trim(),
			new_name: $('[name=cook_new_name]').val().trim(),
			dish: $('[name=cook_dish]').val().trim()
		};
	}
	else if(val == 'insert'){
		var message = {
			id: 'cook',
			name: $('[name=cook_name]').val().trim(),
			dish: $('[name=cook_dish]').val().trim(),
		};
	}
	else{
		var message = {
			id: 'cook',
			name: $('[name=cook_name]').val(),
			dish: $('[name=cook_dish]').val(),
			mealtime: $('[name=cook_mealtime]').val(),
			day: $('[name=cook_day]').val()
		};
	}
	if(val == 'insert'){
		if(message.name && message.dish){
			socket.emit('insert', message, function(result) {
				$('[name=cook_name]').val('');
				$('[name=cook_dish]').val('');
				$('#myModal').show();
				if(result == 'C')
					$('#results').text('Successfully inserted to the database');
				else if(result == 'I')
					$('#results').text('Oops!, Check that you have entered correct values');
				else
					$('#results').text('Employee is not listed as a cook');

			});
		}
		else{
			$('#myModal').show();
			$('#results').text('Oops!,It seems you have left all the fields empty.');
		}
	}
	else if(val == 'search' || val == 'delete'){
		if(message.name || message.dish || message.mealtime || message.day){
			if(val == 'search'){
				socket.emit('search', message, function(result) {
					$('[name=cook_name]').val('');
					$('[name=cook_dish]').val('');
					$('[name=cook_mealtime]').val('');
					$('[name=cook_day]').val('');
					$('#myModal').show();
					if(result.length == 0){
						$('#results').text('Sorry!, No results found.');
					}
					else{
						var output = '';
						var ol = $('<ol></ol>');
						for(i=0;i<result.length;i++){
							output='Name: '+result[i].name+', Dish: '+result[i].dish+', Mealtime: '+result[i].meal_time+', Day: '+result[i].day;
							ol.append('<li>'+output+'</li><br>');
						}
						$('#results').text('');
						$('#results').append(ol);
					}
				});
			}
			else{
				if(message.name && message.dish){
					socket.emit('delete', message, function(result) {
						$('[name=cook_name]').val('');
						$('[name=cook_dish]').val('');
						$('[name=cook_mealtime]').val('');
						$('[name=cook_day]').val('');
						$('#myModal').show();
						$('#results').text('Successfully deleted from the database.');
					});
				}
				else{
					$('#myModal').show();
					$('#results').text('Hey there, please fill leftover fields.');
				}
			}
		}
		else{
			$('#myModal').show();
			$('#results').text('Oops!,It seems you have all the fields empty.');
		}
	}
}

const subCS = event => {
	event.preventDefault();
	var val = $('#button-cs').html();
	var message = {
		id: 'cs',
		name: $('[name=cs_name]').val().trim(),
		mealtime: $('[name=cs_mealtime]').val().trim(),
		day: $('[name=cs_day]').val().trim()
	};
	if(val == 'insert'){
		if(message.name && message.mealtime && message.day){
			socket.emit('insert', message, function(result) {
				$('[name=cs_name]').val('');
				$('[name=cs_mealtime]').val('');
				$('[name=cs_day]').val('');
				$('#myModal').show();
				if(result == 'C')
					$('#results').text('Successfully inserted to the database');
				else if(result == 'I')
					$('#results').text('Oops!, Check that you have entered correct values');
				else
					$('#results').text('Employee not listed as a cleaning staff');
			});
		}
		else{
			$('#myModal').show();
			$('#results').text('Oops!,It seems you have left all the fields empty.');
		}
	}
	else if(val == 'search' || val == 'delete'){
		if(message.name || message.mealtime || message.day){
			if(val == 'search'){
				socket.emit('search', message, function(result) {
					$('[name=cs_name]').val('');
					$('[name=cs_mealtime]').val('');
					$('[name=cs_day]').val('');
					$('#myModal').show();
					if(result.length == 0){
						$('#results').text('Sorry!, No results found.');
					}
					else{
						var output = '';
						var ol = $('<ol></ol>');
						for(i=0;i<result.length;i++){
							output='Name: '+result[i].name+', Mealtime: '+result[i].meal_time+', Day: '+result[i].day;
							ol.append('<li>'+output+'</li><br>');
						}
						$('#results').text('');
						$('#results').append(ol);
					}
				});
			}
			else{
				socket.emit('delete', message, function(result) {
					$('[name=cs_name]').val('');
					$('[name=cs_mealtime]').val('');
					$('[name=cs_day]').val('');
					$('#myModal').show();
					if(result == 'C')
						$('#results').text('Successfully deleted from the database.');
					else
						$('#results').text('Please enter correct name to delete.');
				});
			}
		}
		else{
			$('#myModal').show();
			$('#results').text('Oops!,It seems you have left all the fields empty.');
		}
	}
}

const subSG = event => {
	event.preventDefault();
	var val = $('#button-sg').html();
	var message = {
			id: 'sg',
			name: $('[name=sg_name]').val().trim(),
			gate_no: $('[name=sg_gate_no]').val().trim(),
			day: $('[name=sg_day]').val().trim()
	};
	if(val == 'insert'){
		if(message.name && message.day && message.gate_no){
			socket.emit('insert', message, function(result) {
				$('[name=sg_name]').val('');
				$('[name=sg_gate_no]').val('');
				$('[name=sg_day]').val('');
				$('#myModal').show();
				if(result == 'C')
					$('#results').text('Successfully inserted to the database');
				else if(result == 'I')
					$('#results').text('Oops!, Check that you have entered correct values');
				else
					$('#results').text('Employee not listed as a security guard');
			});
		}
		else{
			$('#myModal').show();
			$('#results').text('Oops! It seems you have left some of the fields empty.');
		}
	}
	else if(val == 'search' || val == 'delete'){
		if(message.name || message.day || message.gate_no){
			if(val == 'search'){
				socket.emit('search', message, function(result) {
					$('[name=sg_name]').val('');
					$('[name=sg_gate_no]').val('');
					$('[name=sg_day]').val('');
					$('#myModal').show();
					if(result.length == 0)
						$('#results').text('Sorry!, No results found.');
					else{
						var output = '';
						var ol = $('<ol></ol>');
						for(i=0;i<result.length;i++){
							output='Name: '+result[i].name+', Gate no: '+result[i].gate_no+', Day: '+result[i].day;
							ol.append('<li>'+output+'</li><br>');
						}
						$('#results').text('');
						$('#results').append(ol);
					}
				});
			}
			else{
				socket.emit('delete', message, function(result) {
					$('[name=sg_name]').val('');
					$('[name=sg_gate_no]').val('');
					$('[name=sg_day]').val('');
					$('#myModal').show();
					if(result == 'C')
						$('#results').text('Successfully deleted from the database.');
					else
						$('#results').text('Please enter correct name to delete.');
				});
			}
		}
		else{
			$('#myModal').show();
			$('#results').text('Oops! It seems you have left some of the fields empty.');
		}
	}
}


