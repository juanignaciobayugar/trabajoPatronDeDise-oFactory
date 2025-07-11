import { Animal } from "./interface";
import { Perro } from "./perro";
import { Gato } from "./gato";
import { Pajaro} from "./pajaro";

export class FábricaFactory {

public crearAnimal (animal: string,nombre:string, sonido:string, dieta:string,mover:string): Animal {
    if(animal==="Perro"){
        return new Perro (nombre,sonido,dieta,mover)
    }else if (animal==="Gato"){
        return new Gato (nombre,sonido,dieta,mover)
    }else if (animal==="Pajaro"){
        return new Pajaro (nombre,sonido,dieta,mover)
    }else {
        throw new Error ("No hay animales disponibles para crear")
    }
}
}