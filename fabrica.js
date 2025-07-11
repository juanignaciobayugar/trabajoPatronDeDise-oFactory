"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FábricaFactory = void 0;
const perro_1 = require("./perro");
const gato_1 = require("./gato");
const pajaro_1 = require("./pajaro");
class FábricaFactory {
    crearAnimal(animal, nombre, sonido, dieta, mover) {
        if (animal === "Perro") {
            return new perro_1.Perro(nombre, sonido, dieta, mover);
        }
        else if (animal === "Gato") {
            return new gato_1.Gato(nombre, sonido, dieta, mover);
        }
        else if (animal === "Pajaro") {
            return new pajaro_1.Pajaro(nombre, sonido, dieta, mover);
        }
        else {
            throw new Error("No hay animales disponibles para crear");
        }
    }
}
exports.FábricaFactory = FábricaFactory;
