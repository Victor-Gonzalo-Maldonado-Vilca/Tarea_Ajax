document.getElementById("comparasion").addEventListener("submit", function (evento) {
  evento.preventDefault();

  fetch("http://localhost/Ajax/JSON/data.json")
    .then(response => response.json())
    .then(data => {
      //extrayendo primera región
      const primeraRegion = data.find(region => region.region !== 'Lima' && region.region !== 'Callao');

      // Verificar que se encontró la primera región
      if (!primeraRegion) {
        console.error('No se encontró la primera región con las fechas necesarias para el gráfico.');
        return;
      }

      // Obtener las fechas de la primera región
      const fechas = primeraRegion.confirmed.map(entry => entry.date);
    })
});
