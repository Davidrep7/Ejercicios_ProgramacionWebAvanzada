let artistas = [
    "Michael Jackson",
    "Madonna",
    "Elvis Presley",
    "The Beatles",
    ];

    let datos = [
        [10, 13, 1972],
        [15, 10,1958],
        [20, 10,1985],
        [21, 17, 1960], 
    ];

    function mostrarDatos() {
        let tabla = document.getElementById("tablaDatos");
        tabla.innerHTML = "";

        for (let i = 0; i < artistas.length; i++) {
            tabla.innerHTML += `
            <tr>
                <td>${artistas[i]}</td>
                <td>${datos[i][0]}</td>
                <td>${datos[i][1]}</td>
                <td>${datos[i][2]}</td>
            </tr>
            `;
        }
    }
    
        // Llamar a la función al cargar el script
        document.addEventListener('DOMContentLoaded', mostrarDatos);