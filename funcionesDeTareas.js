const fs = require("fs");

let funcionesDeTareas= {
    archivo: './tareas.json',
    LeerJson: function () {
        let tareasJson = fs.readFileSync(this.archivo, "utf-8"); // Leemos el archivo Json
        let tareasParseadas = JSON.parse(tareasJson);
    return tareasParseadas
    },
    escribirJson: function(arrayDeTareas) {
        let nuevoJson= JSON.stringify(arrayDeTareas)
        fs.writeFileSync(this.archivo, nuevoJson, 'utf-8')
        
        
    },
    agregarTarea: function(tarea){
        let tareaAnteriores = this.LeerJson()
        tareaAnteriores.push(tarea)
        this.escribirJson(tareaAnteriores)
    },
    deshacerJson: function(){
        let tareas= this.LeerJson()
        tareas.pop()
        this.escribirJson(tareas)
    },
    filtrarJson: function(estado){
        let tareas= this.LeerJson()
       return tareas.filter(tarea =>
            tarea.estado.toLowerCase() === estado.toLowerCase()
        )
    
    }
    
 
}

    

module.exports = funcionesDeTareas
