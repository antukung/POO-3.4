import { Coche } from "./Coche.js";
import { Hombre } from "./Hombre.js";


const carlos = new Hombre();
const elRojo = new Coche();
carlos.setNombre("Carlos");
elRojo.setNombre("el Rojo");
elRojo.setRoto(1);
carlos.setAnimo(1);

carlos.subirAl(elRojo);




