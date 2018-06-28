function setText(text) {
	// Obtengo el elemento directamente por su id y lo guardo en una variable
	var out = document.getElementById("out");
	
	// Hago que muestre el contenido de la variable text
	out.innerHTML = text;
	
	// Segundo método para agregar listener. Le seteo una función a la propiedad onclick del elemento
	out.onclick = function () { out.innerHTML = ''; }
}

function showText () {
	setText('Click para borrar');
}