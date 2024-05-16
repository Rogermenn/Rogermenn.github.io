var contador = 0;
function agregarAlCarrito() {
  contador++;
  document.getElementById("contador").innerHTML = contador;
  document.getElementById("contador2").innerHTML = contador;
  window.scrollTo({top: 0, behavior: 'smooth'});

}
