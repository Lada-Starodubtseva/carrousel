(function(){
    console.log('début carrousel');
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');

    let galerie = document.querySelector(".galerie");
    let galerie__img = galerie.querySelectorAll("img");
    console.log("galerie__img" + galerie__img.length);

    boutcarrousel__ouvrir.addEventListener('mousedown',function(){
        carrousel.classList.add('carrousel--ouvrir')
    })
    carrousel__x.addEventListener('mousedown',function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })

    // ajouter_img_dans_carrousel
    // Ajouter l'ensemble des images de la galerie dans la boite modale carrousel

    function ajouter_img_dans_carrousel(){
        for (const elm of carrousel__img)
        {
            console.log(elm.getAttribute('src'));
            let img = document.createElement('img');
            img.setAttribute('src', elm.getAttribute('src'));
        }
    }

})()