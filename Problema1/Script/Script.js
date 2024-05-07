let myChart;
document.getElementById("comparasion").addEventListener("submit", function (evento) {
  evento.preventDefault();
  //Extraccion de datos del formulario
  const formData = new FormData(this);
  const region1 = formData.get('region1');
  const region2 = formData.get('region2');
  
});