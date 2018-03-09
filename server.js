var express = require('express');
var http = require('http');
var path = require('path');
var mysql = require('mysql');
var socketIO = require('socket.io');

var con;

var app = express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(path.join(__dirname + '/views')));

io.on('connection', (socket) => {
	console.log('New user connected');
	var sql='', query='';

	socket.on('insert', (message, callback) => {
		if(message.id == 'emp'){
			sql = 'insert into employee(name,designation,phone,salary) values('+mysql.escape(message.name)+','+mysql.escape(message.designation)+','+mysql.escape(message.phone_no)+','+mysql.escape(message.salary)+');';
			con.query(sql, (err, result) => {
				if (err)
					throw err;
				callback();
			});
		}
		else if(message.id == 'cook'){
			con.query('select emp_id, designation from employee where name='+mysql.escape(message.name)+' ;', (err, result) => {
				if (err)
					throw err;
				if(result.length){
					if(result[0].designation == 'Cook'){
						id=result[0].emp_id;
						con.query('select dish_id from dish where dish='+mysql.escape(message.dish)+' ;', (err, result) => {
							if (err)
								throw err;
							if(result.length){
								dish_id=result[0].dish_id;
								sql = 'insert into cook values('+mysql.escape(id)+','+mysql.escape(dish_id)+');';
								con.query(sql, (err, result) => {
									if (err)
										throw err;
									callback('C');
								});
							}
						});
					}
					else
						callback('N');
				}
				else
					callback('I');
				
			});
		}
		else if(message.id == 'cs'){
			var id;
			con.query('select emp_id, designation from employee where name='+mysql.escape(message.name)+' ;', (err, result) => {
				if (err)
					throw err;
				if(result[0]){
					if(result[0].designation == 'Cleaning Staff'){
						id=result[0].emp_id;
						sql = 'insert into cleaning_staff values('+mysql.escape(id)+','+mysql.escape(message.mealtime)+','+mysql.escape(message.day)+');';
						con.query(sql, (err, result) => {
							if (err)
								throw err;
							callback('C');
						});
					}
					else
						callback('N');
				}
				else
					callback('I');
			});
		}
		else{
			var id;
			con.query('select emp_id,designation from employee where name='+mysql.escape(message.name)+';', (err, result) => {
				if (err)
					throw err;
				if(result[0]){
					if(result[0].designation == 'Security Guard'){
						id=result[0].emp_id;
						sql = 'insert into security_guard values('+mysql.escape(id)+','+mysql.escape(message.gate_no)+','+mysql.escape(message.day)+');';
						con.query(sql, (err, result) => {
							if (err)
								throw err;
							callback('C');
						});
					}
					else
						callback('N');
				}
				else
					callback('I');
			});
		}
	});

	socket.on('search', (message, callback) => {
		if(message.id == 'emp'){
			console.log(message);
			sql = 'select * from employee where ';
			if(message.name){
				sql = sql+'name='+mysql.escape(message.name);
			}
			if(message.designation){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql+' and designation='+mysql.escape(message.designation);
				}
				else{
					sql = sql+'designation='+mysql.escape(message.designation);
				}
			}
			if(message.phone_no){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql+' and phone='+mysql.escape(message.phone_no);
				}
				else{
					sql = sql+'phone='+mysql.escape(message.phone_no);
				}
			}
			if(message.salary){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql+' and salary='+mysql.escape(message.salary);
				}
				else{
					sql = sql+'salary='+mysql.escape(message.salary);
				}
			}
			sql = sql+';';
			con.query(sql, (err, result)=>{
				if(err)
					throw err;
				console.log(result);
				callback(result);
			});
		}

		else if(message.id == 'cook'){
			
			sql = 'select * from (select e.name,d.meal_time,d.day,d.dish from (select e.name, c.dish_id from employee as e inner join cook as c on e.emp_id=c.emp_id) as e inner join dish as d where e.dish_id=d.dish_id) as p where ';
			query = sql;
			if(message.name){
				query = query + 'p.name='+mysql.escape(message.name.trim());
			}
			if(message.day){
				if(query.substr(query.length-6, 5) != 'where'){
					query = query + 'and p.day='+mysql.escape(message.day.trim());
				}
				else
					query = query + 'p.day='+mysql.escape(message.day.trim());
			}
			if(message.dish){
				if(query.substr(query.length-6, 5) != 'where'){
					query = query + 'and p.dish='+mysql.escape(message.dish.trim());
				}
				else
					query = query + 'p.dish='+mysql.escape(message.dish.trim());
			}
			if(message.mealtime){
				if(query.substr(query.length-6, 5) != 'where'){
					query = query + 'and p.meal_time='+mysql.escape(message.mealtime.trim());
				}
				else
					query = query + 'p.meal_time ='+mysql.escape(message.mealtime.trim());
			}
			query = query+';';
			con.query(query, (err, result)=>{
				if(err)
					throw err;
				callback(result);
			});
		}

		else if(message.id == 'cs'){
			sql = 'select * from (select e.name, cs.meal_time, cs.day from employee as e join cleaning_staff as cs on e.emp_id=cs.emp_id) as e where ';
			if(message.name){
				sql = sql + 'e.name ='+mysql.escape(message.name);
			}
			if(message.day){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql + ' and e.day='+mysql.escape(message.day);
				}
				else
					sql = sql + 'e.day ='+mysql.escape(message.day);
			}
			if(message.mealtime){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql + ' and e.meal_time='+mysql.escape(message.mealtime);
				}
				else
					sql = sql + 'e.meal_time ='+mysql.escape(message.mealtime);
			}
			sql = sql+';';
			con.query(sql, (err, result) => {
				if(err)
					throw err;
				callback(result);
			});
		}

		else{
			sql = 'select * from (select e.name, sg.gate_no, sg.day from employee as e join security_guard as sg on e.emp_id=sg.emp_id) as e where ';
			if(message.name){
				sql = sql + 'e.name ='+mysql.escape(message.name);
			}
			if(message.gate_no){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql + ' and e.gate_no='+mysql.escape(message.gate_no);
				}
				else
					sql = sql + 'e.gate_no ='+mysql.escape(message.gate_no);
			}
			if(message.day){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql + ' and e.day='+mysql.escape(message.day);
				}
				else
					sql = sql + 'e.day ='+mysql.escape(message.day);
			}
			sql = sql+';';
			con.query(sql, (err, result)=>{
				if(err)
					throw err;
				callback(result);
			});
		}
	});

	socket.on('update', (message, callback) => {
		if(message.id == 'emp'){
			sql = 'update employee set ';
			query =' where name='+mysql.escape(message.old_name);
			if(message.new_name){
				sql = sql + 'name='+mysql.escape(message.new_name);
			}
			if(message.designation){
				if(sql.substr(sql.length-4, 3) != 'set'){
					sql = sql + ',';
				}
				sql = sql + 'designation='+mysql.escape(message.designation);
			}
			if(message.phone_no){
				if(sql.substr(sql.length-4, 3) != 'set'){
					sql = sql + ',';
				}
				sql = sql + 'phone='+mysql.escape(message.phone_no);
			}
			if(message.salary){
				if(sql.substr(sql.length-4, 3) != 'set'){
					sql = sql + ',';
				}
				sql = sql + 'salary='+mysql.escape(message.salary);
			}
			con.query(sql+query+';', (err, result) => {
				if(err)
					throw err;
				callback();
			});
		}
		else if(message.id == 'cook'){
			sql = 'update cook set ';
			if(message.new_name){
				sql = sql + 'name='+mysql.escape(message.new_name);
				query ='where name='+mysql.escape(message.old_name);
			}
			if(message.dish){
				con.query('select dish_id from dish where dish='+mysql.escape(message.dish), (err, result) => {
					if(err)
						throw err;
					dish_id = result[0].dish_id;
					if(sql.substr(sql.length-4, 3) != 'set'){
						sql = sql + ',';
						query = query + 'and dish_id='+mysql.escape(dish_id);
					}
					sql = sql + 'dish_id='+mysql.escape(dish_id);
				});
			}
		}
	});

	socket.on('delete', (message, callback) => {
		if(message.id == 'emp'){
			sql = 'delete from employee where ';
			if(message.name){
				sql = sql+'name='+mysql.escape(message.name);
			}
			if(message.designation){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql+' and designation='+mysql.escape(message.designation);
				}
				else{
					sql = sql+'designation='+mysql.escape(message.designation);
				}
			}
			if(message.phone_no){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql+' and phone='+mysql.escape(message.phone_no);
				}
				else{
					sql = sql+'phone='+mysql.escape(message.phone_no);
				}
			}
			if(message.salary){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql+' and salary='+mysql.escape(message.salary);
				}
				else{
					sql = sql+'salary='+mysql.escape(message.salary);
				}
			}
			sql = sql+';';
			con.query(sql, (err, result)=>{
				if(err)
					throw err;
				callback();
			});
		}
		else if(message.id == 'cook'){
			sql = 'delete from cook where ';
			con.query('select emp_id from employee where name='+mysql.escape(message.name), (err, result) => {
				if(err)
					throw err;
				if(result[0]){
					id = result[0].emp_id;
					sql = sql + 'emp_id='+mysql.escape(id);
					con.query('select dish_id from dish where dish='+mysql.escape(message.dish), (err, result) => {
						if(err)
							throw err;
						if(result[0]){
							dish_id = result[0].dish_id;
							sql = sql + ' and dish_id='+mysql.escape(dish_id);
							con.query(sql+';', (err, result) => {
								if(err)
									throw err;
								callback('C');
							});
						}
						else
							callback('I');
					});
				}
				else
					callback('I');
			});
		}
		else if(message.id == 'cs'){
			sql = 'delete from cleaning_staff where ';
			if(message.mealtime){
				sql = sql + 'meal_time='+mysql.escape(message.mealtime);
			}
			if(message.day){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql + ' and ';
				}
				sql = sql + 'day='+mysql.escape(message.day);
			}
			if(message.name){
				con.query('select emp_id from employee where name='+mysql.escape(message.name), (err, result) => {
					if(err)
						throw err;
					if(result[0]){
						id = result[0].emp_id;
						sql = sql + 'emp_id='+mysql.escape(id);
						con.query(sql+';', (err, result) => {
							if(err)
								throw err;
							callback('C');
						});
					}
					else
						callback('I');
				});
			}
			else{
				con.query(sql+';', (err, result) => {
					if(err)
						throw err;
					callback('C');
				});
			}
		}
		else if(message.id == 'sg'){
			sql = 'delete from security_guard where ';
			if(message.day){
				sql = sql + 'day='+mysql.escape(message.day);
			}
			if(message.gate_no){
				if(sql.substr(sql.length-6, 5) != 'where'){
					sql = sql + ' and ';
				}
				sql = sql + 'gate_no='+mysql.escape(message.gate_no);
			}
			if(message.name){
				con.query('select emp_id from employee where name='+mysql.escape(message.name), (err, result) => {
					if(err)
						throw err;
					if(result[0]){
						id = result[0].emp_id;
						sql = sql + 'emp_id='+mysql.escape(id);
						con.query(sql+';', (err, result) => {
							if(err)
								throw err;
							callback('C');
						});
					}
					else
						callback('I');
				});
			}
			else{
				con.query(sql+';', (err, result) => {
					if(err)
						throw err;
					callback('C');
				});
			}
		}
	});

	socket.on('disconnect', () => {
		console.log('User disconnected');
	});

});

server.listen(3000, () => {
	console.log('Server connected at port 3000.');
	con = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : 'light97isawesome',
		  database : 'mess'
		});

	con.connect((err) => {
		if(err)
			throw err;
		else
			console.log('Mysql connected');
	});
});
