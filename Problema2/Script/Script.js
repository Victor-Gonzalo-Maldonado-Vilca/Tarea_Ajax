document.getElementById("comparasion").addEventListener("submit", function (evento) {
  evento.preventDefault();

  fetch("http://localhost/Ajax/JSON/data.json")
    .then(response => response.json())
});
