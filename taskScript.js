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

	var checkBoxes = document.getElementsByName('checkBoxName');
	for(var i = 0; i < checkBoxes.length; ++i)
	{
		if (checkBoxes[i].checked)
		{
			alert("A reminder has been sent to your email and phone.");
			return;
		}
	}

	alert("Please check one or more tasks for the reminder notification");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	// Get the modal
	var tasksModel = document.getElementById('tasksModel');
    if (event.target == tasksModel) {
        tasksModel.style.display = "none";
    }
}