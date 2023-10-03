
class Hombre {

    #nombre = "estado default";
    #animo = 0;
    #llego = 0;
    

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
    setAnimo(animo) {
        this.#animo = animo;
    }
    getAnimo() {
        return this.#animo;
    }

    subirAl(coche) {
        console.log("arrancar " + coche.getNombre());
        coche.auto(this);
    }
    movimiento(persona) {
         if (this.#animo > 0) {
            console.log("en movimiento");
            this.#llego++;
        }   if (this.#llego ===1) {
            console.log("estoy en camino")
            this.#llego++;
        }   
        if (this.#llego===2){
            console.log("en 5 minutos estoy")
            this.#llego++;
        }
         if(this.#llego ===3){
            console.log("llegue")
        }
        if (this.#animo ===0){
            console.log("no voy NI ahi")
        }
}
}

export {Hombre};