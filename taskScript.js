window.onload = function() {
	document.getElementById("clickable").onclick = function(){loadTasks()};
	document.getElementById("close").onclick = function(){closeTasks()};
};

function closeTasks() {
	document.getElementById("tasks").style.display = "none";
}

function loadTasks() {
	document.getElementById("tasks").style.display = "block";
}