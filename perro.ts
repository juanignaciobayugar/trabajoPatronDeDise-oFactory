import { Animal } from "./interface";


export class Perro implements Animal {
nombre:string
private sonido: string
private alimento: string 
private actividad: string 
constructor (pNombre:string,pSonido:string,pAlimento:string,pActividad:string){
this.nombre=pNombre
this.sonido=pSonido
this.alimento=pAlimento
this.actividad=pActividad

}
    emitirSonido(): void {
        console.log (`Hago ${this.sonido}`);    
    }

    tipoDeDieta(){
        console.log (`Me alimento con ${this.alimento}`);
    }

    mover(){
        console.log (`En este momento estoy ${this.actividad}`)
    }

    miNombreEs(){
        console.log (`Mi nombre es ${this.nombre} y...`)
    }
}