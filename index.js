const cajita = document.getElementById("cajita");
const boton = document.getElementById("boton");

async function usuarios() {
    try {
        const peticion = await fetch("https://randomuser.me/api/");
        const respuesta = await peticion.json();

        const usuario = respuesta.results[0];

        const nombre = document.getElementById("nombre");
        const correo = document.getElementById("correo");
        const pais = document.getElementById("pais");

        nombre.textContent = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;
        correo.textContent = `Email: ${usuario.email}`;
        pais.textContent = `País: ${usuario.location.country}`;

        const imagenVieja = document.querySelector("img");
        if (imagenVieja) {
            imagenVieja.remove();
        }

        const img = document.createElement("img");
        img.src = usuario.picture.large;
        img.alt = "Foto de usuario";
        
        cajita.appendChild(img);

    } catch (error) {
        const nombre = document.getElementById("nombre");
        if (nombre) nombre.textContent = "La conexión no funcionó.";
    }
}

usuarios();
boton.addEventListener("click", usuarios);