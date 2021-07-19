let d = document;

const $dFragm = d.createElement('div');

$dFragm.innerHTML = `
<button class='close_btn'>'</button>
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
Bamboo Stand <span class='card2_span'> Pledge 25$ or more</span> <span class='card2_number'>101</span> <p class = 'card2_left'>left</p> 
</label><br>
<p>You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign, and you'll be added to a special Backer member list</p>
</div>


<div class='dFragm-card3'>

<label class='radio3' for="radio3">
<input class='radio3__input' type="radio" id='radio3' name="fav_language" value="HTML">
<div class='radio3__radio'></div>
Black Edition Stand<span class='card3_span'> Pledge 75$ or more</span> <span class='card3_number'>64</span> <p class = 'card3_left'>left</p> 
</label><br>
<p>You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
</div>


<div class='dFragm-card4'>

<label class='radio4' for="radio4">
<input class='radio4__input' type="radio" id='radio4' name="fav_language" value="HTML">
<div class='radio4__radio'></div>
<p class='Bamboo_stand'>Mahogany Edition Stand</p> <span class='card4_span'> Pledge 200$ or more</span> <span class='card4_number'>1</span> <p class = 'card4_left'>left</p> 
</label><br>
<p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
</div>


</div>
`
let $dFragm_position = 950;
$dFragm.classList.add('dFragm');
export function cards() {

    $dFragm.setAttribute('style', `top:${$dFragm_position}px`)

    let $no_floating_card_zone = d.querySelector('.no_floating_card_zone');
    $no_floating_card_zone.appendChild($dFragm);
    // Ahora vamos a hacer que al seleccionar el input de la tarjeta, se añada un div con el botón continuar a .dFragm-card1:

    let $input1 = d.querySelector('.radio1__input');
    let $dFragmCard1 = d.querySelector(".dFragm-card1");
    let $input1_continue = d.createElement('div');
    let $input1_btn = d.createElement('button');


    $input1.addEventListener('change', function() {
        if ($dFragmCard2.contains($input2_continue)) {
            $input2_continue.remove();
        }
        if ($dFragmCard3.contains($input3_continue)) {
            $input3_continue.remove();
        }

        if ($dFragmCard4.contains($input4_continue)) {
            $input4_continue.remove();
        }
        $input1_continue.classList.add('input1_continue');
        $dFragmCard1.appendChild($input1_continue);
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
    let $input2_number = d.createElement('input');
    let $ = d.createElement('p');


    $input2.addEventListener('change', function() {
        if ($dFragmCard1.contains($input1_continue)) {
            $input1_continue.remove();
        }
        if ($dFragmCard3.contains($input3_continue)) {
            $input3_continue.remove();
        }

        if ($dFragmCard4.contains($input4_continue)) {
            $input4_continue.remove();
        }
        // Creamos el div de abajo del container, y le añadimos el contenido:
        $input2_continue.appendChild($span1_02);
        $input2_continue.appendChild($)
        $input2_continue.appendChild($input2_number);
        $dFragmCard2.appendChild($input2_continue);
        $input2_continue.appendChild($input2_btn);
        $input2_continue.classList.add('input2_continue');
        $input2_btn.classList.add('input2_btn');
        $input2_btn.setAttribute('content', 'Continue');
        $input2_btn.textContent = 'Continue';
        $span1_02.textContent = 'Enter your pledge';
        $span1_02.classList.add('span1_02');
        $input2_number.classList.add('input2_number');
        $input2_number.value = '25';
        $.textContent = '$'
        $.classList.add('dollar_card2')
    });





    let $input3 = d.querySelector('.radio3__input');
    let $dFragmCard3 = d.querySelector(".dFragm-card3");
    let $input3_continue = d.createElement('div');
    let $span1_03 = d.createElement('span');
    let $input3_btn = d.createElement('button');
    let $input3_number = d.createElement('input');
    let $_02 = d.createElement('p');


    $input3.addEventListener('change', function() {
        if ($dFragmCard2.contains($input2_continue)) {
            $input2_continue.remove();
        }
        if ($dFragmCard1.contains($input1_continue)) {
            $input1_continue.remove();
        }

        if ($dFragmCard4.contains($input4_continue)) {
            $input4_continue.remove();
        }
        // Creamos el div de abajo del container, y le añadimos el contenido:
        $input3_continue.appendChild($span1_03);
        $input3_continue.appendChild($_02)
        $input3_continue.appendChild($input3_number);
        $dFragmCard3.appendChild($input3_continue);
        $input3_continue.appendChild($input3_btn);
        $input3_continue.classList.add('input3_continue');
        $input3_btn.classList.add('input3_btn');
        $input3_btn.setAttribute('content', 'Continue');
        $input3_btn.textContent = 'Continue';
        $span1_03.textContent = 'Enter your pledge';
        $span1_03.classList.add('span1_03');
        $input3_number.classList.add('input3_number');
        $input3_number.value = '75';
        $_02.textContent = '$';
        $_02.classList.add('dollar_card3');
    });

    let $input4 = d.querySelector('.radio4__input');
    let $dFragmCard4 = d.querySelector(".dFragm-card4");
    let $input4_continue = d.createElement('div');
    let $span1_04 = d.createElement('span');
    let $input4_btn = d.createElement('button');
    let $input4_number = d.createElement('input');
    let $_03 = d.createElement('p');


    $input4.addEventListener('change', function() {
        if ($dFragmCard3.contains($input3_continue)) {
            $input3_continue.remove();
        }
        if ($dFragmCard2.contains($input2_continue)) {
            $input2_continue.remove();
        }
        if ($dFragmCard1.contains($input1_continue)) {
            $input1_continue.remove();
        }

        // Creamos el div de abajo del container, y le añadimos el contenido:
        $input4_continue.appendChild($span1_04);
        $input4_continue.appendChild($_03)
        $input4_continue.appendChild($input4_number);
        $dFragmCard4.appendChild($input4_continue);
        $input4_continue.appendChild($input4_btn);
        $input4_continue.classList.add('input4_continue');
        $input4_btn.classList.add('input4_btn');
        $input4_btn.setAttribute('content', 'Continue');
        $input4_btn.textContent = 'Continue';
        $span1_04.textContent = 'Enter your pledge';
        $span1_04.classList.add('span1_04');
        $input4_number.classList.add('input4_number');
        $input4_number.value = '200';
        $_03.textContent = '$';
        $_03.classList.add('dollar_card4');
    });
    // ANIMACIÓN DE LA TARJETA FLOTANTE:
    $card3_button.addEventListener('click', function() {
        console.log($dFragm_position);
        let browserModel = navigator.userAgent;
        let mozilla = /Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64; rv:90\.0\) Gecko\/20100101 Firefox\/90\.0/;
        let chrome = /Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/91\.0\.4472\.164 Safari\/537\.36/;
        if (mozilla.test(browserModel) === true) {
            console.log('Mozilla detected');
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 44;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 3);

            var $card3_if_interval = setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 120) {
                    clearInterval($card3_interval);
                }
            }, 1);
        }

        if (chrome.test(browserModel) === true) {
            console.log('Chrome detected')
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 45;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 10);

            var $card3_if_interval = setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 120) {
                    clearInterval($card3_interval);
                }
            }, 1);
        }

        if (chrome.test(browserModel) === false && mozilla.test(browserModel) === false) {
            console.log('The current browser is not Chrome or Mozilla')
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 45;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 10);

            var $card3_if_interval = setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 120) {
                    clearInterval($card3_interval);
                }
            }, 1);
        }



    });

    $card2_button.addEventListener('click', function() {
        console.log($dFragm_position);
        let browserModel = navigator.userAgent;
        let mozilla = /Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64; rv:90\.0\) Gecko\/20100101 Firefox\/90\.0/;
        let chrome = /Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/91\.0\.4472\.164 Safari\/537\.36/;
        if (mozilla.test(browserModel) === true) {
            console.log('Mozilla detected');
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 44;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 3);

            var $card3_if_interval = setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 120) {
                    clearInterval($card3_interval);
                }
            }, 4);
        }

        if (chrome.test(browserModel) === true) {
            console.log('Chrome detected')
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 45;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 10);

            var $card3_if_interval = setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 120) {
                    clearInterval($card3_interval);
                }
            }, 1);
        }

        if (chrome.test(browserModel) === false && mozilla.test(browserModel) === false) {
            console.log('The current browser is not Chrome or Mozilla')
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 45;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 10);

            var $card3_if_interval = setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 120) {
                    clearInterval($card3_interval);
                }
            }, 1);
        }


    });
    $card1_button.addEventListener('click', function() {
        console.log($dFragm_position);
        let browserModel = navigator.userAgent;
        let mozilla = /Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64; rv:90\.0\) Gecko\/20100101 Firefox\/90\.0/;
        let chrome = /Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/91\.0\.4472\.164 Safari\/537\.36/;
        if (mozilla.test(browserModel) === true) {
            console.log('Mozilla detected');
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 44;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 3);

            var $card3_if_interval = setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 120) {
                    clearInterval($card3_interval);
                }
            }, 1);
        }

        if (chrome.test(browserModel) === true) {
            console.log('Chrome detected')
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 45;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 10);

            var $card3_if_interval = setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 120) {
                    clearInterval($card3_interval);
                }
            }, 1);
        }

        if (chrome.test(browserModel) === false && mozilla.test(browserModel) === false) {
            console.log('The current browser is not Chrome or Mozilla')
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 45;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 10);

            var $card3_if_interval = setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 120) {
                    clearInterval($card3_interval);
                }
            }, 1);
        }


    });

    // CUIDADO: DEPENDIENDO DEL NAVEGADOR, EL setInterval() SE PROCESA CON DISTINTA VELOCIDAD. DEPENDIENDO DEL BROWSER QUE SE ESTÉ EJECUTANDO, INTRODUCIREMOS EN DICHO setInterval() UNOS VALORES U OTROS 
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




