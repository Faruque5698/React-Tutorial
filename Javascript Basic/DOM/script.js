// console.dir(document.all);
// for (let element of document.all) {
//     console.log(element);
// }
//DOM Traversal

// console.dir(document);
let h1 = document.getElementById('h1');
console.log(h1);
h1.textContent = 'Nahid';
console.dir(h1);
h1.style.color = 'red';
h1.style.fontSize = '50px'

// document.getElementsByClassName('h1');
// const h1Element = document.querySelector('h1');

const divElement = document.createElement('div');
divElement.style.fontSize = '50px'
divElement.className = 'hero';
divElement.setAttribute('title', 'Red div');
divElement.style.background = 'red';
divElement.style.height = '50px';
divElement.style.width = '50px';
const container = document.querySelector('.app');
// container.appendChild(divElement); append only hole text o bose but appendChild hole only html
const h2Element = container.querySelector('h2');
h2Element.appendChild(divElement);
container.insertBefore(divElement, h2Element);

const deleteButton = document.querySelector('#button');
deleteButton.addEventListener('click', (e) => {
    console.log('clicked');
})