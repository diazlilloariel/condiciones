 let input1 = document.querySelector("#input1").value 
 console.log(input1)
 let input2 = document.querySelector("#input2").value 
 console.log(input2)
 let input3 = document.querySelector("#input3").value 
 console.log(input3)
 let input4 = document.querySelector("#input4").value 
 console.log(input4)
 let input5 = document.querySelector("#input5").value 
 console.log(input5)
 let input6 = document.querySelector("#input6").value 
 console.log(input6)

 let total = document.querySelector("#total")
 let muchos = document.querySelector("#muchos")
 let btnConfirmar = document.querySelector("#btnConfirmar")

 
 btnConfirmar.addEventListener('click', () => {    
     input1 = document.querySelector("#input1").value 
     input2 = document.querySelector("#input2").value 
     input3 = document.querySelector("#input3").value 
     input4 = document.querySelector("#input4").value 
     input5 = document.querySelector("#input5").value 
     input6 = document.querySelector("#input6").value 
     
     let confirmar = Number(input1) + Number(input2)+ Number(input3)+ Number(input4)+ Number(input5)+ Number(input6)

     if(confirmar == 0 ){
         total.innerHTML = "0"
         muchos.innerHTML = "Debes elejir al menos 1 Sticker"
     }

     else if (confirmar => 1){
         total.innerHTML = confirmar
         console.log(confirmar)
         muchos.innerHTML = ""
     }

     if (confirmar >10){
         total.innerHTML = "demasiados"
         muchos.innerHTML = "Solo puedes llevar un maximo de 10 Stickers"
     }
 })

