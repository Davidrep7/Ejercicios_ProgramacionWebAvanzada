let artistas = [
    "Michael Jackson",
    "Madonna",
    "Elvis Presley",
    "The Beatles",
    ];

    // Aquí tengo la info que se va a pintar en la tabla, cada posición coincide con su artista.
    let datos = [
        [10, 13, 1972],
        [15, 10,1958],
        [20, 10,1985],
        [21, 17, 1960], 
    ];

    function mostrarDatos() {
        // Limpio la tabla antes de volver a llenarla para que no se repitan filas.
        let tabla = document.getElementById("tablaDatos");
        tabla.innerHTML = "";

        // Recorro los arreglos y voy armando cada fila con la información del artista.
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
    
        // Apenas carga la página, lleno la tabla para que ya se vea la info.
        document.addEventListener('DOMContentLoaded', mostrarDatos);