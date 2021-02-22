const keys = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");
const beatBoxBtn = document.querySelector("#beat-box");

window.addEventListener("keydown", function (event) {
    keys.forEach(clef => {
        if (clef.dataset.key == event.keyCode) {
            clef.classList.add('playing', 'sound')
            clef.addEventListener('transitionend', function () {
                clef.classList.remove('playing', 'sound')
            })
            audios.forEach(audio => {
                if (audio.dataset.key == event.keyCode) {
                    audio.play();
                    audio.currentTime = 0
                    
    
                }
            })
        }
    });
})



beatBoxBtn.addEventListener ('click' , beatBox)
/* async */ function beatBox () {
    function simulateKey (keyCode) {
        let eventKey = new Event ("keydown" , {
            bubbles:true
        });
        eventKey.keyCode = keyCode;

        window.dispatchEvent(eventKey);
    }
    function playBeat(keyCode, time) {
        return new Promise ((resolve, reject) => {
             setTimeout(() => {
                resolve( simulateKey(keyCode) )
            }, time);

            
        }) 
    }
    

    /* await playBeat (65,400) */
    
    playBeat(65, 400).then(function () {
        return  playBeat(87, 200)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(87, 200)
    }).then(function () {
        return  playBeat(87, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(87, 200)
    }).then(function () {
        return  playBeat(87, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(87, 200)
    }).then(function () {
        return  playBeat(87, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(87, 200)
    }).then(function () {
        return  playBeat(87, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(87, 200)
    }).then(function () {
        return  playBeat(87, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(87, 200)
    }).then(function () {
        return  playBeat(87, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(87, 200)
    }).then(function () {
        return  playBeat(87, 400)
    }).then(function () {
        return  playBeat(65, 200)
        
    }).then(function () {
        return  playBeat(68, 200)
    }).then(function () {
        return  playBeat(68, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(68, 200)
    }).then(function () {
        return  playBeat(68, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(68, 200)
    }).then(function () {
        return  playBeat(68, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(68, 200)
    }).then(function () {
        return  playBeat(68, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(68, 200)
    }).then(function () {
        return  playBeat(68, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(68, 200)
    }).then(function () {
        return  playBeat(68, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(68, 200)
    }).then(function () {
        return  playBeat(68, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(68, 200)
    }).then(function () {
        return  playBeat(68, 400)
    }).then(function () {
        return  playBeat(65, 200)
    }).then(function () {
        return  playBeat(68, 200)
    }).then(function () {
        return  playBeat(68, 400)
    })
}



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