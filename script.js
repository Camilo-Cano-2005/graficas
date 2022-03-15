let envBtn = document.getElementById("boton");
envBtn.addEventListener("click", enviar);

function enviar(event) {
    event.preventDefault()

    let producto = document.getElementById("producto").value
    let edad = document.getElementById("edad").value
    let cantidad = document.getElementById("cantidad").value
    let cantTotal = producto * cantidad

    
    if (edad >= 18) {
        console.log("Puedes comprar el producto :)")
        console.log("Precio del producto: " + producto + " foxes")
        console.log("Tu edad es " + edad + " años")
        console.log("La cantidad que quieres comprar es de: " + cantidad + " procesadores")
        console.log("La precio total de compra es de " + cantTotal + " foxes")

    }else {
        console.log("no puedes comprar el producto :(")
    }
}