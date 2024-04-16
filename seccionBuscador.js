export const createBuscador = (titulo) => {
    const section = document.createElement('section');
    section.classList.add('buscador');

    const tituloSecundario = document.createElement('h2');
    tituloSecundario.innerHTML = titulo;
    section.appendChild(tituloSecundario);

    const formulario = document.createElement('form');
    formulario.action = '#';
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Busca tu siguiente destino');
    formulario.appendChild(input);

    const botonBusqueda = document.createElement('button');
    botonBusqueda.setAttribute('type', 'submit');
    botonBusqueda.innerHTML = 'Buscar';
    formulario.appendChild(botonBusqueda);
    section.appendChild(formulario);
    return section;
}