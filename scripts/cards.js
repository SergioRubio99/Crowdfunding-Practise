let d = document;

export function cards() {
    const $body = d.querySelector('body'),
        $dFragm = d.createElement('div');

    $dFragm.innerHTML = `
    
    <h2 class = 'dFragm-main_title'>Back this project</h1>
    
    <p class= 'dFragm-p'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
    
    <div class='dFragm-card1'>

    <label class='radio1' for="radio1">
    <input class='radio1__input' type="radio" id='radio1' name="fav_language" value="HTML">
    <div class='radio1__radio'></div>
    Pledge with no reward
    </label><br>
    <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>

    </div>
    `
    $dFragm.classList.add('dFragm');


    $body.appendChild($dFragm);
    // Ahora vamos a hacer que al seleccionar el input de la tarjeta, se añada un div con el botón continuar a .dFragm-card1:

    let $input1 = d.querySelector('.radio1__input');
    $input1.addEventListener('change', function() {
        console.log('wrtg');
        let $dFragmCard1 = d.querySelector(".dFragm-card1");
        let $input1_continue = d.createElement('div');
        $input1_continue.classList.add('input1_continue');
        $dFragmCard1.appendChild($input1_continue);
        let $input1_btn = d.createElement('button');
        $input1_continue.appendChild($input1_btn);
        $input1_btn.classList.add('input1_btn');
        $input1_btn.setAttribute('content', 'Continue');
        $input1_btn.textContent = 'Continue';
    });


}




//     .insertAdjacent...
//     .insertAdjancentElement(position, el)
//     .insertAdjacentHTML(position, html)
//     .insertAdjacentText(position, text)


// Posiciones: 
//     beforebegin (hermano anterior)
//     afterbegin (primer hijo)
//     beforeend (ultimo hijo)
//     afterend (hermano siguiente)
// $cards.insertAdjacentElement('afterbegin', $newCard);