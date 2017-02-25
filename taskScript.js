window.onload = function() {
	document.getElementById("HVACButton").onclick = function(){loadTasks()};
	document.getElementById("close").onclick = function(){closeTasks()};
	document.getElementById("instructions").onclick = function(){instructions()};
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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	// Get the modal
	var tasksModel = document.getElementById('tasksModel');
    if (event.target == tasksModel) {
        tasksModel.style.display = "none";
    }
}