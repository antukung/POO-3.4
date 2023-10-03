class Coche {
    #nombre = "estado default";
    #roto = 0;

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
    setRoto(roto) {
        this.#roto = roto;
    }
    getRoto() {
        return this.#roto;
    }

    auto(enciende) {
        if (this.#roto > 0) {
            console.log("encendido");
            enciende.movimiento(this);
        } if (this.#roto===0) {
            console.log("no enciende");
        } 
    }
} 

export {Coche};