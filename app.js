//FS nos permite trabajar con los archivos del sistema operativo
const process = require("process");
const { agregarTarea } = require("./funcionesDeTareas");
const funcionesDeTareas = require("./funcionesDeTareas");
let action = process.argv[2] && process.argv[2].toLowerCase();

switch (action) {
  case "listar":
    let listaDeTareas = funcionesDeTareas.LeerJson();
    
        listaDeTareas.forEach(function(tarea){
          console.log(`Tarea: ${tarea.titulo} \nEstado: ${tarea.estado}`);
          console.log("-----------------------------------------------------");
     
        })
      break;
  case "crear":
    let tarea= { 
       titulo : process.argv[3],
       estado : "Pendiente",
      }
    funcionesDeTareas.agregarTarea(tarea)
    break;
 case "deshacer":
      funcionesDeTareas.deshacerJson()
      break;
case "filtrar":
  let filtro = process.argv[3]    
  let filtradoFinal=funcionesDeTareas.filtrarJson(filtro)
  filtradoFinal.forEach(function(tarea){
    console.log(`Tarea: ${tarea.titulo} \nEstado: ${tarea.estado}`);
    console.log("-----------------------------------------------------");

  })
break;
      
 case undefined:
    console.log("Atención tienes que pasar una acción");
    break;
  default:
    console.log("No entiendo qué quieres hacer");
}
