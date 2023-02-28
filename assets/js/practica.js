/*
Ejercicio 2: Guarde en el almacenamiento local del navegador una propiedad que 
se llame "practica" y que tenga por valor "Práctica Final ECMACScript". Esta variable 
debe borrarse del almacenamiento local cuando se cierre el navegador. 
*/

// Guarda la propiedad practica
localStorage.setItem("practica", "Práctica Final ECMACScript");

// Elimina la propiedad practica cuando se cierra el navegador
window.addEventListener("beforeunload", function () {
  localStorage.removeItem("practica");
});

/*
Ejercicio 3: Implemente una expresión de función anónima que devuelva la hora 
del sistema en formato HH:MM:S
*/

const getHora = function () {
  const currentDate = new Date();
  const horas = currentDate.getHours().toString().padStart(2, "0");
  const minutos = currentDate.getMinutes().toString().padStart(2, "0");
  const segundos = currentDate.getSeconds().toString().padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
};

/*
Ejercicio 4: En el encabezado de la página principal (en el lugar que considere), 
debe aparecer la hora del sistema, pero debe simular un reloj digital. (Apóyese en la 
expresión de función anónima del ejercicio 3, para ello inserte en el 
documento html el elemento que estime oportuno).
*/

function actualizaReloj() {
  const reloj = document.getElementById("reloj"); //Obtiene el elemento con id reloj
  if (reloj) {
    reloj.textContent = getHora(); //Llama a la función del apartado anterior
  }
}

setInterval(actualizaReloj, 1000); // Actualiza el reloj cada segundo

/*
Ejercicio 5: Modifique el texto del “enunciado principal / título” que aparezca en el 
encabezado de la página principal de su proyecto, de tal manera que cuando el 
puntero del ratón se sitúe encima, dicho texto debe aparecer con un color amarillo
"#ffff00".
Y cuando el puntero salga del elemento, el color del texto debe cambiar al 
original que tenía.
(Si en el encabezado de su página principal no tiene ningún título, insértelo 
para realizar este ejercicio
*/

const titulo = document.getElementById("titulo"); //Obtiene el elemento con id titulo

titulo.addEventListener("mouseenter", function () {
  this.style.color = "#ffff00"; //Añado el color
});

titulo.addEventListener("mouseleave", function () {
  this.style.color = ""; //Quito el color
});

/*
Ejercicio 6: Modifique una imagen que aparezca en cualquier documento html de 
su proyecto, de tal manera que cada vez que haga click sobre ella, la sustituya por 
otra imagen de su elección, es decir, la primera vez, cuando haga click, debe 
cambiar a "imagen2", la siguiente vez que haga click, a la anterior "imagen1" y así 
sucesivamente... (Este cambio sólo debe producirse cuando haga click sobre 
dicha imagen).
*/

//La foto que he elegido es la foto de la chica en el apartado "Acerca de..."

let imagenInicial = true; //Inicio un booleano para saber cual es la foto actual.
const foto = document.getElementById("miFoto"); //Obtiene el elemento con id miFoto

if (foto) {
  foto.addEventListener("click", function () {
    if (imagenInicial) {
      foto.src = "./assets/img/sobremi.jpg";
      imagenInicial = false;
    } else {
      foto.src = "./assets/img/sobremi2.jpg";
      imagenInicial = true;
    }
  });
}

/*
Ejercicio 7: Muestre por consola el nombre de todos los usuarios del JSON del 
archivo json.js
*/
console.log("---------DATOS EJERCICIO 7---------");
json.forEach(usuario => console.log(usuario.name)); 

/*
Ejercicio 8: Cree una clase "Usuario" que contenga, lo siguiente:
- Propiedades privadas: "idUser", “nombre", "nombreUser", "email", "empresa",
"direccion" y “url”.
- la propiedad empresa, sólo devolverá el nombre de dicha empresa.
- direccion será un objeto literal y deberá contener las siguientes
propiedades: "calle", "ciudad", "codigoPostal".
- Método estático getId(url), que pasándole como parámetro el identificador 
único (URI) del usuario, devuelva su id.
*/

class Usuario {
  constructor(nombre, nombreUser, email, empresa, direccion, url) {
    this.nombre = nombre;
    this.nombreUser = nombreUser;
    this.email = email;
    this._empresa = empresa;
    this._direccion = direccion;
    this.url = url;
  }

  get empresa() {
      return { nombre: this._empresa.nombre };
  }

  get direccion() {
    return {
      calle: this._direccion.calle,
      ciudad: this._direccion.ciudad,
      codigoPostal: this._direccion.codigoPostal
    };
  }

  static getId(url) {
    return url.match(/\/(\d+)\//)[1];
  }
}

/*
Ejercicio 9: Instancie un objeto de la clase Usuario con el identificador 
"userPrueba". Este objeto debe tener los siguientes valores:
nombre = "Prueba Practica Final"
nombreUser = "PruebaPF7"
email = "pruebapf7@hotmail.com"
empresa = "Leroy Merlin"
direccion = {calle: "Gravina 7", ciudad: "Roma", codigoPostal: "41449"}
url = https://prueba.dev/api/users/102/
Muestre por consola las propiedades del objeto userPrueba (incluido el idUser).
*/

const userPrueba = new Usuario(
  "Prueba Practica Final",
  "PruebaPF7",
  "pruebapf7@hotmail.com",
  { nombre: "Leroy Merlin" },
  { calle: "Gravina 7", ciudad: "Roma", codigoPostal: "41449" },
  "https://prueba.dev/api/users/102/"
);

console.log("---------DATOS EJERCICIO 9---------");
console.log("id:", Usuario.getId(userPrueba.url));
console.log("nombre:", userPrueba.nombre);
console.log("nombre de usuario:", userPrueba.nombreUser);
console.log("email:", userPrueba.email);
console.log("empresa:", userPrueba.empresa.nombre);
console.log("dirección:", userPrueba.direccion.calle + ", " + userPrueba.direccion.ciudad + ", " + userPrueba.direccion.codigoPostal);

/*
Ejercicio 10: Implemente una función que pasándole como parámetro un objeto del 
json mapee y cree un objeto del tipo Usuario.
*/
function convertirJsonUsuario(usuarioJson) {
  const direccion = {
    calle: usuarioJson.address.street,
    ciudad: usuarioJson.address.city,
    codigoPostal: usuarioJson.address.zipcode
  };

  const empresa = { nombre: usuarioJson.company.name };

  const usuario = new Usuario(
    usuarioJson.name,
    usuarioJson.username,
    usuarioJson.email,
    usuarioJson.empresa,
    usuarioJson.direccion,
    usuarioJson.url
  );

  return usuario;
}