const url = "http://localhost:3000/api/pedido/";
let resultados = '';
const formArticulo = document.querySelector("form");
const userped = document.getElementById("USERPED");
const apetra = document.getElementById("APETRA");
const emausped = document.getElementById("EMAUSPED");
const celusped = document.getElementById("CELUSPED");
const fooped = document.getElementById("FOODPED");
const dirped = document.getElementById("DIRPED");
const msgped = document.getElementById("MSGPED");
var opcion = '';

btnCrear.addEventListener('click', () => {
	console.log("Acción de listar activada");
	opcion = 'crear';
});

formArticulo.addEventListener('submit',
	(e) => {
    	e.preventDefault();
    	if (opcion == 'crear') {
        	if (USERPED.value == "" || APETRA.value == "" || EMAUSPED.value == "" || CELUSPED.value == "" || FOODPED.value == "" || MSGPED.value == "" || DIRPED.value == "") {
            	alert("Asegúrese de que todos los campos estén completos");
            	return false;
        	} else {
            	console.log("Todos los campos están completos");
            	fetch(
                	url,
                	{
                    	method: 'POST',
                    	headers: {
                        	'content-Type':'application/json'
                    	},
                    	body: JSON.stringify(
                        	{
                            	USERPED: USERPED.value,
										APETRA: APETRA.value,
                            	EMAUSPED: EMAUSPED.value,
                            	CELUSPED: CELUSPED.value,
                            	FOODPED: FOODPED.value,
										DIRPED: DIRPED.value,
                            	MSGPED: MSGPED.value
                        	}
                    	)
                	}
            	)
            	.then(
                	response => response.json()
            	)
            	.then(
                	response => location.reload(),
						 alert("Datos enviados")
            	);
        	}
    	} else if(opcion == 'editar'){
        	console.log("Activado el ");
    	}
	}
);


/*validacion de letrasTEST*/

  function soloLetras(e) {
      key = e.keyCode || e.which;
      tecla = String.fromCharCode(key).toLowerCase();
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
      especiales = [8, 37, 39, 46];
  
      tecla_especial = false
      for(var i in especiales) {
          if(key == especiales[i]) {
              tecla_especial = true;
              break;
          }
      }
  
      if(letras.indexOf(tecla) == -1 && !tecla_especial)
          return false;
  }
  
  function limpia() {
      var val = document.getElementById("miInput").value;
      var tam = val.length;
      for(i = 0; i < tam; i++) {
          if(!isNaN(val[i]))
              document.getElementById("miInput").value = '';
      }
  }