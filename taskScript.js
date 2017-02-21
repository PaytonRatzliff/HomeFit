window.onload = function() {
	document.getElementById("clickable").onclick = function(){loadTasks()};
	document.getElementById("close").onclick = function(){closeTasks()};
	document.getElementById("instructions").onclick = function(){instructions()};
};

function closeTasks() {
	document.getElementById("tasks").style.display = "none";
}

function loadTasks() {
	document.getElementById("tasks").style.display = "block";
}

function instructions() {
	window.open("instructions.html", '_blank');
}