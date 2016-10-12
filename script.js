// tu codigo va aca
function callbackPromedio(a, b, c, callback){
	var suma = a + b + c;
	var promedio = suma / 3;
	return callback(promedio);
}	


function segundero(){
	var tiempo=1; //contador de segundo
	setInterval(function(){ // funcion para cambiar titulo por segundo
		document.getElementById("titulo").innerHTML=tiempo++;
	},1000,"JavaScript");
}
segundero(); //llammo funcion
