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
    
    
    <div class='dFragm-card2'>

    <label class='radio2' for="radio2">
    <input class='radio2__input' type="radio" id='radio2' name="fav_language" value="HTML">
    <div class='radio2__radio'></div>
    Bamboo Stand
    </label><br>
    <p>You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign, and you'll be added to a special Backer member list</p>
    </div>

    
    <div class='dFragm-card3'>

    </div>

    <div class='dFragm-card4'>

    </div>
    `
    $dFragm.classList.add('dFragm');


    $body.appendChild($dFragm);
    // Ahora vamos a hacer que al seleccionar el input de la tarjeta, se añada un div con el botón continuar a .dFragm-card1:

    let $input1 = d.querySelector('.radio1__input');
    let $dFragmCard1 = d.querySelector(".dFragm-card1");
    let $input1_continue = d.createElement('div');
    let $input1_btn = d.createElement('button');


    $input1.addEventListener('change', function() {
        if ($dFragmCard2.contains($input2_continue)) {
            $input2_continue.remove();
        }
        // var $dFragmCard1 = d.querySelector(".dFragm-card1");
        // var $input1_continue = d.createElement('div');
        $input1_continue.classList.add('input1_continue');
        $dFragmCard1.appendChild($input1_continue);
        // var $input1_btn = d.createElement('button');
        $input1_continue.appendChild($input1_btn);
        $input1_btn.classList.add('input1_btn');
        $input1_btn.setAttribute('content', 'Continue');
        $input1_btn.textContent = 'Continue';

    });


    let $input2 = d.querySelector('.radio2__input');
    let $dFragmCard2 = d.querySelector(".dFragm-card2");
    let $input2_continue = d.createElement('div');
    let $span1_02 = d.createElement('span');
    let $input2_btn = d.createElement('button');
    let $input2_number = d.createElement('input')

    $input2.addEventListener('change', function() {
        if ($dFragmCard1.contains($input1_continue)) {
            $input1_continue.remove();
        }
        $input2_continue.appendChild($span1_02);
        $dFragmCard2.appendChild($input2_continue);
        $input2_continue.appendChild($input2_btn);
        $input2_continue.classList.add('input2_continue');
        $input2_btn.classList.add('input2_btn');
        $input2_btn.setAttribute('content', 'Continue');
        $input2_btn.textContent = 'Continue';
        $span1_02.textContent = 'Enter yout pledge';
        $span1_02.classList.add('span1_02');
        $input2_number.setAttribute('type', 'number');
        $input2_continue.appendChild($input2_number);
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