// ANIMACIÓN DE LAS TARJETAS


let $no_floating_card_zone = d.querySelector('.no_floating_card_zone');
let $card1_button = d.querySelector('.card1-button');
let $card2_button = d.querySelector('.card2-button');
let $card3_button = d.querySelector('.card3-button');

export function animation_btn() {
    $card1_button.addEventListener('click', function() {
        $no_floating_card_zone.classList.remove('no_floating_card_zone');
        $no_floating_card_zone.classList.add('floating_card_zone');

        let $close_btn = d.querySelector('.close_btn');
        // let $floating_card_zone = d.querySelector('.floating_card_zone');
        // console.log($floating_card_zone);

        // AÑADIMOS EL JAVASCRIPT DEL BOTÓN DE CERRAR EN CADA EVENTO

        $close_btn.addEventListener('click', function() {
            $no_floating_card_zone.classList.add('no_floating_card_zone')
            $no_floating_card_zone.classList.remove('floating_card_zone');

            console.log('Close button executing');
            // $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            $dFragm.style.top = 950 + 'px'
            console.log($no_floating_card_zone);
            $dFragm_position = 950;

        })

    });
    $card2_button.addEventListener('click', function() {
        $no_floating_card_zone.classList.remove('no_floating_card_zone');
        $no_floating_card_zone.classList.add('floating_card_zone');
        let $close_btn = d.querySelector('.close_btn');
        // let $floating_card_zone = d.querySelector('.floating_card_zone');
        // console.log($floating_card_zone);

        $close_btn.addEventListener('click', function() {
            $no_floating_card_zone.classList.add('no_floating_card_zone')
            $no_floating_card_zone.classList.remove('floating_card_zone');

            console.log('Close button executing');
            console.log($no_floating_card_zone);
        })



    });
    $card3_button.addEventListener('click', function() {
        $no_floating_card_zone.classList.remove('no_floating_card_zone');
        $no_floating_card_zone.classList.add('floating_card_zone');
        let $close_btn = d.querySelector('.close_btn');
        // let $floating_card_zone = d.querySelector('.floating_card_zone');
        // console.log($floating_card_zone);

        $close_btn.addEventListener('click', function() {
            $no_floating_card_zone.classList.add('no_floating_card_zone')
            $no_floating_card_zone.classList.remove('floating_card_zone');

            console.log('Close button executing');
            console.log($no_floating_card_zone);
        })

    });

}

// BOTÓN DE CERRAR TARJETA FLOTANTE: