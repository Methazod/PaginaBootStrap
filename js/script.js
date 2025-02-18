function changeIcon(){
    var icono = document.getElementById("icono");
    if(icono.className == "bi bi-chevron-down"){
        icono.className = "bi bi-chevron-up";
    } else if(icono.className == "bi bi-chevron-up") {
        icono.className = "bi bi-chevron-down";
    }
}

function requisitos(event, elementoActual){    
    
    // Hacemos que la pagina no se recargue
    event.preventDefault()

    // Miramos si el elemento clicado es el mismo que el actual para que no cambie.
    if (elementoActual.classList.contains("active")) {
        return null;
    }

    // Buscamos los elementos que necesitamos
    var sistemas = document.getElementsByClassName("sistema");    
    
    // Recorremos los elementos para saber cual es el elemento activo
    var elementoActivo = null;
    for (var elemento of sistemas) {
        if (elemento.classList.contains("active")) {
            elementoActivo = elemento;
            break;
        }
    }
    
    // Le quitamos al elemento actual la clase active y le añadimos la clase active al elemento Activo
    elementoActivo.classList.remove("active");
    elementoActual.classList.add("active");

    // Obtenemos el elemento que mostrara los requisitos y lo vaciamos
    var requisitos = document.getElementById("requisitos");
    requisitos.innerHTML = '<thead>'
                          + '<tr>'
                            + '<th scope="col"></th>'
                            + '<th scope="col">Mínimo:</th>'
                            + '<th scope="col">Recomendado: </th>                          '
                          + '</tr>'
                        + '</thead>';
    var tablaWindows = '<tbody>'
                          + '<tr>'
                            + '<th scope="row">SO:</th>'
                            + '<td>Windows 7</td>'
                            + '<td>Windows 10</td>'
                          + '</tr>'
                          + '<tr>'
                            + '<th scope="row">Procesador:</th>'
                            + '<td>Intel Core 2 Duo E5200</td>'
                            + '<td>Intel Core i5</td>'                            
                          + '</tr>'
                          + '<tr>'
                            + '<th scope="row">Memoria:</th>'
                            + '<td>4 GB de RAM</td>'
                            + '<td>8 GB de RAM</td>'                            
                          + '</tr>'  
                          + '<tr>'
                            + '<th scope="row">Gráficos</th>'
                            + '<td>GeForce 9800GTX+ (1GB)</td>'
                            + '<td>GeForce GTX 560</td>'                    
                          + '</tr>'
                          + '<tr>'
                            + '<th scope="row">DirectX:</th>'
                            + '<td>Versión 10</td>'
                            + '<td>Versión 11</td>'                           
                          + '</tr>'
                          + '<tr>'
                            + '<th scope="row">Almacenamiento:</th>'
                            + '<td colspan="2">9 GB de espacio disponible</td>'                                          
                          + '</tr>'
                        + '</tbody>';
    var tablaMac = '<tbody>'
                          + '<tr>'
                            + '<th scope="row">SO:</th>'
                            + '<td colspan="2">Mac OS 10.13 (64bit)</td>'                            
                          + '</tr>'
                          + '<tr>'
                            + '<th scope="row">Procesador:</th>'
                            + '<td>Intel Core i3</td>'
                            + '<td>Intel Core i5</td>'                            
                          + '</tr>'
                          + '<tr>'
                            + '<th scope="row">Memoria:</th>'
                            + '<td>4 GB de RAM</td>'
                            + '<td>8 GB de RAM</td>'                            
                          + '</tr>'  
                          + '<tr>'
                            + '<th scope="row">Gráficos</th>'
                            + '<td>GeForce GTX 470</td>'
                            + '<td>GeForce GTX 570</td>'                    
                          + '</tr>'                          
                          + '<tr>'
                            + '<th scope="row">Almacenamiento:</th>'
                            + '<td colspan="2">9 GB de espacio disponible</td>'                                          
                          + '</tr>'
                        + '</tbody>';
    var tablaLinux = '<tbody>'
                          + '<tr>'
                            + '<th scope="row">SO:</th>'
                            + '<td colspan="2">Ubuntu 16.04 LTS (64bit)</td>'                            
                          + '</tr>'
                          + '<tr>'
                            + '<th scope="row">Procesador:</th>'
                            + '<td>Intel Core 2 Duo E5200</td>'
                            + '<td>Intel Core i5</td>'                            
                          + '</tr>'
                          + '<tr>'
                            + '<th scope="row">Memoria:</th>'
                            + '<td>4 GB de RAM</td>'
                            + '<td>8 GB de RAM</td>'                            
                          + '</tr>'  
                          + '<tr>'
                            + '<th scope="row">Gráficos</th>'
                            + '<td>GeForce 9800GTX+ (1GB)</td>'
                            + '<td>GeForce GTX 560</td>'                    
                          + '</tr>'                          
                          + '<tr>'
                            + '<th scope="row">Almacenamiento:</th>'
                            + '<td colspan="2">9 GB de espacio disponible</td>'                                          
                          + '</tr>'
                        + '</tbody>';
    if(elementoActual.innerHTML == "Windows"){
        requisitos.innerHTML += tablaWindows;
    } else if(elementoActual.innerHTML == "MacOS"){
        requisitos.innerHTML += tablaMac;
    } else if(elementoActual.innerHTML == "Linux"){
        requisitos.innerHTML += tablaLinux;
    }
}