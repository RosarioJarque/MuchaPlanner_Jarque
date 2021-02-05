let selectedProducts = []; 

// Funcion para el boton 
function onSelectClick(event){
    // Igual el idProduct al objeto que toma el dataset por data-id
    const idProduct = event.target.dataset.id
    // find nos devuelve el primer objeto que cumple la condicion (id)
    selectedProduct = products.find(function(product){
        if(product.id === idProduct){
            return product;
        }
    });

    //Agrego al array nuevo lo seleccionado 
selectedProducts.push(selectedProduct);
// Guardo el array de productos seleccionados en el LocalSotorage. Con JSON.stringify convierto el objeto a string
localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));


// Llamo a la funcion que crea la grilla
grillaCarrito();

}


// funcion para crear la grilla carrito
function grillaCarrito () {
    // Esto es para que cuando haga el for each solo tome el ultimo y no encadene contando 1, 12, 123.
    const lastProduct = selectedProducts[selectedProducts.length -1];
    const grilla = BuildGrillaCarrito(lastProduct);
    
    selectedContainer.innerHTML += grilla;
}
    
window.addEventListener('load', function(){
   
    // Esta variable guarda el lugar donde creo el catalogo
    const productContainer = document.getElementById('productContainer');
    // Esta variable guarda el lugar donde creo la grilla
    const selectedContainer = document.getElementById('selectedContainer');
    
    // En cada vuelta recibo un item del data. Que es Product, el que uso de paramentro.
    products.forEach(function(product){
        if(product.available){
            const card = buildCatalogo(product);
            productContainer.innerHTML += card; 
        }
    });

    // Vuelvo a convertir en objeto lo que tomo de storage
    const cart = JSON.parse(localStorage.getItem('selectedProducts'));

    // Imprime lo que guarda el storage
    if(cart) {
        cart.forEach(function(product){
            const grilla = BuildGrillaCarrito(product);
            selectedContainer.innerHTML += grilla;    
        });
    }
    




    // DOM Creado, le doy funcionalidad a btn
    // QuerySelectorAll va a tomar a TODOS los botones y genera un array
    const btnProducts = document.querySelectorAll('.btnProduct');
    // Recorro todos los botones
    btnProducts.forEach(function(btnProduct){
        btnProduct.addEventListener('click', onSelectClick);
    })
})


















// const divPadre = document.createElement('div');
    // divPadre.classList.add('card', 'card-estilos');
        
    //     const image = document.createElement('img');
    //     image.src = product.img;
    //     const divHijo = document.createElement('div');
    //     divHijo.classList.add('card-body');

    //         const title = document.createElement('h5');
    //         title.textContent = product.name;
    //         title.classList.add('card-title');

    //         const description = document.createElement('p');
    //         description.textContent = product.description;
    //         description.classList.add('card-text');
            
    //         const price = document.createElement('p');
    //         price.textContent = product.price;
    //         price.classList.add('card-text');
            
    //         const button = document.createElement('button');
    //         button.textContent = "Agregar";
    //         button.classList.add('btn', 'btn-secondary', 'btnProduct');

    // divPadre.appendChild(image);
    // divPadre.appendChild(divHijo);
        
    //     divHijo.appendChild(title);
    //     divHijo.appendChild(description);
    //     divHijo.appendChild(price);
    //     divHijo.appendChild(button);

    // return divPadre;

    // cambiar innerhtml por         // productContainer.appendChild(card);

