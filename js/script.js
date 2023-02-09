const buttonSerie = document.querySelector("#btn-serie");
let horas;
let minutos;
let segundos;

setInterval(() => {
  let reloj = document.querySelector(".reloj");
  let tiempoActual = new Date();
  horas = tiempoActual.getHours();
  minutos = tiempoActual.getMinutes();
  segundos = tiempoActual.getSeconds();

  horas = ("0" + horas).slice(-2);
  minutos = ("0" + minutos).slice(-2);
  segundos = ("0" + segundos).slice(-2);

  reloj.innerHTML = `${horas}:${minutos}:${segundos}`;
}, 1000);

function generarSerie() {
  let serie = [];
  console.log(parseInt(minutos[0]));
  console.log(parseInt(minutos[1]));
  console.log(parseInt(segundos));
  for (let i = 0; i < parseInt(segundos); i++) {
    if (i == 0) {
      serie.push(parseInt(minutos[0]));
    } else if (i == 1) {
      serie.push(parseInt(minutos[1]));
    } else {
      serie.push(serie[i - 1] + serie[i - 2]);
    }
  }

  console.log(serie.toString());
  const showSerie = document.querySelector(".show-serie");
  showSerie.innerHTML = serie.reverse().toString();
}

buttonSerie.addEventListener("click", () => {
  generarSerie();
});
