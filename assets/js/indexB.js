const img = document.querySelector('img')
const borderojo = document.querySelector('.borderojo')
let borde = false

borderojo.addEventListener("click", ()=>{
    if (borde == false) {
        img.style.border ="2px solid red"
        borde = true
        console.log (borde)
    }

    else if (borde == true) {
        img.style.border = "none"
        borde = false
        console.log (borde)
    }

})