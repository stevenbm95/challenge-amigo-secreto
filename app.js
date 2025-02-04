// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Arreglo de los nombres de los amigos
let amigos = [];

const actualizarListaAmigos = () => {
  //Referenciar la lista de amigos por el id
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  //Iterar sobre el arreglo de amigos e insertar cada nombre en la lista
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
  return lista;
};

const agregarAmigo = () => {
  //Obtener el valor del campo de texto correpondiente al nombre del amigo
  const amigo = document.getElementById("amigo").value;
  //Validar que el nombre no esté vacío
  if (amigo === "") {
    alert("Por favor, inserte un nombre");
  }

  //Insertar el nombre del amigo en el arreglo
  amigos.push(amigo);
  //Actualizar la lista de amigos en la interfaz gráfica
  actualizarListaAmigos();
  //Limpiar el campo de texto
  document.getElementById("amigo").value = "";
};

const sortearAmigo = () => {
  //Validar que haya al menos un amigo
  if (amigos.length === 0) {
    alert("Por favor, añade un nombre de amigo a la lista");
  }
  //Generar un numero aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const nombreAmigoAleatorio = amigos[indiceAleatorio];
  //Enviar el nombre del amigo aleatorio a la función de actualización de resultado
  actualizarResultado(nombreAmigoAleatorio);
};

const actualizarResultado = (nombreAmigo) => {
  //Seleccionar la lista para mostrar el resultado
  const listaResultado = document.getElementById("resultado");
  listaResultado.innerHTML = "";

  //Agregar el nombre del amigo secreto a la lista
  return (listaResultado.innerHTML += `<li>${nombreAmigo}</li>`);
};
