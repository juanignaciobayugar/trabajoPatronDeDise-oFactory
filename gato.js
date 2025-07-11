"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
class Gato {
    constructor(pNombre, pSonido, pAlimento, pActividad) {
        this.nombre = pNombre;
        this.sonido = pSonido;
        this.alimento = pAlimento;
        this.actividad = pActividad;
    }
    emitirSonido() {
        console.log(`Hago ${this.sonido}`);
    }
    tipoDeDieta() {
        console.log(`Me alimento con ${this.alimento}`);
    }
    mover() {
        console.log(`En este momento estoy ${this.actividad}`);
    }
    miNombreEs() {
        console.log(`Mi nombre es ${this.nombre} y...`);
    }
}
exports.Gato = Gato;
