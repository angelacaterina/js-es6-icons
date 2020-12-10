$(document).ready(function () {
  //1. Qui le icone che abbiamo definito nella milestone 1
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

  const container = document.getElementById('icons');

  //2. definiamo dei colori per le icone (blue, orange, purple)
  const blue = "#5c85d6";
  const orange = "#ffaa80";
  const purple = "#993366";

  //3. aggiungiamo dei colori usando una funzione
  const newIcone = Icone.map(icon => {
    return {
      ...icon,
      "color": (icon.family === 'animals') ? blue : (icon.family === 'fruits') ? orange : purple,
    }

  });

  //4. inseriamo le icone colorate nel container
  newIcone.forEach(icon => {
    const markup = `
    <div>
      <i class="${icon.prefix} ${icon.type}" style="color:${icon.color}"></i>
      <div class="title">${icon.name.toUpperCase()}</div>
    </div>
    `;
    container.insertAdjacentHTML('beforeend', markup);
  });
});


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1

//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map

//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
