class Coche {
    #nombre = "estado default";
    #roto = 0;
    #prendio =0;


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

    auto(conductor) {
        if (this.#roto > 0) {
            console.log("encendido");
            conductor.movimiento(this);
        } if (this.#roto===0) {
            console.log("no enciende");
            if (conductor.getAnimo()>0) {
                console.log("no puedo ir me quiero matar")
            }
        }
        } 
    }
 

export {Coche};