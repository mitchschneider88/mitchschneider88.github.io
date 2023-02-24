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

var track1 = document.getElementById('track1');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track1.paused) {
        track1.play();
        controlBtn.className = "pause";
    } else { 
        track1.pause();
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});



/*

var button = document.getElementById('hover');
var body = document.body;

button.onmouseover = function() {
	body.className = 'hovered';
}

button.onmouseout = function() {
	body.className = '';
}

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /The text /
var speed = 10; /The speed/duration of the effect in milliseconds /
    
function typeWriter() {
    if (i < txt.length) {
    document.getElementById("clients_list").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}

*/