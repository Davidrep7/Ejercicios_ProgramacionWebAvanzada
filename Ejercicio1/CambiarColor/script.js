function pintar() {
    // Le pregunto al usuario qué color quiere y lo paso a minúsculas para no fallar por mayúsculas.
    let color = prompt("Introduce un color(rojo, azul, amarillo)");


    color = color.toLowerCase();

    // Según el color que escriba, cambio el fondo del body.
    switch (color) {
        case "rojo":
            document.body.style.backgroundColor = "red";
            break;
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "amarillo":
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            alert("Color no válido");
    }
}