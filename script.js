const productos = [
  { nombre: 'Bifes en Oferta', precio: 70, stock: 10 },
  { nombre: 'Supremas', precio: 30, stock: 5 },
  { nombre: 'Filet de merluza', precio: 20, stock: 8 },
  { nombre: 'Tomate Mar del Plata kilo', precio: 40, stock: 12 },
  { nombre: 'Lechuga mantecosa x kilo', precio: 60, stock: 3 },
  { nombre: 'Zanahoria x kilo', precio: 25, stock: 7 }
];

window.onload = () => {
  const productList = document.getElementById('productos-lista');
  
  productos.forEach((producto, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${producto.nombre} - $${producto.precio} 
      <input type="number" id="cantidad-${index}" class="quantity-input" min="0" max="${producto.stock}" value="0">
    `;
    productList.appendChild(li);
  });

  document.getElementById('comprar').addEventListener('click', () => {
    let total = 0;
    let mensaje = '';
    let productosSeleccionados = 0;
    let detallesCompra = '';

    productos.forEach((producto, index) => {
      const cantidadInput = document.getElementById(`cantidad-${index}`);
      const cantidad = parseInt(cantidadInput.value, 10);

      if (cantidad > 0) {
        productosSeleccionados++;
        if (cantidad > producto.stock) {
          mensaje = `No hay suficiente stock para ${producto.nombre}.`;
          return;
        } else {
          total += producto.precio * cantidad;
          detallesCompra += `${producto.nombre}: ${cantidad} x $${producto.precio} = $${producto.precio * cantidad}\n`;
        }
      }
    });

    const metodoPago = document.querySelector('input[name="metodo-pago"]:checked').value;
    let metodoPagoTexto = '';

    switch (metodoPago) {
      case 'tarjeta':
        metodoPagoTexto = 'Tarjeta de Crédito en Cuotas';
        break;
      case 'debito':
        metodoPagoTexto = 'Débito';
        break;
      case 'efectivo':
        metodoPagoTexto = 'Efectivo';
        break;
      default:
        metodoPagoTexto = 'No especificado';
    }

    if (mensaje) {
      document.getElementById('mensaje').innerText = mensaje;
    } else if (productosSeleccionados > 0) {
      document.getElementById('mensaje').innerText = `
        Productos seleccionados: ${productosSeleccionados}\n
        Detalles de la compra:\n
        ${detallesCompra}\n
        Total de la compra: $${total}\n
        Método de Pago: ${metodoPagoTexto}
      `;
    } else {
      document.getElementById('mensaje').innerText = 'Por favor, seleccione al menos un producto.';
    }
  });
};
