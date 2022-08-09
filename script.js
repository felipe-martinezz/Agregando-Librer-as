class Champion {
    constructor(marca, modelo, talle, precio) {
        this.marca = marca
        this.modelo = modelo
        this.talle = talle
        this.precio = precio
    }
}

const championes1 = new Champion("Nike", "Hyperdunk", 45, 195)
const championes2 = new Champion("Nike", "KD", 47, 205)
const championes3 = new Champion("Adidas", "Harden", 43, 150)
const championes4 = new Champion("Adidas", "Rose", 40, 165)
const championes5 = new Champion("Under armour", "Curry", 46, 250)
const championes6 = new Champion("Under armour", "Embiid", 41, 220)
const championes7 = new Champion("Converse", "Chuck Taylor", 42, 120)
const championes8 = new Champion("Jordan", "Melo III", 44, 210)

const championes = [championes1, championes2, championes3, championes4, championes5, championes6, championes7, championes8]

const botonCarrito = document.getElementById("carrito")
const divChampiones = document.getElementById("divChampiones")

championes.forEach((champion, indice) => {
    divChampiones.innerHTML += `
    <div class="card border-secondary mb-3" id="champion${indice}" style="max-width: 20rem; margin:3px">
    <div class="card-header">${champion.marca}</div>
        <div class="card-body">
            <h4 class="card-title">${champion.modelo}</h4>
            <p class="card-text">$${champion.precio}</p>
            <p class="card-text">Talle: ${champion.talle}</p>
            <button class="btn btn-secondary"><i class="fas fa-cart-plus"></i></button>
        </div>
</div>
      `
})

championes.forEach((champion, indice) => {
    document.getElementById(`champion${indice}`).lastElementChild.lastElementChild.addEventListener('click', () => {
        Toastify({
            text: "Championes agregados al carrito",
            duration: 3000,
            //destination: "https://github.com/apvarun/toastify-js",
            //newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to bottom left, #30655A, #0229BA)",
            },
            onClick: function(){
                console.log("Diste click")
            } // Callback after click
          }).showToast();
    })
})

botonCarrito.addEventListener('click', () => {
    Swal.fire({
        title: 'Carrito',
        showCancelButton: true,
        cancelButtonText: 'Seguir comprando',
        confirmButtonText: 'Finalizar compra',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Compra finalizada', '', 'success')
        } 
      })
})

