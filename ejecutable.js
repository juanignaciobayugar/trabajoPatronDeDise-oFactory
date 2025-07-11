"use strict";
//***********************************************
// *Ejercicio 2: Fábrica de Animales
// Consigna:
// -Crea una interfaz Animal con métodos hacerSonido() y mover(). Implementa clases como Perro, Gato y Pajaro que utilizen esa interfaz. Luego, crea una fábrica que devuelva instancias de estos animales.
Object.defineProperty(exports, "__esModule", { value: true });
//importamos la clase que tiene el patron Factory
const fabrica_1 = require("./fabrica");
let fabrica = new fabrica_1.FábricaFactory();
//creamos la clase Gato a traves de Fabrica (Factory)
let miGato = fabrica.crearAnimal("Gato", "Tom", `¡Miau!`, `alimento Mapu balanceado 150 gramos por dia`, `estoy en el tejado`);
console.log(`***************************************************`);
console.log(`Soy un gato...`);
miGato.miNombreEs();
miGato.emitirSonido();
miGato.mover();
miGato.tipoDeDieta();
//creamos la clase Perro a traves de Fabrica (Factory)
let miPerro = fabrica.crearAnimal("Perro", "Bernardo", "Guau", "alimento sabrosito balanceado 350 gramos por dia", "estoy paseando");
console.log(`***************************************************`);
console.log(`Soy un Perro...`);
miPerro.miNombreEs();
miPerro.emitirSonido();
miPerro.mover();
miPerro.tipoDeDieta();
//creamos la clase Pajaro a traves de Fabrica (Factory)
console.log(`***************************************************`);
console.log(`Soy un Pajaro...`);
let miPajaro = fabrica.crearAnimal("Pajaro", "Piolin", "¡Pio Pio!", `lino y avena 10 gramos por dia`, `estoy volando en el jardin`);
miPajaro.miNombreEs();
miPajaro.emitirSonido();
miPajaro.mover();
miPajaro.tipoDeDieta();
//Verificamos que ademas accione los metodos para verificar que estamos dentro de la clase.
