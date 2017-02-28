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

	var numChecked = 0;
	var checkBoxes = document.getElementsByName('checkBoxName');
	var tasksText = '';
	for(var i = 0; i < checkBoxes.length; ++i)
	{
		if (checkBoxes[i].checked)
		{
			numChecked = numChecked + 1;
			var labelNum = i + 1;
			var label = document.getElementById('checkBoxLabel' + labelNum)
			tasksText += label.textContent.trim();
			tasksText += "\n";
		}
	}

	if (numChecked == 0)
	{
		alert("Please check one or more tasks for the reminder notification");
		return;
	}

	// Send Text Notification
	var body = 'HomeFit Tasks Notification\n';
	body += 'This is a reminder for the following tasks:\n';
	body += tasksText;

	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "https://api.twilio.com/2010-04-01/Accounts/AC75bccad271450edbcf17ff5d922f3e4a/Messages.json", false ); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization", "Basic QUM3NWJjY2FkMjcxNDUwZWRiY2YxN2ZmNWQ5MjJmM2U0YTo5ZTg5OTVjZDU0MWNhOTllNzQ1MjE0MjNjOTk1ZjMyYw==");
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    // xmlHttp.send('To=4255771308&From=%2B12069008210&Body=' + body);


    // Send Email Notification
    var service_id = 'gmail';
	var template_id = 'template_hsG6LtN8';
	var template_params = {
	to_email: 'salama.abdul@gmail.com',
	to_name: 'James',
	from_name: 'HomeFit',
	message_body: body,
	};

	// emailjs.send(service_id,template_id,template_params);


	alert("A reminder has been sent to your email and phone for the following tasks:\n" + tasksText);





	//var twilio = require('twilio');
	//alert("1")
	// var client = twilio('AC75bccad271450edbcf17ff5d922f3e4a', '9e8995cd541ca99e74521423c995f32c');
	// alert("2")
 //  	client.sendMessage( { to:'4255771308', from:'2069008210', body:'Hello! Hope you’re having a good day!' }, function( err, data ) {});
	
 // 	alert('0')



// 	cronJob = require('cron').CronJob;

// 	var textJob = new cronJob( '0 18 * * *', function(){
//   	client.sendMessage( { to:'YOURPHONENUMBER', from:'YOURTWILIONUMBER', body:'Hello! Hope you’re having a good day!' }, function( err, data ) {});
// },  null, true);


	

}

function httpPost(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "https://api.twilio.com/2010-04-01/Accounts/AC75bccad271450edbcf17ff5d922f3e4a/Messages.json", false ); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization", "Basic QUM3NWJjY2FkMjcxNDUwZWRiY2YxN2ZmNWQ5MjJmM2U0YTo5ZTg5OTVjZDU0MWNhOTllNzQ1MjE0MjNjOTk1ZjMyYw==");
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xmlHttp.send('To=4255771308&From=%2B12069008210&Body=if you see this, then it is good');
    return xmlHttp.responseText;
    //return "hi";
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	// Get the modal
	var tasksModel = document.getElementById('tasksModel');
    if (event.target == tasksModel) {
        tasksModel.style.display = "none";
    }
}