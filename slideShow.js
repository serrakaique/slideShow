'use strict';

// variavel que coloca as imagens 
const images = [
    { 'id': '1', 'url':'./img/chrono.jpg' },
    { 'id': '2', 'url':'./img/inuyasha.jpg' },
    { 'id': '3', 'url':'./img/tenchi.jpg' },
    { 'id': '4', 'url':'./img/tenjhotenge.jpg' },
    { 'id': '5', 'url':'./img/yuyuhakusho.jpg' },
    { 'id': '6', 'url':'./img/ippo.png' },
]

//querySelector é uma versão melhorada do getElementById
const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
// forEach seria para cada imagem , += concatenar
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

//querySelectorAll( ), pega todos os objetos 
let items = document.querySelectorAll('.item');

const previous = () => {
//appendChild[items[0]] = pega a imagem e joga pro final
    containerItems.appendChild(items[0]);
//querySelectorAll( ), pega todos os objetos
    items = document.querySelectorAll('.item');
}

const next = () => {
//length = tras a quantidade, ele começa no zero
    const lastItem = items[items.length - 1];
//insertBefore = pega o ultimo item e coloca antes do primeiro
    containerItems.insertBefore( lastItem, items[0] );
//querySelectorAll( ), pega todos os objetos
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

