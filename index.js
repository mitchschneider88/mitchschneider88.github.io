let showPerformances = () => {
    const performances = document.getElementsByClassName('performances_group');  // get the class name.
    const hideProjects = document.getElementsByClassName('projects_group');
    const hideClients = document.getElementsByClassName('clients_group');
    // toggle or show/hide element.
    performances[0].style.display = performances[0].style.display == 'none' ? 'grid' : 'none';
    hideProjects[0].style.display = 'none';
    hideClients[0].style.display = 'none';
}

let showProjects = () => {
    const projects = document.getElementsByClassName('projects_group');  // get the class name.
    const hidePerformances = document.getElementsByClassName('performances_group');
    const hideClients = document.getElementsByClassName('clients_group')
    // toggle or show/hide element.
    projects[0].style.display = projects[0].style.display == 'none' ? 'grid' : 'none';
    hidePerformances[0].style.display = 'none';
    hideClients[0].style.display = 'none';
}

let showClients = () => {
    const clients = document.getElementsByClassName('clients_group');  // get the class name.
    const hidePerformances = document.getElementsByClassName('performances_group');
    const hideProjects = document.getElementsByClassName('projects_group')
    // toggle or show/hide element.
    clients[0].style.display = clients[0].style.display == 'none' ? 'block' : 'none';
    hidePerformances[0].style.display = 'none';
    hideProjects[0].style.display = 'none';
}

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 10; /* The speed/duration of the effect in milliseconds */
    
function typeWriter() {
    if (i < txt.length) {
    document.getElementById("clients_list").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}

var password = "schneider2023";
var x = prompt("Enter in the password "," ");
if (x.toLowerCase() == password) {
 alert("thank you");
 window.location = "good.htm";
}
else {
 window.location = "bad.htm";
}

/*

var button = document.getElementById('hover');
var body = document.body;

button.onmouseover = function() {
	body.className = 'hovered';
}

button.onmouseout = function() {
	body.className = '';
}

*/