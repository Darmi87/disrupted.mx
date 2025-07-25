const talents = [
  { name: "Aldo", image: "assets/img/talent-images/aldo.jpg", link: "talents/aldo.html" },
  { name: "Antrax", image: "assets/img/talent-images/antrax.jpg", link: "talents/antrax.html" },
  { name: "Yetus", image: "assets/img/talent-images/yetus.jpg", link: "talents/yetus.html" },
  { name: "Barbie", image: "assets/img/talent-images/barbie.jpg", link: "talents/barbie.html" },
  { name: "Danyan", image: "assets/img/talent-images/danyan.jpg", link: "talents/danyan.html" },
  { name: "Josue", image: "assets/img/talent-images/josue.jpg", link: "talents/josue.html" },
  { name: "Juan", image: "assets/img/talent-images/juan.jpg", link: "talents/juan.html" },
  { name: "Yair", image: "assets/img/talent-images/yair.jpg", link: "talents/yair.html" },
  { name: "Karma", image: "assets/img/talent-images/karma.jpg", link: "talents/karma.html" },
  { name: "Magui Sunshine", image: "assets/img/talent-images/magui.jpg", link: "talents/magui-sunshine.html" },
  { name: "Scarday", image: "assets/img/talent-images/scar.jpg", link: "talents/scarday.html" },
  { name: "Angel soy yo", image: "assets/img/talent-images/angel.jpg", link: "talents/angel-soy-yo.html" },
  { name: "Erkvaldo", image: "assets/img/talent-images/erk.jpg", link: "talents/erkvaldo.html" },
  { name: "Kassandra", image: "assets/img/talent-images/kasandra.jpg", link: "talents/kassandra.html" },
  { name: "Merulah", image: "assets/img/talent-images/meru.jpg", link: "talents/merulah.html" },
  { name: "Boomsniper", image: "assets/img/talent-images/boom.jpg", link: "talents/boomsniper.html" }
];

const shuffledTalents = talents.sort(() => Math.random() - 0.5);
const grid = document.getElementById("talentGrid");

shuffledTalents.forEach(talent => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <a href="${talent.link}">
      <img src="${talent.image}" alt="${talent.name}">
      <p>${talent.name}</p>
    </a>
  `;
  grid.appendChild(card);
});
