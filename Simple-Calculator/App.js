let string = "";
let maxLength = 8;  
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
button.addEventListener('click', (e) => {

    if (e.target.innerHTML === '=') {
        if (string !== "") {
            string = eval(string);
            document.querySelector('input').value = string;
        }
    }
    
    else if (e.target.innerHTML === 'AC') {
        string = "";
        document.querySelector('input').value = string;
    }
   
    else if (e.target.innerHTML === 'DEL') {
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
    }
    
    else {

        if (string.length < maxLength) {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    }
   });
});
