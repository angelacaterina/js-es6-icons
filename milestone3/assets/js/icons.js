$(document).ready(function () {
 // icone come da milestone 1
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

  // colori come da milestone 2
  const blue = "#5c85d6";
  const orange = "#ffaa80";
  const purple = "#993366";

  //aggiungiamo dei colori come da milestone 2
  const newIcone = Icone.map(icon => {
    return {
      ...icon,
      "color": (icon.family === 'animals') ? blue : (icon.family === 'fruits') ? orange : purple,
    }
  });
  console.log(newIcone);

  //inseriamo le icone nel container come da milestone 2
  const container = document.querySelector('.icons');

  //aggiungiamo i tipi alla select
  const select = $('#type');
  select.append('<option value="animals">Animals</option>');
  select.append('<option value="fruits">Fruits</option>');
  select.append('<option value="users">User</option>');

  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo
  $("#type").change(function () {
    const scelta = $('#type option:selected').val();
    // console.log(scelta);

    //estrapoliamo i tipi di icone
    const iconFilter = newIcone.filter(icon => icon.family === scelta);
    console.log(iconFilter);

    if(scelta === ""){
      container.innerHTML = "";
      printIcons(newIcone, container);
    }else{
      container.innerHTML = "";
      printIcons(iconFilter, container);
    }
    
  })
  .change();

  printIcons(newIcone, container);

});

/* ---- FUNCTIONS ----*/

/**
* Stampare icone in un determinato container
* @param {array} array - un array di icone
* @param {Element} container - il tag html
*/
function printIcons(array,container){
  array.forEach(icon => {
    const {name, prefix, type, color} = icon;

    const markup = `
    <div>
      <i class="${prefix} ${type}" style="color:${color}"></i>
      <div class="title">${name.toUpperCase()}</div>
    </div>
    `;
    container.insertAdjacentHTML('beforeend', markup);
  });
}
