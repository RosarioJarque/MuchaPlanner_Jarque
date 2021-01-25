// Funcion para crear un card manipulando el DOM
function buildProductCard(product){
    // DIV PADRE 
    const div = document.createElement('div');
    
    const title = domBuilder.h2(product.name);
    const image = domBuilder.img(product.img);
    const description = domBuilder.p(product.description);
    const price = domBuilder.p(product.price);
    const button = domBuilder.button('Seleccionar','btnProduct', product.id);
    


    // Aca incluyo los elementos al contenedor (html) DIV 
    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);
    
    return div;
}

// Funcion para el boton cuando hace click
function onSelectClick(event) {
    // Con esto me devuelve el ID del boton cuando hago click
    const idProduct = event.target.dataset.id;
    // Con esto tomo el objeto del data que coincida con el id seleccionado
    selectedProduct = products.find(function(product){
        if (product.id == idProduct){
            return product;
        }
    });
    
    // Cada vez que selecciona pushea en el array vacio el producto
    selectedProducts.push(selectedProduct);   
    // Ahora esta data la guardo en el local storage
// En esta variable guardo la data como string(srtingify), xq en local stogare solo puedo guardar n° y string
// Cuando selecciono el producto, paso de objeto a string y lo guardo en key selectedProducts

    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));

    // Llamo a la funcion de crear la card del producto select
    buildCart();
}

// Funcion para generar una card de los productos seleccionados

function buildCart(){
    // Cada vez que selecciono un producto voy a obtener un card con los seleccionados
    const lastProduct = selectedProducts[selectedProducts.length -1];
    const card = buildProductCard(lastProduct);
    selectedContainer.appendChild(card);

}

// totalProductsContainer.textContent = selectedProducts.length;



// Instancio la clase (objeto) que cree en DomBuilder.js
const domBuilder = new DOMBuilder();
// Este array se va a llenar con las selecciones que se hagan
let selectedProducts = [];

// Funcion para que el codigo para que la app inicie cuando el documentento esta cargado
window.addEventListener('load', function(){
    // Aca defino que quiero que se creen en el div contenedor que tengo hardcodeado en el html    
    const productContainer = document.getElementById('productContainer');
    const selectedContainer = document.getElementById('selectedContainer');
    const totalProductsContainer = document.getElementById('totalProducts');
// Foreach para recorrer el arry de products data y generar el html dinamicamente   
    products.forEach(function(product){
    // Hago que la tarjeta se contruya solo si el producto esta disponible
        if(product.available){
            // Llamo a la funcion builProductCard par crear la card en cada vuelta
            const card = buildProductCard(product);
            // Al productContainer le agrego un hijo (las card que cree)
            productContainer.appendChild(card);
        }
    });

    // Para recuperarlo, lo necesito como objeto lo convierto asi..
    // Cuando mi aplicacion inicia lo convierto de string a objeto para poder
    // Usar el forEach y armo la card del cart
    const cart = JSON.parse(localStorage.getItem('selectedProducts'));
    
    if(cart){
// Esto es para que re imprima en la columna del carrito
        cart.forEach(function(product){
        const card = buildProductCard(product);
        selectedContainer.appendChild(card);  
        });
    }
    

// EN ESTE PUNTO TENGO EL DOM LISTO
// Ahora voy a acceder a los botones
// Con querySlectorAll llamo a todos los elementos que tengan una misma clase o id
    const btnProducts = document.querySelectorAll('.btnProduct');
    // hago un forEach para recorrer todos los botones
    btnProducts.forEach(function(btnProduct){
        // evento para que escuche el click
        btnProduct.addEventListener('click', onSelectClick );
    })
})

