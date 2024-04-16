export const createInfo = () => {
    const sectionOne = document.createElement('section');
    sectionOne.classList.add('information');

    const sectionTwo = document.createElement('section');
    sectionTwo.classList.add('destinos');
    sectionOne.appendChild(sectionTwo);

    const tituloSecundario = document.createElement('h2');
    tituloSecundario.innerHTML = 'Destinos destacados';
    sectionTwo.appendChild(tituloSecundario);

    const lista = document.createElement('ul');
    sectionTwo.appendChild(lista);

    //----------------IMAGEN 1------------------//
    const elementoLista1 = document.createElement('li');
    lista.appendChild(elementoLista1);

    const componente1 = document.createElement('a');
    componente1.action = '#';
    elementoLista1.appendChild(componente1);

    const imagen = document.createElement('img');
    imagen.src = '/img/galapagos.jpg';
    imagen.alt = 'Imagen de un destino turístico';
    componente1.appendChild(imagen);

    const tituloTerciario = document.createElement('h3');
    tituloTerciario.innerHTML = 'Galapagos';
    componente1.appendChild(tituloTerciario);

    //----------------IMAGEN 2------------------//
    const elementoLista2 = document.createElement('li');
    lista.appendChild(elementoLista2);

    const componente2 = document.createElement('a');
    componente2.action = '#';
    elementoLista2.appendChild(componente2);

    const imagen2 = document.createElement('img');
    imagen2.src = '/img/amazonas.jpg';
    imagen2.alt = 'Imagen de un destino turístico';
    componente2.appendChild(imagen2);

    const tituloTerciario2 = document.createElement('h3');
    tituloTerciario2.innerHTML = 'Amazonas';
    componente2.appendChild(tituloTerciario2);

    //----------------IMAGEN 3------------------//
    const elementoLista3 = document.createElement('li');
    lista.appendChild(elementoLista3);

    const componente3 = document.createElement('a');
    componente3.action = '#';
    elementoLista3.appendChild(componente3);

    const imagen3 = document.createElement('img');
    imagen3.src = '/img/iguazu.jpeg';
    imagen3.alt = 'Imagen de un destino turístico';
    componente3.appendChild(imagen3);

    const tituloTerciario3 = document.createElement('h3');
    tituloTerciario3.innerHTML = 'Iguazu';
    componente3.appendChild(tituloTerciario3);

    //-------------ASIDE----------------//
    const aside = document.createElement('aside');
    sectionTwo.appendChild(aside);

    const tituloAside = document.createElement('h3');
    tituloAside.innerHTML = 'Noticias destacadas';
    aside.appendChild(tituloAside);

    return sectionOne;
}