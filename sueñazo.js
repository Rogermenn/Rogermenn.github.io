var contador = 0;
function agregarAlCarrito() {
  contador++;
  document.getElementById("contador").innerHTML = contador;
  document.getElementById("contador2").innerHTML = contador;
  window.scrollTo({top: 0, behavior: 'smooth'});

}

let i = 0;
let txt = 'Instrumentos favoritos'; // The text
let speed = 50; // Speed/duration of effect in milliseconds

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('h1 span').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter; // Call the function when the window has finished loading
