const button = document.querySelector('button');

let number = 1;
const addDiv = function(){
    const divElement = document.createElement('div');
    divElement.classList = 'square'
    console.log('dodaje div')
    divElement.textContent = number;
    if (number%5 == 0) {
        divElement.classList.add('circle')
    }
    document.body.appendChild(divElement);
    number++
    
}


button.addEventListener('click', addDiv)