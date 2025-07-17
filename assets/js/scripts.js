const talentos = [
  { nombre: "Creador 1", imagen: "assets/img/creador1.jpg" },
  { nombre: "Creador 2", imagen: "assets/img/creador2.jpg" },
  { nombre: "Creador 3", imagen: "assets/img/creador3.jpg" },
  { nombre: "Creador 4", imagen: "assets/img/creador4.jpg" },
  // Agregá más talentos aquí
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function renderTalents() {
  const grid = document.getElementById("talentGrid");
  shuffle(talentos).forEach(t => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${t.imagen}" alt="${t.nombre}" />
      <p>${t.nombre}</p>
    `;
    grid.appendChild(card);
  });
}

renderTalents();
