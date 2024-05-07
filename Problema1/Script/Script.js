let myChart;
document.getElementById("comparasion").addEventListener("submit", function (evento) {
  evento.preventDefault();
  //Extraccion de datos del formulario
  const formData = new FormData(this);
  const region1 = formData.get('region1');
  const region2 = formData.get('region2');
  
  fetch("http://localhost/nuevo/JASON/data.json")
    .then(response => response.json())
    .then(data => {
      //Solicitando informacion del archivo data.json 
      const datosRegion1 = data.find(region => region.region === region1);
      const datosRegion2 = data.find(region => region.region === region2);

      const fechas = datosRegion1.confirmed.map(entry => entry.date);
      const valoresRegion1 = datosRegion1.confirmed.map(entry => parseInt(entry.value));
      const valoresRegion2 = datosRegion2.confirmed.map(entry => parseInt(entry.value));
    })
});