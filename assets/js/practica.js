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
  const horaActual = new Date();
  const horas = horaActual.getHours().toString().padStart(2, "0");
  const minutos = horaActual.getMinutes().toString().padStart(2, "0");
  const segundos = horaActual.getSeconds().toString().padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
};

/*
Ejercicio 4: En el encabezado de la página principal (en el lugar que considere), 
debe aparecer la hora del sistema, pero debe simular un reloj digital. (Apóyese en la 
expresión de función anónima del ejercicio 3, para ello inserte en el 
documento html el elemento que estime oportuno).
*/

function actualizaReloj() {
  const reloj = document.getElementById("reloj"); // Obtengo el elemento con id reloj
  if (reloj) {
    reloj.textContent = getHora(); // Llama a la función del apartado anterior
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

const titulo = document.getElementById("titulo"); // Obtengo el elemento con id titulo

titulo.addEventListener("mouseenter", function () {
  this.style.color = "#ffff00"; // Añado el color
});

titulo.addEventListener("mouseleave", function () {
  this.style.color = ""; // Quito el color
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

let imagenInicial = true; // Inicio un booleano para saber cual es la foto actual.
const foto = document.getElementById("miFoto"); // Obtengo el elemento con id miFoto

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
json.forEach(usuario => console.log(usuario.name)); // La variable "json" está en el archivo "json.js"

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
  // Propiedades privadas
  #idUser;
  #nombre;
  #nombreUser;
  #email;
  #empresa;
  #direccion;
  #url;
  #edad;

  constructor(nombre, nombreUser, email, empresa, direccion, url, edad) {
    this.#nombre = nombre;
    this.#nombreUser = nombreUser;
    this.#email = email;
    this.#empresa = empresa;
    this.#direccion = direccion;
    this.#url = url;
    this.#idUser = Usuario.getId(url); // Llamo al método estático para asignar el Id
    this.#edad = edad;
  }

  get idUser() {
    return this.#idUser;
  }

  get nombre() {
    return this.#nombre;
  }

  get nombreUser() {
    return this.#nombreUser;
  }

  get email() {
    return this.#email;
  }

  get url() {
    return this.#url;
  }

  get empresa() {
    return this.#empresa.nombre;
  }

  get direccion() {
    return {
      calle: this.#direccion.calle,
      ciudad: this.#direccion.ciudad,
      codigoPostal: this.#direccion.codigoPostal
    };
  }

  get edad() {
    return this.#edad;
  }

  static getId(url) {
    return url.match(/\/users\/(\d+)\//)[1]; // Regex que extrae el Id
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
console.log("id:", userPrueba.idUser);
console.log("nombre:", userPrueba.nombre);
console.log("nombre de usuario:", userPrueba.nombreUser);
console.log("email:", userPrueba.email);
console.log("empresa:", userPrueba.empresa);
console.log("dirección:", userPrueba.direccion);

/*
Ejercicio 10: Implemente una función que pasándole como parámetro un objeto del 
json mapee y cree un objeto del tipo Usuario.
*/

function jsonToUsario(usuarioJson) {
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
    empresa,
    direccion,
    usuarioJson.url,
    usuarioJson.age
  );

  return usuario;
}

const usuarioJson = {
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",
  "age": "18",
  "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
      "lat": "-43.9509",
      "lng": "-34.4618"
    }
  },
  "phone": "010-692-6593 x09125",
  "website": "anastasia.net",
  "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
  },
  "url": "https://prueba.dev/api/users/2/"
};

const usuario = jsonToUsario(usuarioJson);
console.log("---------DATOS EJERCICIO 10---------");
console.log("id:", Usuario.getId(usuario.url));
console.log("nombre:", usuario.nombre);
console.log("nombre de usuario:", usuario.nombreUser);
console.log("email:", usuario.email);
console.log("empresa:", usuario.empresa);
console.log("dirección:", usuario.direccion.calle + ", " + usuario.direccion.ciudad + ", " + usuario.direccion.codigoPostal);

/*
Ejercicio 11: Implemente una función que recorra el JSON y devuelva un array de
objetos del tipo Usuario. (Apóyese en la función del ejercicio anterior).
*/

function getArrayUsuarios(usuariosJson) {
  const usuarios = [];

  // Recorro el json
  for (const usuario of usuariosJson) {
    const nuevoUsuario = jsonToUsario(usuario);
    usuarios.push(nuevoUsuario); // Añado el usuario devuelto al array
  }

  return usuarios;
}

/*
Ejercicio 12: Cree una variable global que contenga el resultado de la función del
punto anterior. Muestre por consola SÓLO el nombre del usuario.
*/

var usuarios = getArrayUsuarios(json);

console.log("---------DATOS EJERCICIO 12---------");

usuarios.forEach(usuario => {
  console.log(usuario.nombre);
});

/*
Ejercicio 13: Cree las variables que considere necesarias, de tal manera que cada variable contenga los usuarios de la misma ciudad.
Hágalo a partir del array de objetos de usuarios del punto anterior. Muestre el resultado por consola.
*/

// Declaro una clase que contendrá el nombre de la ciudad, y un array de usuarios de esa ciudad
class UsuariosPorCiudad {
  constructor(ciudad) {
    this.ciudad = ciudad;
    this.usuarios = [];
  }

  agregarUsuario(usuario) {
    this.usuarios.push(usuario);
  }
}

// Esta variable almacenará objetos de la clase UsuariosPorCiudad
const mapaUsuarios = [];

// Extraigo la lista de ciudades únicas
const ciudadesUnicas = [...new Set(usuarios.map(user => user.direccion.ciudad))];

ciudadesUnicas.forEach(ciudad => {
  // Obtengo los usuarios de esa ciudad en un array
  const listaUsuarios = usuarios.filter(user => user.direccion.ciudad === ciudad);

  // Creo un nuevo objeto de la clase UsuariosPorCiudad
  const usuariosPorCiudad = new UsuariosPorCiudad(ciudad);

  // Recorro la lista de usuarios de esa ciudad y los añado a la lista de usuarios
  listaUsuarios.forEach(usuario => usuariosPorCiudad.agregarUsuario(usuario));

  // Añado el objeto usuariosPorCiudad al mapa de usuarios
  mapaUsuarios.push(usuariosPorCiudad);
});

console.log("---------DATOS EJERCICIO 13---------");
for (const elemento of mapaUsuarios) {
  console.log(`Usuarios de la ciudad: ${elemento.ciudad}`);

  // Recorro el array de usuarios de la ciudad
  for (const usuario of elemento.usuarios) {
    console.log(`- ${usuario.nombre}`);
  }
}

/*
Ejercicio 14: Ordene de forma creciente los arrays anteriores por el valor de 
la propiedad "nombre". Muestre el resultado por consola.
*/

mapaUsuarios.forEach(elemento => {
  elemento.usuarios.sort((a, b) => a.nombre.localeCompare(b.nombre)); // Orden natural
});

console.log("---------DATOS EJERCICIO 14---------");
for (const elemento of mapaUsuarios) {
  console.log(`Usuarios de la ciudad: ${elemento.ciudad}`);

  // Recorro el array de usuarios de la ciudad
  for (const usuario of elemento.usuarios) {
    console.log(`- ${usuario.nombre}`);
  }
}

/*
Ejercicio 15: Implemente la función mostrarUsuarios().
Inserte en la barra de navegación de la página principal de su proyecto, 
una opción que se llame "Usuarios", de tal manera, que cuando el usuario haga 
click sobre ella, se muestre un modal con todos los usuarios ordenados por el 
valor de la propiedad "nombre".
Diseñe el modal para que aparezcan los siguientes datos de cada usuario: 
Nombre, Usuario, Email y Empresa.
*/

const enlaceUsuarios = document.getElementById("mostrarUsuarios");
enlaceUsuarios.addEventListener("click", mostrarUsuarios);

// Creo el select para el ejercicio 16
const selectCiudades = document.createElement("select");
selectCiudades.id = "selectCiudades";
selectCiudades.innerHTML = ciudadesUnicas.map((ciudad) => `<option>${ciudad}</option>`).join("");

// Creo el select para el ejercicio 20
let selectUsuarios = document.createElement("select");
selectUsuarios.id = "selectUsuarios";
selectUsuarios.innerHTML = usuarios.map((usuario) => `<option>${usuario.nombre}</option>`).join("");

function mostrarUsuarios() {
  // Extraigo todos los usuarios para ordenarlos todos
  const todosLosUsuarios = [];
  mapaUsuarios.forEach((elemento) => {
    elemento.usuarios.forEach((usuario) => {
      todosLosUsuarios.push(usuario);
    });
  });

  // Ordeno todos los usuarios por nombre
  todosLosUsuarios.sort((a, b) => a.nombre.localeCompare(b.nombre));

  // Genero el contenido del modal
  let contenido = `    
    <div class="filtrar-ciudad">
      <label for="selectCiudades">Filtrar por ciudad:</label>
      ${selectCiudades.outerHTML}
    </div>
    <div class="tabla">
    `;

  todosLosUsuarios.forEach((usuario) => {
    // Compruebo la ciudad para cambiarle el color
    let colorTexto = '';
    if (usuario.direccion.ciudad === 'Gwenborough') {
      colorTexto = 'blue';
    } else if (usuario.direccion.ciudad === 'Wisokyburgh') {
      colorTexto = 'green';
    }

    contenido += `
      <div class="usuario" style="color: ${colorTexto}">
        <h4>${usuario.nombre}</h4>
        <div class="columna-etiquetas">Usuario:</div><div class="columna-valores">${usuario.nombreUser}</div>
        <div class="columna-etiquetas">Email:</div><div class="columna-valores">${usuario.email}</div>
        <div class="columna-etiquetas">Empresa:</div><div class="columna-valores">${usuario.empresa}</div>
      </div>
    `;
  });

  // Mostrar los datos calculados para todos los usuarios
  const datosUsuarios = calcularDatos();
  contenido += `
      <div class="datos-usuarios">
        <h2>Datos de los usuarios:</h2>
        <div>Menor edad: ${datosUsuarios.menorEdad} (${datosUsuarios.nombreMenorEdad})</div>
        <div>Mayor edad: ${datosUsuarios.mayorEdad} (${datosUsuarios.nombreMayorEdad})</div>
      </div>
    </div>
  `;

  contenido += ` 
  <div class="filtrar-usuario">
    <label for="selectUsuarios">Usuarios:</label>
    ${selectUsuarios.outerHTML}
  </div>
`;

  // Agrego un elemento html para mostrar la dirección del usuario
  contenido += `<div class="direccion-usuario"></div>`;

  // Utilizo la librería SweetAlert2 para el modal
  Swal.fire({
    title: 'Usuarios',
    html: contenido,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    didOpen: () => {
      // Obtengo el select de ciudades
      const selectCiudades = document.querySelector('#selectCiudades');

      // Agrego evento "change" al select de ciudades
      selectCiudades.addEventListener('change', (evento) => {
        const ciudadSeleccionada = evento.target.value;
        filtrarCiudad(ciudadSeleccionada);
      });

      // Obtengo el select de usuarios
      const selectUsuarios = document.querySelector('#selectUsuarios');

      // Agrego evento "change" al select de usuarios
      selectUsuarios.addEventListener('change', (evento) => {
        const usuarioSeleccionado = evento.target.value;
        filtrarDireccion(usuarioSeleccionado);
      });
    }
  });
}

/*
Ejercicio 16: Implemente la función filtrarCiudad().
En el modal del ejercicio anterior, inserte un elemento Select que muestre 
como opciones los valores de las ciudades del json.
Cuando el usuario seleccione una ciudad de la lista desplegable, 
se deberá actualizar la vista mostrando solamente aquellos que sean de la ciudad seleccionada.
*/

function filtrarCiudad(ciudad) {
  // Filtrar los usuarios de la ciudad seleccionada
  const usuariosCiudad = mapaUsuarios.find((elemento) => elemento.ciudad === ciudad).usuarios;

  // Genero el html de los usuarios filtrados
  let contenidoFiltrado = `<div class="tabla">`;
  usuariosCiudad.forEach((usuario) => {
    // Compruebo la ciudad para cambiarle el color
    let colorTexto = '';
    if (ciudad === 'Gwenborough') {
      colorTexto = 'blue';
    } else if (ciudad === 'Wisokyburgh') {
      colorTexto = 'green';
    }
    contenidoFiltrado += `
      <div class="usuario" style="color: ${colorTexto}">
        <h4>${usuario.nombre}</h4>
        <div class="columna-etiquetas">Usuario:</div><div class="columna-valores">${usuario.nombreUser}</div>
        <div class="columna-etiquetas">Email:</div><div class="columna-valores">${usuario.email}</div>
        <div class="columna-etiquetas">Empresa:</div><div class="columna-valores">${usuario.empresa}</div>
      </div>
    `;
  });

  // Mostrar los datos calculados para todos los usuarios
  const datosUsuarios = calcularDatos(ciudad);
  contenidoFiltrado += `
      <div class="datos-usuarios">
        <h2>Datos de los usuarios:</h2>
        <div>Menor edad: ${datosUsuarios.menorEdad} (${datosUsuarios.nombreMenorEdad})</div>
        <div>Mayor edad: ${datosUsuarios.mayorEdad} (${datosUsuarios.nombreMayorEdad})</div>
      </div>
    </div>
  `;

  // Obtengo el elemento HTML del contenido del modal
  const contenidoModal = Swal.getHtmlContainer();

  // Busco el select de ciudades dentro del contenido del modal
  const usuariosHtml = contenidoModal.querySelector(".tabla");
  // Actualizo el contenido
  usuariosHtml.innerHTML = contenidoFiltrado;
}

/*
Ejercicio 17:
Modifique la función del ejercicio 15, para que cambie el color 
del texto de los usuarios mostrados en función de la ciudad del usuario:
Gwenborough, color = azul Wisokyburgh, color = verde
*/

// Modificada en el ejercicio 15.

/*
Ejericio 18:
Implemente una función calcularDatos(), que obtenga los siguientes datos de todos los usuarios:
- Menor edad
- Nombre del usuario de menor edad
- Mayor edad
- Nombre del usuario de mayor edad
Esta función se debe invocar cuando se muestren los datos de los usuarios mostrarUsuarios().
Por lo tanto, deberá insertar en el modal, a continuación del listado de usuarios, los elementos que estime oportuno para mostrar estos datos obtenidos a través de la función calcularDatos().
Cuando se seleccione una ciudad a través del elemento Select, también se deberán actualizar estos datos, calculados según la ciudad seleccionada.
*/

function calcularDatos(ciudadSeleccionada) {
  let usuariosFiltrados;
  if (ciudadSeleccionada) {
    usuariosFiltrados = usuarios.filter((usuario) => usuario.direccion.ciudad === ciudadSeleccionada);
  } else {
    usuariosFiltrados = usuarios;
  }

  // Calculo la menor edad y el nombre del usuario de menor edad
  let menorEdad = Infinity;
  let nombreMenorEdad = "";
  usuariosFiltrados.forEach((usuario) => {
    if (usuario.edad < menorEdad) {
      menorEdad = usuario.edad;
      nombreMenorEdad = usuario.nombre;
    }
  });

  // Calculo la mayor edad y el nombre del usuario de mayor edad
  let mayorEdad = -Infinity;
  let nombreMayorEdad = "";
  usuariosFiltrados.forEach((usuario) => {
    if (usuario.edad > mayorEdad) {
      mayorEdad = usuario.edad;
      nombreMayorEdad = usuario.nombre;
    }
  });

  // Devuelvo los resultados
  return {
    menorEdad,
    nombreMenorEdad,
    mayorEdad,
    nombreMayorEdad,
  };
}

/*
Ejercicio 19: Implemente un evento, de tal manera que cuando se pulse la tecla "p" (minúscula) ó "P" (mayúscula) 
aparezca una ventana con el texto de la variable global practica (Ejercicio 1), 
esta ventana se debe cerrar automáticamente pasado 3 segundos. 
*/

// Evento para mostrar la ventana con el contenido de la variable "practica" del localStorage
window.addEventListener("keydown", function (event) {
  // Compruebo si se ha pulsado la tecla "p" o "P"
  if (event.key === "p" || event.key === "P") {
    // Obtengo el contenido de la variable "practica" del localStorage
    const practica = localStorage.getItem("practica");

    // Muestro el contenido en una ventana de SweetAlert2
    Swal.fire({
      title: practica,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
  }
});

/*
Ejercicio 20: Implemente la función filtrarDireccion(), de tal manera que cuando el usuario
seleccione un usuario en la lista desplegable, aparezca su dirección con el 
siguiente formato: C/ nombre de la calle, Ciudad (código postal).
Para ello, deberá insertar, al final del modal, un elemento Select que muestre como opciones 
los nombres de todos los usuarios, y otro elemento html, de su elección, que muestre su dirección con el formato exigido.
*/

function filtrarDireccion(usuario) {
  // Busco al usuario por nombre
  let usuarioSeleccionado = usuarios.find(u => u.nombre === usuario);

  // Obtengo la dirección
  const direccion = `C/ ${usuarioSeleccionado.direccion.calle}, ${usuarioSeleccionado.direccion.ciudad} (${usuarioSeleccionado.direccion.codigoPostal})`;

  // Actualizo el contenido del elemento html que muestra la dirección
  const direccionUsuario = document.querySelector('.direccion-usuario');
  direccionUsuario.innerHTML = direccion;
}