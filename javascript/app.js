// Funcion para crear un card manipulando el DOM
function buildProductCard(product){
    // DIV PADRE 
    const div = document.createElement('div');
    
    const title = domBuilder.h2(product.name);
    const image = domBuilder.img(product.img);
    const description = domBuilder.p(product.description);
    const price = domBuilder.p(product.price);
    const button = domBuilder.button('Seleccionar','btnProduct');
    
    // Aca incluyo los elementos al contenedor (html) DIV 
    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);
    
    return div;
}

// Instancio la clase (objeto) que cree en DomBuilder.js
const domBuilder = new DOMBuilder();

// Funcion para que el codigo para que la app inicie cuando el documentento esta cargado
window.addEventListener('load', function(){

    // Aca defino que quiero que se creen en el div contenedor que tengo hardcodeado en el html    
    const productContainer = document.getElementById('productContainer');

// Foreach para recorrer el arry de products y generar el html dinamicamente   
    products.forEach(function(product){
    // Hago que la tarjeta se contruya solo si el producto esta disponible
        if(product.available){
            // Llamo a la funcion builProductCard par crear la card en cada vuelta
            const card = buildProductCard(product);
            // Al productContainer le agrego un hijo (las card que cree)
            productContainer.appendChild(card);
        }
    });

// EN ESTE PUNTO TENGO EL DOM LISTO
// Ahora voy a acceder a los botones
// Con querySlectorAll llamo a todos los elementos que tengan una misma clase o id
    const btnProducts = document.querySelectorAll('.btnProduct');
})
