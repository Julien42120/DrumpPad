const keys = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");

window.addEventListener("keydown", function (event) {
    keys.forEach(clef => {
        if (clef.dataset.key == event.keyCode) {
            clef.classList.add('playing', 'sound')
            audios.forEach(audio => {
                if (audio.dataset.key == event.keyCode) {
                    audio.play();
                    
    
                }
            })
        }
    });
})

window.addEventListener("keyup", function (event) {
    keys.forEach(clef => {
        if (clef.dataset.key == event.keyCode) {
            clef.classList.remove('playing', 'sound')
            audios.forEach(audio => {
                if (audio.dataset.key == event.keyCode) {
                    audio.pause();
                    audio.currentTime = 0
                }
            })
        }
    });
})



/*
1. récuperer tout les audios

2. récuperer toutes les cases

mettre un écouteur d'événement (addListener) sur la fenetre de type keydown qui lance une fonction playSoud()

SI l'evenement est égale au data-key d'un des element du tableau audio
je récupere l'element et je joue le son +
j'ajoute l'animation (ajouter class)


-----------

Mettre un 2eme écouteur d'evenement de type keyup > fonction removeTransistion

Si on lache la touche du clavier on arrète le son et on supprime les animations
*/