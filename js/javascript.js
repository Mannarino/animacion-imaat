var ojos = document.getElementsByClassName('ojo');
var kinoto = document.getElementsByClassName('contenedorKinoto');


let consulta=window.matchMedia('(min-width:500px)');
consulta.addListener(permisoAnimacion);

function permisoAnimacion(){
		if(consulta.matches){
		kinoto[0].onclick=function(){
			ojos[0].classList.remove("rotar-ojos");
			ojos[1].classList.remove("rotar-ojos");
			ojos[0].classList.add("cerrar-ojos");
			ojos[1].classList.add("cerrar-ojos");
			kinoto[0].classList.add("mover-kinoto");
			console.log('anda ');
		} 
	}
}

permisoAnimacion();