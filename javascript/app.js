class cotizador{
    constructor(planMucha, tipoServicio, tamanoEvento){
        this.planMucha = planMucha;
        this.tipoServicio = tipoServicio;
        this.tamanoEvento = tamanoEvento;
    }
    cotizarCatering(planMucha, tipoServicio, tamanoEvento){
        let tipoServicio = document.getElementById('tipoServicio').value;
        let tamanoEvento = document.getElementById('tamañoEvento').value;
        let miniPlanner = document.getElementById('miniPlanner');
        let seguimiento = document.getElementById('seguimiento');
        let presencia = document.getElementById('presencia');

        let divResumen = document.getElementById('resumen');
        let divResultado = document.getElementById('resultado');

        let planMucha = "";

        if(miniPlanner.checked){
          planMucha = 'miniPlanner';
        } else if (seguimiento.checked){
          planMucha = 'seguimiento';
        } else (presencia.checked);{
          planMucha = 'presencia';
        }
      
        
    }
}











































// -------------------------------------------------------------------------------------------

// ESTO CORRESPONDE A LA PRIMER ENTREGA, CREO QUE NO VOY A USARLO
// class LogIn{
//     constructor(nombre, apellido, correo, telefono){

//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.correo = correo;
//         this.telefono = telefono;
//         this.info = `Hola ${ this.nombre}  ${this.apellido} en las proximas horas te enviaremos un mail a ${this.correo}`;   
//         }
       
//         comunicado(){
//            console.log(this.info)
//        }


// }

// let pepe = new LogIn('Pepe', 'Gimenez', 'pepegimenez@gmail.com', '2494218210');

// pepe.comunicado();
