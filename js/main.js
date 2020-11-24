function show(state) {
	document.getElementById('window').style.display = state;
	document.getElementById('gray').style.display = state;
}

function hide(state) {
	document.getElementById('navbarSupportedContent').classList.remove(state);
}
