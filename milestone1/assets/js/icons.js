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
  const container = document.querySelector('.icons');

  // 3. inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  printIcons(Icone,container);

});

/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.

/**
* Stampare icone in un determinato container
* @param {array} array - un array di icone
* @param {Element} container - il tag html
*/
function printIcons(array,container){
  array.forEach(icon => {
    // tip: possiamo usare un ciclo foreach qui e destrutturare li le proprieta degli elementi di un array
    const {name, prefix, type} = icon;

    // tip: il template literal ci puo aiutare con il markup
    const markup = `
      <div>
        <i class="${prefix} ${type}" style="color:black"></i>
        <div class="title">${name.toUpperCase()}</div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', markup);
  });
}
