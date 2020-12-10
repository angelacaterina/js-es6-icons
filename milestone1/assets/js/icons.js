$(document).ready(function () {
  // 1. Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
  class icone {
    constructor(name, prefix, type, family) {
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  }

  const Icone = [
    new icone("cat", "fas", "fa-cat", "animals"),
    new icone("crow", "fas", "fa-crow", "animals"),
    new icone("dog", "fas", "fa-dog", "animals"),
    new icone("dove", "fas", "fa-dove", "animals"),
    new icone("dragon", "fas", "fa-dragon", "animals"),
    new icone("fish", "fas", "fa-fish", "animals"),
    new icone("hippo", "fas", "fa-hippo", "animals"),
    new icone("horse", "fas", "fa-horse", "animals"),
    new icone("apple-alt", "fas", "fa-apple-alt", "fruits"),
    new icone("carrot", "fas", "fa-carrot", "fruits"),
    new icone("lemon", "fas", "fa-lemon", "fruits"),
    new icone("pepper-hot", "fas", "fa-pepper-hot", "fruits"),
    new icone("users", "fas", "fa-users", "users"),
    new icone("user-astronaut", "fas", "fa-user-astronaut", "users"),
    new icone("user-ninja", "fas", "fa-user-ninja", "users"),
    new icone("user-secret", "fas", "fa-user-secret", "users"),
  ];
  console.log(Icone);
  // 2. Semezioniamo il container icons
  const container = document.getElementById('icons');
  // const container = $('.icons'); //non funziona

  // 3. inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  Icone.forEach(icon => {
    const markup = `
    <div>
      <i class="${icon.prefix} ${icon.type}"></i>
      <div class="title">${icon.name.toUpperCase()}</div>
    </div>
    `;
    container.insertAdjacentHTML('beforeend', markup);
  });
});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare li le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup
