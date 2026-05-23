
// Menu responsive
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = document.getElementById("menuIcon");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// Cerrar menú al hacer clic en cualquier enlace (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.className = "fa-solid fa-bars";
  });
});

// Validar el formulario y enviar información a mail
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validación
  if (nombre === "" || email === "" || mensaje === "") {
    message.textContent = "Todos los campos son obligatorios.";
    message.style.color = "#970000";
    message.style.fontWeight = "bolder";
    message.style.fontSize = "1.5em";
    return; // Detiene la ejecución si hay campos vacíos para validacion del usuario
  } 

  // En el formulario si todo está bien, le mostramos al usuario o cliente un mensaje de "Enviando..."
  message.textContent = "Enviando mensaje...";
  message.style.color = "#555";
  message.style.fontSize = "1.2em";

  // Conexión de mail utilizando EmailJ para que lo validen
  emailjs.sendForm('service_a40daaf', 'template_h6yg2c9', this)
    .then(function() {
      // si el mensaje tiene éxito
      message.textContent = "¡Formulario enviado correctamente!";
      message.style.color = "#004d1c";
      message.style.fontWeight = "bolder";
      message.style.fontSize = "1.5em";
      form.reset();
    }, function(error) {
      // si el mensaje tiene Error
      message.textContent = "Hubo un error al enviar el mensaje. Intenta de nuevo.";
      message.style.color = "#970000";
      console.log('Error de EmailJS:', error);
    });
});
