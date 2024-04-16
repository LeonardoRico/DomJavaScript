export const createHeader = () =>{
    var header = document.createElement('header');
    var tituloPrincipal = document.createElement('h1');
    tituloPrincipal.classList.add('titulo');
    tituloPrincipal.getElementsByClassName("titulo").innerHTML = "tu punto preciso";
    header.appendChild(tituloPrincipal);

    const sectionOne = document.createElement('section');
    sectionOne.classList.add('contenedor-botones');
    const botonInicio = document.createElement('button');
    botonInicio.classList.add('boton-inicio-sesion');
    //se asigna directamente el texto al contenido del botón
    botonInicio.textContent = "Iniciar sesión";
    sectionOne.appendChild(botonInicio);
    const botonRegitro = document.createElement('button');
    botonRegitro.classList.add('boton-registro');
    botonRegitro.textContent = "Registrarse";
    sectionOne.appendChild(botonRegitro);
    header.appendChild(sectionOne);
    return header;
}


/**
 * const botonInicio = document.createElement('button');
 * botonInicio.classList.add('boton-inicio-sesion')
 * botonInicio.innerHTML = "Iniciar sesión";
 * sectionOne.appendChild(botonInicio);
 */