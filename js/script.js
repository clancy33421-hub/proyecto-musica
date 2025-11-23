
document.getElementById("btnColor").addEventListener("click", function () {
    const colores = ["#6a1b9a", "#c2185b", "#512da8", "#303f9f", "#00838f"];
    const random = Math.floor(Math.random() * colores.length);

    document.querySelector("header").style.background = colores[random];
});


document.getElementById("btnGenero").addEventListener("click", function () {
    const genero = document.getElementById("genero").value;
    const info = document.getElementById("infoGenero");

    const mensajes = {
        rock: "🎸 Rock: nunca pasa de moda.",
        pop: "🎤 El pop es pegajoso, moderno y muy popular.",
        electrónica: "🎛️ La electrónica es ritmo, atmósferas y beats.",
        jazz: "🎷 Música para relajarte un rato.",
        hiphop: "🎤 El hip-hop es flow, cultura y expresión urbana."
    };

    if (genero === "") {
        info.style.color = "red";
        info.textContent = "Selecciona un género para mostrar información.";
    } else {
        info.style.color = "purple";
        info.textContent = mensajes[genero];
    }
});


document.getElementById("btnEnviar").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value.trim();
    const cancion = document.getElementById("cancion").value.trim();
    const artista = document.getElementById("artista").value.trim();
    const resultado = document.getElementById("resultado");

    if (nombre === "" || cancion === "" || artista === "") {
        resultado.style.color = "red";
        resultado.textContent = "Por favor completa todos los campos.";
    } else {
        resultado.style.color = "green";
        resultado.textContent =
            `Gracias ${nombre} 🎶. Tu recomendación "${cancion}" de ${artista} fue enviada.`;

        document.getElementById("miFormulario").reset();
    }
});
