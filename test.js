class Curso {
  constructor(titulo, dificultad) {
    this.titulo = titulo;
    this.dificultad = dificultad;
    this.lecciones = [];
  }

  get dificultad() {
    console.log("GETTER");
    return this._dificultad;
  }

  set dificultad(nuevaDificultad) {
    if (nuevaDificultad >= 0 && nuevaDificultad <= 5) {
      this._dificultad = nuevaDificultad;
    } else {
      console.log("No hago nada");
    }
  }

  agregarLeccion(leccion) {
    this.lecciones.push(leccion);
  }

  elimarnLeccion() {
    this.lecciones.pop();
  }
}

const cursoJS = new Curso("Javascript", 1);

const cursoTS = new Curso("Typescript", 3);

cursoJS.agregarLeccion("Intro a JS");
cursoJS.agregarLeccion("Variables");
cursoJS.agregarLeccion("Tipos de datos");

console.log(cursoJS, cursoTS);
