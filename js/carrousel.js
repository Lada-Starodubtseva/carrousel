(function (){
  console.log('Début du carrousel');
  let bout_carrousel_ouvrir = document.querySelector('.carrousel__ouvrir');
  let carrousel = document.querySelector('.carrousel');
  let carrousel__x = document.querySelector('.carrousel__x');
  let carrousel__figure = document.querySelector('.carrousel__figure');

  let carrousel__form = document.querySelector('.carrousel__form');
  let galerie = document.querySelector('.galerie');
  let galerie__img = galerie.querySelectorAll('img');
  let ancien_index = -1;
  let position = 0;

  bout_carrousel_ouvrir.addEventListener('mousedown', function () { 
      carrousel.classList.add('carrousel--ouvrir')
      remplir_carrousel();
  });
  carrousel__x.addEventListener('mousedown', function () { 
      console.log('fermer la boîte modale')
      carrousel.classList.remove('carrousel--ouvrir')
  });




  function remplir_carrousel(){ 
  
      for (const element of galerie__img) 
      {
         element.dataset.index = position;
        element.addEventListener('mousedown', function(){
          index = this.dataset.index;
          afficher_image(index)
          console.log(index);
        })

        creation_img_carrousel(element);
        creation_radio_carrousel();
      }
  }

  function creation_img_carrousel(element) {
 //console.log(element.getAttribute('src'))
      let img = document.createElement('img')
      // img.setAttribute('src', element.getAttribute('src'))
       img.src = element.src
       img.classList.add('carrousel__img')
       //console.log (img.getAttribute('src'))
       carrousel__figure.appendChild(img)
  }
/**
 * Création d'un radio-bouton
 */


function  creation_radio_carrousel(){
  let rad = document.createElement('input')
  console.log(rad.tagName)
  rad.setAttribute('type','radio')
  rad.setAttribute('name', 'carrousel__rad')
  rad.classList.add('carrousel__rad')
  rad.dataset.index = position
  position = position + 1 // incrémentation de 1
  // position += 1
  // position++
  carrousel__form.appendChild(rad)
  rad.addEventListener('mousedown', function(){
    console.log(this.dataset.index)
    index = this.dataset.index
    afficher_image(index)
  })
}

function afficher_image(index){

  if (ancien_index != -1){
   // carrousel__figure.children[ancien_index].style.opacity = 0  
   carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
  }
  // carrousel__figure.children[index].style.opacity = 1
  carrousel__figure.children[index].classList.add('carrousel__img--activer')
  ancien_index = index
}


})()
