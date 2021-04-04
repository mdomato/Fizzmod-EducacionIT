/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {
  let cantidad = 0;

  if (typeof texto === "string") {
    var caracteres = texto.split("");

    for (let caracter of caracteres) {
      caracter = caracter.toUpperCase();
      switch (caracter) {
        case "A":
          cantidad++;
          break;
        case "E":
          cantidad++;
          break;
        case "I":
          cantidad++;
          break;
        case "O":
          cantidad++;
          break;
        case "U":
          cantidad++;
          break;
      }
    }
    return cantidad;
  } else {
    cantidad = -1;
    return cantidad;
  }
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return "https://github.com/mdomato/Fizzmod-EducacionIT.git";
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => {
  class ES6Class {
    constructor(texto) {
      this.texto = texto;
      ES6Class.contadorInstancias = (ES6Class.contadorInstancias || 0) + 1;
    }

    contadorPalabras() {
      if (typeof this.texto === "string") {
        return this.texto === "" ? 0 : this.texto.split(" ").length;
      } else {
        return -1;
      }
    }

    hayNumeros() {
      if (typeof this.texto === "string") {
        for (let caracter of this.texto) {
          if (caracter >= "0" && caracter <= "9") {
            return true;
          }
        }
        return false;
      } else {
        return -1;
      }
    }
  }
  return ES6Class;
};

module.exports = {
  contarVocales,
  urlRepo,
  crearClase,
};
