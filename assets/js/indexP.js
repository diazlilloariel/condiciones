let select1 = document.querySelector("#select1").value
let select2 = document.querySelector("#select2").value
let select3 = document.querySelector("#select3").value
let valor = document.querySelector("#valor")

let btnConfirmar = document.querySelector("#btnConfirmar")
let btnRecordar = document.querySelector("#btnRecordar")

btnRecordar.addEventListener("click", () => {
    alert("La password 1 es 911 y la password 2 es 714")
    })

btnConfirmar.addEventListener("click", () => {
    select1 = document.querySelector("#select1").value
    select2 = document.querySelector("#select2").value
    select3 = document.querySelector("#select3").value
    
    if (select1 == 9 && select2 == 1 && select3 == 1){
        valor.innerHTML = "Password 1 correcto"
    }
    else if (select1 == 7 && select2 == 1 && select3 == 4){
        valor.innerHTML = "Password 2 correcto"
    }
    
    else {
        valor.innerHTML = "Password incorrecto"
    }
    
})