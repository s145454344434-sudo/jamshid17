const heroes = [
  {
    name: "Spiderman",
    age: 18,
    power: "To'r chiqarish",
    info: "Marvel qahramoni. Juda chaqqon.",
    likes: 0,
  },
  {
    name: "Betman",
    age: 32,
    power: "Aql va texnologiya",
    info: "Gotham shahrini himoya qiladi.",
    likes: 0,
  },
  {
    name: "Flesh",
    age: 21,
    power: "Juda tez yugurish",
    info: "Dunyodagi eng tez qahramon.",
    likes: 0,
  },
];

function createHeroCard(hero) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${hero.name}</h2>
    <p>Yoshi: ${hero.age}</p>
    <p>Kuch: ${hero.power}</p>
    <p>Ma'lumot: ${hero.info}</p>
    <p>Likes: <span class="like-count">${hero.likes}</span></p>
    <button class="like-btn">Like</button>
  `;
  return card;
}

function renderHeroes() {
  const container = document.getElementById("container");
  container.innerHTML = "";
  heroes.forEach((hero, index) => {
    const card = createHeroCard(hero);
    const likeBtn = card.querySelector(".like-btn");
    const likeCount = card.querySelector(".like-count");
    likeBtn.addEventListener("click", () => {
      heroes[index].likes += 1;
      likeCount.textContent = heroes[index].likes;
    });
    container.appendChild(card);
  });
}
document.getElementById("addBtn").addEventListener("click", () => {
  const name = prompt("Qahramon nomi:");
  const age = parseInt(prompt("Qahramon yoshi:"));
  const power = prompt("Qahramon kuchi:");
  const info = prompt("Qahramon haqida ma'lumot:");
  if (name && age && power && info) {
    heroes.push({ name, age, power, info, likes: 0 });
    renderHeroes();
  }
});
renderHeroes();

