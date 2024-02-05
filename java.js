let counter= 0;
let numbervalue = document.getElementById('number-value');
let incrementbtn = document.getElementById('increment-btn');
let decrementbtn = document.getElementById('decrement-btn');
let resetbtn = document.querySelector('#reset');

incrementbtn.addEventListener('click',() =>{
    counter++;
    numbervalue.innerHTML = counter;
})


decrementbtn.addEventListener('click',() =>{
    counter--;
    numbervalue.addEventListener= counter;
})

resetbtn.addEventListener('click', reset);

function reset(){
counter = 0;
numbervalue.innerHTML = counter;
}