function pintar() {
    let color = prompt("Introduce un color(rojo, azul, amarillo)");


    color = color.toLowerCase();

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