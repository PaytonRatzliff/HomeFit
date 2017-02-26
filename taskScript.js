window.onload = function() {
	document.getElementById("HVACButton").onclick = function(){loadTasks()};
	document.getElementById("close").onclick = function(){closeTasks()};
	document.getElementById("instructions").onclick = function(){instructions()};
	document.getElementById("DoneButton").onclick = function(){tasksDone()};
	document.getElementById("ReminderButton").onclick = function(){sendReminder()};
	document.getElementById("NotRelevantButton").onclick = function(){tasksNotRelevant()};
};

function closeTasks() {
	document.getElementById("tasksModel").style.display = "none";
}

function loadTasks() {
	document.getElementById("tasksModel").style.display = "block";
}

function instructions() {
	window.open("instructions.html", '_blank');
}

function tasksDone() {

	var checkBoxes = document.getElementsByName('checkBoxName');

	for(var i = 0; i < checkBoxes.length; ++i)
	{
		if (checkBoxes[i].checked)
		{
			checkBoxes[i].style.display = "none";
			var elemNumber = i + 1;
			document.getElementById("checkBoxLabel" + elemNumber).style.display = "none";
		}
	}
}

function tasksNotRelevant() {

	var checkBoxes = document.getElementsByName('checkBoxName');

	for(var i = 0; i < checkBoxes.length; ++i)
	{
		if (checkBoxes[i].checked)
		{
			checkBoxes[i].style.display = "none";
			var elemNumber = i + 1;
			document.getElementById("checkBoxLabel" + elemNumber).style.display = "none";
		}
	}
}

function sendReminder() {

	// var checkBoxes = document.getElementsByName('checkBoxName');
	// for(var i = 0; i < checkBoxes.length; ++i)
	// {
	// 	if (checkBoxes[i].checked)
	// 	{
	// 		alert("A reminder has been sent to your email and phone.");
	// 		return;
	// 	}
	// }

	alert("Please check one or more tasks for the reminder notification");

	// alert("0")
	// var twilio = require('twilio');
	// alert("1")
	// var client = twilio('AC75bccad271450edbcf17ff5d922f3e4a', '9e8995cd541ca99e74521423c995f32c');
	// alert("2")
 //  	client.sendMessage( { to:'4255771308', from:'2069008210', body:'Hello! Hope you’re having a good day!' }, function( err, data ) {});
	
 	alert('0')
	var service_id = 'gmail';
	var template_id = 'template_hsG6LtN8';
	var template_params = {
	to_name: 'Ed L',
	from_name: 'Abdulra Salama',
	reply_email: 'john@doe.com',
	message: 'This is awesome! Abdul'
	};
	alert('1')
	emailjs.send(service_id,template_id,template_params);
	alert('2')


// 	cronJob = require('cron').CronJob;

// 	var textJob = new cronJob( '0 18 * * *', function(){
//   	client.sendMessage( { to:'YOURPHONENUMBER', from:'YOURTWILIONUMBER', body:'Hello! Hope you’re having a good day!' }, function( err, data ) {});
// },  null, true);


}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	// Get the modal
	var tasksModel = document.getElementById('tasksModel');
    if (event.target == tasksModel) {
        tasksModel.style.display = "none";
    }
}