
// MI IDEA PARA EL PROYECTO ES CREAR UN FORMULARIOO PRESUPUESTADOR INTERACTIVO
// QUE PERMITA PRESUPUESTAS A PARTIR DE OPCIONES QUE VAYA SELECCIONANDO
// EL CLIENTE. 
// ESTE PRIMER OBJETO REMITE A LO QUE PODRIA SER EL COMIENZO, DONDE INGRESAN 
// SUS DATOS PERSONALES. PIENSO EN UNA COSA ASI:

// DATOS PERSONALES
// TIPO DE EVENTO
// TIPO DE SERVICIO (COMPLETO, LUNCH, BARRA, MESA DE DULCES, ETC)
// CANTIDAD DE PERSONAS A LAS QUE ESTA DESTINADO
// CON PRESENCIA O SIN PRESENCIA

// Y QUE EL PRESUPUESTADOR SIRVA PARA ORIENTARSE Y PONERSE EN CONCATO PARA DETALLAR CUESTIONES
// E INCLUSO AJUSTAR EL PRESUPUESTO INICIAL

// EL HTML CORRESPONDE A UN FORMULARIO COMUN CON DATOS PERSONALES Y CONSULTAS YA QUE AUN NO VIMOS
// COMO INTERACTUAR CON EL HTML

class LogIn{
    constructor(nombre, apellido, correo, telefono){

        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.info = ` Hola ${ this.nombre}  ${this.apellido} en las proximas horas te enviaremos un mail a ${this.correo}`;   
        }
       
        comunicado(){
           console.log(this.info)
       }


}

let pepe = new LogIn('Pepe', 'Gimenez', 'pepegimenez@gmail.com', '2494218210');

pepe.comunicado();
