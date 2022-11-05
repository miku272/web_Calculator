let string = '';
let inputScreen = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.innerHTML == '=') {
            string = eval(string);
            inputScreen.value = string;
        } else if (event.target.innerHTML == 'AC') {
            string = '';
            inputScreen.value = string;
        } else {
            string += event.target.innerHTML;
            inputScreen.value = string;
        }
    });
});