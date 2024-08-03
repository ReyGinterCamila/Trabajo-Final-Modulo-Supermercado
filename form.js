document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  // Obtener los valores del formulario
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;
  let telefono = document.getElementById('telefono').value;
  let consulta = document.getElementById('consulta').value;
  let stock = document.getElementById('stock').value;

  // Crear el contenido del archivo
  let contenido = `Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}\nConsulta: ${consulta}\nStock: ${stock}`;

  // Crear un Blob con el contenido
  let blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });

  // Usar FileSaver.js para guardar el archivo
  saveAs(blob, "contacto.txt");

  // Mostrar mensaje de envío
  document.getElementById('mensaje-envio').innerText = 'Formulario enviado y guardado como contacto.txt';
});
