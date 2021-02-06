// Funciones que crea las card del catalogo. El parametro viene del product de forEach
function buildCatalogo(product){

    const htmlCatalogo =
                        
                        `<div class="card card-estilos" style="width: 18rem;">
                            <img src="${product.img}">
                            <div class="card-body">
                                <h5 class="title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text">${product.price}</p>
                                <input type="button" class="btn btn-secondary btnProduct" id="animacion-carrito" data-id="${product.id}" value="Agregar">
                            </div>
                        </div>`;

    return htmlCatalogo;
   
}


function BuildGrillaCarrito(product){

    const htmlGrillaCarrito =
                        
                            `<td>${product.name}</td>
                            <td>""</td>
                            <td>${product.price}</td>`
                        
    return htmlGrillaCarrito;
   
}
