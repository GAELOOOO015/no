document.addEventListener('DOMContentLoaded', function() {
  // Obtener los elementos del DOM
  var sizeSelect = document.getElementById('size');
  var quantitySlider = document.getElementById('quantity');
  var quantityDisplay = document.getElementById('quantityDisplay');
  var refrescoCheckbox = document.getElementById('refresco');
  var papasCheckbox = document.getElementById('papas');
  var alitasCheckbox = document.getElementById('alitas');
  var totalDiv = document.getElementById('total');
  
  // Escuchar los eventos de cambio
  sizeSelect.addEventListener('change', actualizarTotal);
  quantitySlider.addEventListener('input', actualizarCantidad);
  quantitySlider.addEventListener('change', actualizarTotal);
  refrescoCheckbox.addEventListener('change', actualizarTotal);
  papasCheckbox.addEventListener('change', actualizarTotal);
  alitasCheckbox.addEventListener('change', actualizarTotal);
  
  // Actualizar la cantidad mostrada
  function actualizarCantidad() {
    quantityDisplay.textContent = quantitySlider.value;
  }
  
  // Actualizar el total
  function actualizarTotal() {
    var size = sizeSelect.value;
    var cantidad = parseInt(quantitySlider.value);
    var precio = obtenerPrecio(size);
    var extras = obtenerExtras();
    var total = cantidad * precio + extras;
    
    totalDiv.textContent = '$' + total;
  }
  
  // Obtener el precio según el tamaño de la pizza
  function obtenerPrecio(size) {
    if (size === 'individual') {
      return 100;
    } else if (size === 'grande') {
      return 120;
    } else if (size === 'familiar') {
      return 150;
    } else if (size === 'jumbo') {
      return 180;
    }
  }
  
  // Obtener el costo total de los extras seleccionados
  function obtenerExtras() {
    var extras = 0;
    
    if (refrescoCheckbox.checked) {
      extras += 20;
    }
    if (papasCheckbox.checked) {
      extras += 30;
    }
    if (alitasCheckbox.checked) {
      extras += 40;
    }
    
    return extras;
  }
});
