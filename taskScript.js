window.onload = function() {
	document.getElementById("clickable").onclick = function(){loadTasks()};;	
};



function loadTasks() {
	document.getElementById("tasks").style.display = "block";
}