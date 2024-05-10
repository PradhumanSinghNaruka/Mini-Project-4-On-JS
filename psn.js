let input1 = document.querySelector("#input");
let btn = document.querySelector("#btn1");
let ans1 = document.querySelector("#ans");
let btnPrint = document.querySelector("#btn2");
let order = document.querySelector("#cars");
let sort = document.querySelector("#btn3");

let array = [];

btn.addEventListener('click', add);

function add() {
    let number = Number(input1.value);
    if (isNaN(number)) {
        ans1.textContent = "Please Enter a Valid Number";
    } else {
        array.push(number);
        ans1.textContent = `${number} Add Number in Array`;
    }
    input1.value = ''; 
}

btnPrint.addEventListener('click', addArray);

function addArray() {
    ans1.textContent = `Your Array: [${array.join(', ')}]`;
}

sort.addEventListener('click', sorting);

function sorting() {
    if (order.value === 'Assending Order') {
        array.sort((a, b) => a - b);
        ans1.textContent = `Sorted Array: [${array.join(', ')}]`;
    } else {
        array.sort((a, b) => b - a);
        ans1.textContent = `Sorted Array: [${array.join(', ')}]`;
    }
}
