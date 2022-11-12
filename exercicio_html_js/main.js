const numA = document.getElementById("num-A");
const numB = document.getElementById("num-B");
const form = document.getElementById("form-page");


form.addEventListener("submit", function (e) {
    
    e.preventDefault();

    if (numB.value > numA.value) {
        alert(`SUCESSO! O número B: ${numB.value} é MAIOR do que o número A: ${numA.value}`)
    } else {
        alert("O número A deve ser menor do que o número B")
        
    };
    e.addEventListener('click', window.location.reload());
})