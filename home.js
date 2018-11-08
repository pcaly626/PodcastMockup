const soundcloud = require('soundcloud');

function dropDownMenu(){
	let click = document.getElementById("drop-down-menu");

	if(click.className === "navbar-list")
			click.className += " responsive";
		else
			click.className = "navbar-list";
}