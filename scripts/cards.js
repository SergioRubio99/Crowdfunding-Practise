import { responsive_card } from './responsive.js'

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
Bamboo Stand <span class='card2_span'> Pledge 25$ or more</span> <span class='card2_number'>3</span> <p class = 'card2_left'>left</p> 
</label><br>
<p>You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign, and you'll be added to a special Backer member list</p>
</div>


<div class='dFragm-card3'>

<label class='radio3' for="radio3">
<input class='radio3__input' type="radio" id='radio3' name="fav_language" value="HTML">
<div class='radio3__radio'></div>
Black Edition Stand<span class='card3_span'> Pledge 75$ or more</span> <span class='card3_number'>2</span> <p class = 'card3_left'>left</p> 
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



    // });
    // ANIMACIÓN DE LA TARJETA FLOTANTE:

    // CREANDO CADA CARTA FLOTANTE:


    let $dFragmCard1 = d.querySelector(".dFragm-card1");
    let $input1_continue = d.createElement('div');
    let $input1_btn = d.createElement('button');
    $input1_continue.setAttribute('style', 'display:flex;')
    let $back_this_project_btn = d.querySelector('.back_this_project_btn');
    $dFragmCard1.classList.add('dFragm-card1');
    $input1_continue.classList.add('input1_continue');
    $input1_btn.classList.add('input1_btn');
    $dFragmCard1.appendChild($input1_continue);
    $input1_continue.appendChild($input1_btn);
    $input1_btn.textContent = 'Continue';
    let $continue_btn_01 = d.querySelector('.input1_btn')
    let $radio1 = d.getElementById('radio1');


    // Hacemos que el botón cierre toda la tarjeta:

    $continue_btn_01.addEventListener('click', function() {
        $no_floating_card_zone.classList.add('no_floating_card_zone')
        $no_floating_card_zone.classList.remove('floating_card_zone');
        $dFragm.style.top = 950 + 'px'
        $dFragm_position = 950;
        let $no_floatTy = d.querySelector('.no_floating_thank_card');
        let $floating_divTy = d.querySelector('.floating_div');
        $floating_divTy.classList.add('floating_thank_card_zone')
        $no_floatTy.classList.add('floating_thank_card')
        $no_floatTy.classList.remove('no_floating_thank_card')

    })


    let $dFragmCard2 = d.querySelector(".dFragm-card2");
    let $input2_continue = d.createElement('div');
    let $span1_02 = d.createElement('span');
    let $input2_btn = d.createElement('button');
    let $input2_number = d.createElement('input');
    let $card2_number = d.querySelector('.card2_number');
    let $ = d.createElement('p');
    let $radio2 = d.getElementById('radio2');
    let $radio2_container = d.querySelector('.radio2');

    $input2_continue.appendChild($span1_02);
    $input2_continue.appendChild($);
    $input2_continue.appendChild($input2_number);
    $input2_continue.setAttribute('style', 'display:flex;')
    $dFragmCard2.appendChild($input2_continue);
    $input2_continue.appendChild($input2_btn);
    $input2_continue.classList.add('input2_continue');
    $input2_btn.classList.add('input2_btn');
    $input2_btn.textContent = 'Continue';

    $span1_02.textContent = 'Enter your pledge';
    $span1_02.classList.add('span1_02');
    $input2_number.classList.add('input2_number');
    $input2_number.value = '25';
    $.textContent = '$'
    $.classList.add('dollar_card2');

    // Hacemos que el botón cierre toda la tarjeta:

    $input2_btn.addEventListener('click', function() {

        $no_floating_card_zone.classList.add('no_floating_card_zone')
        $no_floating_card_zone.classList.remove('floating_card_zone');
        $dFragm.style.top = 950 + 'px'
        $dFragm_position = 950;

        // Evento para que al darle a continuar, aparezca la tarjeta final de agradecimiento:
        let $no_floatTy = d.querySelector('.no_floating_thank_card');
        let $floating_divTy = d.querySelector('.floating_div');
        let $card1_n = d.querySelector('.card1>div:nth-child(3)>h3');
        // CÓDIGO PARA APLICAR EL DINERO DE LA DONACIÓN ESPECÍFICA SELECCIONADA AL MONTO TOTAL DE DINERO DONADO, VIÉNDOSE ESTO REFLEJADO EN LA BARRA DE PROGRESO Y EN DICHO TOTAL DINÁMICAMENTE:
        let $card2_$ = parseFloat($input2_number.value);
        let container$ = parseFloat(d.querySelector('.amount').textContent.replace(',', '').substring(1));
        let total$ = d.querySelector('.amount');
        $floating_divTy.classList.add('floating_thank_card_zone');
        $no_floatTy.classList.add('floating_thank_card');
        $no_floatTy.classList.remove('no_floating_thank_card');
        $card2_number.textContent = parseFloat($card2_number.textContent) - 1;
        $card1_n.innerText = $card2_number.textContent;
        container$ += $card2_$;
        container$ = '$' + container$.toString();
        container$ = container$.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        total$.innerText = container$;

        // CÓDIGO PARA HACER QUE AUMENTE EN 1 EL NÚMERO DE CONTRIBUYENTES AL SELECCIONAR UN REWARD:
        let backers = parseFloat(d.querySelector('.second_section_container:nth-child(2)>h2').textContent.replace(',', ''));
        backers += 1;
        backers = backers.toString();
        backers = backers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        d.querySelector('.second_section_container:nth-child(2)>h2').innerText = backers;
        if (parseFloat($card1_n.innerText) === 0) {

            let $card1 = d.querySelector('.card1');
            let $card1_title = d.querySelector('.card1>div>h3');
            let $card1_span = d.querySelector('.card1>div>span');
            let $card1_h3 = d.querySelector('.card1>div:nth-child(3)>h3');
            let $card1_p = d.querySelector('.card1>div:nth-child(2)>p');
            let $card1_left = d.querySelector('.card1>div:nth-child(3)>span');
            let $card2_span = d.querySelector('.card2_span');
            let $card2_button = d.querySelector('.card2-button')

            $dFragmCard2.setAttribute('style', 'color:rgb(242, 242, 242, 0.6); background-color: rgb(242, 242, 242, 0.6);');
            $radio2_container.setAttribute('style', 'color: rgb(180, 180, 180,0.4)');
            $card2_span.setAttribute('style', 'color: rgb(180, 180, 180,0.4)');
            // Manejo del CSSOM, por si quisiéramos modificar el pseudoelemento CSS al seleccionar el input:
            // document.styleSheets[1].cssRules[63].style.backgroundColor = 'rgb(180, 180, 180,0.4)';
            // document.styleSheets[1].cssRules[61].style = '';
            //---------------------------
            $card2_number.setAttribute('style', 'color: lightgray');
            $input2_number.setAttribute('style', 'color: lightgray');
            $input2_btn.setAttribute('style', 'background-color:rgb(180, 180, 180,0.4);');
            $radio2.setAttribute('disabled', 'true');
            $card1_button.setAttribute('disabled', 'true');
            $card1_button.setAttribute('style', 'background-color:rgb(180, 180, 180,0.4);');
            $card1.setAttribute('style', 'background-color: rgb(242, 242, 242, 0.6);')
            $card1_title.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
            $card1_span.setAttribute('style', 'color: rgb(180, 180, 180,0.4);')
            $card1_h3.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
            $card1_n.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
            $card1_left.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
            $card2_span.setAttribute('style', 'color:rgb(180, 180, 180,0.4);');
            $card1_p.setAttribute('style', 'color:rgb(180, 180, 180,0.4);');


        }
    })


    let $dFragmCard3 = d.querySelector(".dFragm-card3");
    let $input3_continue = d.createElement('div');
    let $span1_03 = d.createElement('span');
    let $input3_btn = d.createElement('button');
    let $input3_number = d.createElement('input');
    let $card3_number = d.querySelector('.card3_number');
    let $card3_span = d.querySelector('.card4_span');
    let $radio3 = d.getElementById('radio3');
    let $radio3_container = d.querySelector('.radio3');
    let $_02 = d.createElement('p');

    $input3_continue.appendChild($span1_03);
    $input3_continue.appendChild($_02)
    $input3_continue.appendChild($input3_number);
    $input3_continue.setAttribute('style', 'display:flex;')

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

    // Hacemos que el botón cierre toda la tarjeta:

    $input3_btn.addEventListener('click', function() {

        $no_floating_card_zone.classList.add('no_floating_card_zone');
        $no_floating_card_zone.classList.remove('floating_card_zone');
        $dFragm.style.top = 950 + 'px';
        $dFragm_position = 950;
        // Evento para que al darle a continuar, aparezca la tarjeta final de agradecimiento:
        let $no_floatTy = d.querySelector('.no_floating_thank_card');
        let $floating_divTy = d.querySelector('.floating_div');
        $floating_divTy.classList.add('floating_thank_card_zone');
        $no_floatTy.classList.add('floating_thank_card');
        $no_floatTy.classList.remove('no_floating_thank_card');
        $card3_number.textContent = parseFloat($card3_number.textContent) - 1;
        // CÓDIGO PARA APLICAR EL DINERO DE LA DONACIÓN ESPECÍFICA SELECCIONADA AL MONTO TOTAL DE DINERO DONADO, VIÉNDOSE ESTO REFLEJADO EN LA BARRA DE PROGRESO Y EN DICHO TOTAL DINÁMICAMENTE:
        let $card2_n = d.querySelector('.card2>div:nth-child(3)>h3');
        $card2_n.innerText = $card3_number.textContent;
        let $card3_$ = parseFloat($input3_number.value);
        let container$ = parseFloat(d.querySelector('.amount').textContent.replace(',', '').substring(1));
        let total$ = d.querySelector('.amount');
        $floating_divTy.classList.add('floating_thank_card_zone');
        $no_floatTy.classList.add('floating_thank_card');
        $no_floatTy.classList.remove('no_floating_thank_card');
        $card2_n.innerText = $card3_number.textContent;
        container$ += $card3_$;
        container$ = '$' + container$.toString();
        container$ = container$.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        total$.innerText = container$;
        // CÓDIGO PARA DESACTIVAR LA TARJETA:

        if (parseFloat($card2_n.textContent) === 0) {
            let $card2 = d.querySelector('.card2');
            let $card2_title = d.querySelector('.card2>div>h3');
            let $card2_span = d.querySelector('.card2>div>span');
            let $card2_p = d.querySelector('.card2>div:nth-child(2)>p');
            let $card2_left = d.querySelector('.card2>div:nth-child(3)>span');
            let $card3_span = d.querySelector('.card3_span')

            $dFragmCard3.setAttribute('style', 'color:rgb(242, 242, 242, 0.6); background-color: rgb(242, 242, 242, 0.6);');
            $radio3_container.setAttribute('style', 'color: rgb(180, 180, 180,0.4)');
            $card3_span.setAttribute('style', 'color: rgb(180, 180, 180,0.4)');
            // Manejo del CSSOM, por si quisiéramos modificar el pseudoelemento CSS al seleccionar el input:
            // document.styleSheets[1].cssRules[63].style.backgroundColor = 'rgb(180, 180, 180,0.4)';
            // document.styleSheets[1].cssRules[61].style = '';
            //---------------------------
            $card3_number.setAttribute('style', 'color: lightgray');
            $input3_number.setAttribute('style', 'color: lightgray');
            $input3_btn.setAttribute('style', 'background-color:rgb(180, 180, 180,0.4);');
            $radio3.setAttribute('disabled', 'true');
            $card2_button.setAttribute('disabled', 'true');
            $card2_button.setAttribute('style', 'background-color:rgb(180, 180, 180,0.4);');
            $card2.setAttribute('style', 'background-color: rgb(242, 242, 242, 0.6);')
            $card2_title.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
            $card2_span.setAttribute('style', 'color: rgb(180, 180, 180,0.4);')
            $card2_p.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
            $card2_n.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
            $card2_n.innerText = $card3_number.textContent;
            $card2_left.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
            $card3_span.setAttribute('style', 'color:rgb(180, 180, 180,0.4);');
        }
        // CÓDIGO PARA HACER QUE AUMENTE EN 1 EL NÚMERO DE CONTRIBUYENTES AL SELECCIONAR UN REWARD:

        let backers = parseFloat(d.querySelector('.second_section_container:nth-child(2)>h2').textContent.replace(',', ''));
        backers += 1;
        backers = backers.toString();
        backers = backers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        d.querySelector('.second_section_container:nth-child(2)>h2').innerText = backers;


    })

    let $dFragmCard4 = d.querySelector(".dFragm-card4");
    let $input4_continue = d.createElement('div');
    $input4_continue.setAttribute('style', 'display:flex;');
    let $radio4 = d.getElementById('radio4');
    let $card4_span = d.querySelector('.card4_span');
    let $radio4_container = d.querySelector('.radio4');
    let $card4_number = d.querySelector('.card4_number');
    let $span1_04 = d.createElement('span');
    let $input4_btn = d.createElement('button');
    let $input4_number = d.createElement('input');
    let $_03 = d.createElement('p');

    $dFragmCard4.appendChild($input4_continue);
    $input4_continue.appendChild($span1_04);
    $input4_continue.appendChild($_03)
    $input4_continue.appendChild($input4_number);
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
    // Hacemos que el botón cierre toda la tarjeta:

    $input4_btn.addEventListener('click', function() {

        $no_floating_card_zone.classList.add('no_floating_card_zone')
        $no_floating_card_zone.classList.remove('floating_card_zone');
        $dFragm.style.top = 950 + 'px'
        $dFragm_position = 950;
        // Evento para que al darle a continuar, aparezca la tarjeta final de agradecimiento:
        let $no_floatTy = d.querySelector('.no_floating_thank_card');
        let $floating_divTy = d.querySelector('.floating_div');
        $floating_divTy.classList.add('floating_thank_card_zone')
        $no_floatTy.classList.add('floating_thank_card')
        $no_floatTy.classList.remove('no_floating_thank_card')
        $card4_number.textContent = parseFloat($card4_number.textContent) - 1;

        // CÓDIGO PARA DESACTIVAR LA TARJETA:

        if (parseFloat($card4_number.textContent) === 0) {
            let $card3 = d.querySelector('.card3');
            let $card3_title = d.querySelector('.card3>div>h3');
            let $card3_span = d.querySelector('.card3>div>span');
            let $card3_p = d.querySelector('.card3>div:nth-child(2)>p');
            let $card3_n = d.querySelector('.card3>div:nth-child(3)>h3');
            let $card3_left = d.querySelector('.card3>div:nth-child(3)>span');

            $dFragmCard4.setAttribute('style', 'color:rgb(242, 242, 242, 0.6); background-color: rgb(242, 242, 242, 0.6);');
            $radio4_container.setAttribute('style', 'color: rgb(180, 180, 180,0.4)');
            $card4_span.setAttribute('style', 'color: rgb(180, 180, 180,0.4)');
            // Manejo del CSSOM, por si quisiéramos modificar el pseudoelemento CSS al seleccionar el input:
            // document.styleSheets[1].cssRules[63].style.backgroundColor = 'rgb(180, 180, 180,0.4)';
            // document.styleSheets[1].cssRules[61].style = '';
            //---------------------------
            $card4_number.setAttribute('style', 'color: lightgray');
            $input4_number.setAttribute('style', 'color: lightgray');
            $input4_btn.setAttribute('style', 'background-color:rgb(180, 180, 180,0.4);');
            $radio4.setAttribute('disabled', 'true');
            $card3_button.setAttribute('disabled', 'true');
            $card3_button.setAttribute('style', 'background-color:rgb(180, 180, 180,0.4);');
            $card3.setAttribute('style', 'background-color: rgb(242, 242, 242, 0.6);')
            $card3_title.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
            $card3_span.setAttribute('style', 'color: rgb(180, 180, 180,0.4);')
            $card3_p.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
            $card3_n.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
            $card3_n.innerText = $card4_number.textContent;
            $card3_left.setAttribute('style', 'color: rgb(180, 180, 180,0.4);');
        }
        // CÓDIGO PARA APLICAR EL DINERO DE LA DONACIÓN ESPECÍFICA SELECCIONADA AL MONTO TOTAL DE DINERO DONADO, VIÉNDOSE ESTO REFLEJADO EN LA BARRA DE PROGRESO Y EN DICHO TOTAL DINÁMICAMENTE:
        let $card4_$ = parseFloat($input4_number.value);
        let container$ = parseFloat(d.querySelector('.amount').textContent.replace(',', '').substring(1));
        let total$ = d.querySelector('.amount');
        $floating_divTy.classList.add('floating_thank_card_zone');
        $no_floatTy.classList.add('floating_thank_card');
        $no_floatTy.classList.remove('no_floating_thank_card');
        // $card4_number.textContent = parseFloat($card4_number.textContent) - 1;
        // $card3_n.innerText = $card4_number.textContent;
        container$ += $card4_$;
        container$ = '$' + container$.toString();
        container$ = container$.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        total$.innerText = container$;

        // CÓDIGO PARA HACER QUE AUMENTE EN 1 EL NÚMERO DE CONTRIBUYENTES AL SELECCIONAR UN REWARD:

        let backers = parseFloat(d.querySelector('.second_section_container:nth-child(2)>h2').textContent.replace(',', ''));
        backers += 1;
        backers = backers.toString();
        backers = backers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        d.querySelector('.second_section_container:nth-child(2)>h2').innerText = backers;
    });





    $radio1.addEventListener('change', function() {
        if ($radio1.checked === true) {
            $input1_continue.style = 'display:flex;';
            $input2_continue.style = 'display:none;';
            $input3_continue.style = 'display:none;';
            $input4_continue.style = 'display:none;';
        } else {
            $input1_continue.style = 'display:none;';
        }
    });

    $back_this_project_btn.addEventListener('click', function() {

        $radio1.checked = true;
        if ($radio1.checked === true) {
            $input1_continue.style = 'display:flex;';
            $input2_continue.style = 'display:none;';
            $input3_continue.style = 'display:none;';
            $input4_continue.style = 'display:none;';
        } else {
            $input1_continue.style = 'display:none;';
        }

        //PARÁMETROS DE VELOCIDAD DE LA TARJETA SEGÚN EL NAVEGADOR:
        let browserModel = navigator.userAgent;
        let mozilla = /Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64; rv:90\.0\) Gecko\/20100101 Firefox\/90\.0/;

        if (mozilla.test(browserModel) === true) {
            var $card1_interval = setInterval(() => {
                $dFragm_position -= 44;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);

            }, 3);

            setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 80) {
                    clearInterval($card1_interval);
                }

            }, 1);
            if (window.innerWidth < 769 && window.innerHeight < 1025) {
                setInterval(() => {
                    if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                        $dFragm.style.height = '84.5%';
                        $dFragm.style.top = '70px';
                        console.log(window.scrollY)
                        window.scrollTo(0, 0)
                    }

                }, 1);
            }
        } else {
            var $card1_interval = setInterval(() => {
                $dFragm_position -= 44;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 10);

            setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                    clearInterval($card1_interval);
                }
            }, 1);
            if (window.innerWidth < 769 && window.innerHeight < 1025) {
                setInterval(() => {
                    if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                        $dFragm.style.height = '84.5%';
                        $dFragm.style.top = '70px';
                        console.log(window.scrollY)
                        window.scrollTo(0, 0)
                    }

                }, 1);
            }

        }

        // Para cerrar la ventana con cada botón:

    });



    $radio2.addEventListener('change', function() {
        if ($radio2.checked === true) {
            $input1_continue.style = 'display:none;';
            $input2_continue.style = 'display:flex;';
            $input3_continue.style = 'display:none;';
            $input4_continue.style = 'display:none;';
        } else {
            $input2_continue.style = 'display:none;';
        }
    });

    $card1_button.addEventListener('click', function() {
        $radio2.checked = true;
        if ($radio2.checked === true) {
            $input1_continue.style = 'display:none;';
            $input2_continue.style = 'display:flex;';
            $input3_continue.style = 'display:none;';
            $input4_continue.style = 'display:none;';
        } else {
            $input2_continue.style = 'display:none;';
        }

        //PARÁMETROS DE VELOCIDAD DE LA TARJETA SEGÚN EL NAVEGADOR:
        let browserModel = navigator.userAgent;
        let mozilla = /Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64; rv:90\.0\) Gecko\/20100101 Firefox\/90\.0/;
        if (mozilla.test(browserModel) === true) {
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 44;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 3);

            setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 80) {
                    clearInterval($card3_interval);
                }

            }, 1);
            if (window.innerWidth < 769 && window.innerHeight < 1025) {
                setInterval(() => {
                    if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                        $dFragm.style.height = '84.5%';
                        $dFragm.style.top = '70px';
                        console.log(window.scrollY)
                        window.scrollTo(0, 0)
                    }

                }, 1);
            }
        } else {
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 44;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 10);

            setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                    clearInterval($card3_interval);
                }
            }, 1);

            if (window.innerWidth < 769 && window.innerHeight < 1025) {
                setInterval(() => {
                    if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                        $dFragm.style.height = '84.5%';
                        $dFragm.style.top = '70px';
                        console.log(window.scrollY)
                        window.scrollTo(0, 0)
                    }

                }, 1);
            }
        }


    });

    $radio3.checked = true;
    $radio3.addEventListener('change', function() {
        if ($radio3.checked === true) {
            $input1_continue.style = 'display:none;';
            $input2_continue.style = 'display:none;';
            $input3_continue.style = 'display:flex;';
            $input4_continue.style = 'display:none;';
        } else {
            $input3_continue.style = 'display:none;';
        }
    })
    $card2_button.addEventListener('click', function() {
        $radio3.checked = true;
        if ($radio3.checked === true) {
            $input1_continue.style = 'display:none;';
            $input2_continue.style = 'display:none;';
            $input3_continue.style = 'display:flex;';
            $input4_continue.style = 'display:none;';
        } else {
            $input3_continue.style = 'display:none;';
        }
        let browserModel = navigator.userAgent;
        let mozilla = /Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64; rv:90\.0\) Gecko\/20100101 Firefox\/90\.0/;

        if (mozilla.test(browserModel) === true) {
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 44;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 3);

            setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 80) {
                    clearInterval($card3_interval);
                }
            }, 4);
            if (window.innerWidth < 769 && window.innerHeight < 1025) {
                setInterval(() => {
                    if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                        $dFragm.style.height = '84.5%';
                        $dFragm.style.top = '70px';
                        console.log(window.scrollY)
                        window.scrollTo(0, 0)
                    }

                }, 1);
            }
        } else {
            var $card3_interval = setInterval(() => {
                $dFragm_position -= 44;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 10);

            setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                    clearInterval($card3_interval);
                }
            }, 1);
            setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                    $dFragm.style.height = '84.5%';
                    $dFragm.style.top = '70px';
                    console.log(window.scrollY)
                    window.scrollTo(0, 0)
                }

            }, 1);
        }

    });


    $radio4.addEventListener('change', function() {
        if ($radio4.checked === true) {
            $input1_continue.style = 'display:none;';
            $input2_continue.style = 'display:none;';
            $input3_continue.style = 'display:none;';
            $input4_continue.style = 'display:flex;';
        } else {
            $input4_continue.style = 'display:none;';
        }
    })
    $card3_button.addEventListener('click', function() {
        $radio4.checked = true;
        if ($radio4.checked === true) {
            $input1_continue.style = 'display:none;';
            $input2_continue.style = 'display:none;';
            $input3_continue.style = 'display:none;';
            $input4_continue.style = 'display:flex;';

        } else {
            $input4_continue.style = 'display:none;';

        }
        console.log($dFragm_position);
        let browserModel = navigator.userAgent;
        let mozilla = /Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64; rv:90\.0\) Gecko\/20100101 Firefox\/90\.0/;

        if (mozilla.test(browserModel) === true) {
            console.log('Mozilla detected');
            let $card3_interval = setInterval(() => {
                $dFragm_position -= 44;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 3);

            setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 80) {
                    clearInterval($card3_interval);
                }
            }, 1);
            if (window.innerWidth < 769 && window.innerHeight < 1025) {
                setInterval(() => {
                    if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                        $dFragm.style.height = '84.5%';
                        $dFragm.style.top = '70px';
                        console.log(window.scrollY)
                        window.scrollTo(0, 0)
                    }

                }, 1);
            }

        } else {
            let $card3_interval = setInterval(() => {
                $dFragm_position -= 44;
                $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            }, 10);

            setInterval(() => {
                if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                    clearInterval($card3_interval);
                }
            }, 1);
            if (window.innerWidth < 769 && window.innerHeight < 1025) {
                setInterval(() => {
                    if ((parseInt($dFragm.style.top.substring(0, 3))) < 99) {
                        $dFragm.style.height = '84.5%';
                        $dFragm.style.top = '70px';
                        console.log(window.scrollY)
                        window.scrollTo(0, 0)
                    }

                }, 1);
            }

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




// ANIMACIÓN DE LA TARJETA FLOTANTE:


let $no_floating_card_zone = d.querySelector('.no_floating_card_zone');
let $card1_button = d.querySelector('.card1-button');
let $card2_button = d.querySelector('.card2-button');
let $card3_button = d.querySelector('.card3-button');
let $back_this_project_btn = d.querySelector('.back_this_project_btn');

export function animation_btn() {

    $back_this_project_btn.addEventListener('click', function() {
        // Para hacer aparecer la carta:
        $no_floating_card_zone.classList.remove('no_floating_card_zone');
        $no_floating_card_zone.classList.add('floating_card_zone');

        responsive_card();
        let $close_btn = d.querySelector('.close_btn');
        // let $floating_card_zone = d.querySelector('.floating_card_zone');
        // console.log($floating_card_zone);

        // AÑADIMOS EL JAVASCRIPT DEL BOTÓN DE CERRAR EN CADA EVENTO

        $close_btn.addEventListener('click', function() {
            $no_floating_card_zone.classList.add('no_floating_card_zone');
            $no_floating_card_zone.classList.remove('floating_card_zone');

            console.log('Close button executing');
            // $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            $dFragm.style.top = 950 + 'px'
            console.log($no_floating_card_zone);
            $dFragm_position = 950;
        })


    });

    $card1_button.addEventListener('click', function() {
        // Para hacer aparecer la carta:
        $no_floating_card_zone.classList.remove('no_floating_card_zone');
        $no_floating_card_zone.classList.add('floating_card_zone');

        let $close_btn = d.querySelector('.close_btn');
        // let $floating_card_zone = d.querySelector('.floating_card_zone');
        // console.log($floating_card_zone);

        // AÑADIMOS EL JAVASCRIPT DEL BOTÓN DE CERRAR EN CADA EVENTO

        $close_btn.addEventListener('click', function() {
            $no_floating_card_zone.classList.add('no_floating_card_zone');
            $no_floating_card_zone.classList.remove('floating_card_zone');

            // $dFragm.setAttribute('style', `top:${$dFragm_position}px`);
            $dFragm.style.top = 950 + 'px';
            $dFragm_position = 950;

        })

    });
    $card2_button.addEventListener('click', function() {
        // Para hacer aparecer la carta:
        $no_floating_card_zone.classList.remove('no_floating_card_zone');
        $no_floating_card_zone.classList.add('floating_card_zone');
        let $close_btn = d.querySelector('.close_btn');
        // let $floating_card_zone = d.querySelector('.floating_card_zone');
        // console.log($floating_card_zone);

        $close_btn.addEventListener('click', function() {
            $no_floating_card_zone.classList.add('no_floating_card_zone');
            $no_floating_card_zone.classList.remove('floating_card_zone');

            $dFragm.style.top = 950 + 'px'
            $dFragm_position = 950;
        })



    });

    $card3_button.addEventListener('click', function() {
        // Para hacer aparecer la carta:
        $no_floating_card_zone.classList.remove('no_floating_card_zone');
        $no_floating_card_zone.classList.add('floating_card_zone');
        let $close_btn = d.querySelector('.close_btn');
        // let $floating_card_zone = d.querySelector('.floating_card_zone');
        // console.log($floating_card_zone);

        $close_btn.addEventListener('click', function() {
            $no_floating_card_zone.classList.add('no_floating_card_zone');
            $no_floating_card_zone.classList.remove('floating_card_zone');

            $dFragm.style.top = 950 + 'px'
            $dFragm_position = 950;
        })

    });
}


// BOTÓN DE CARTA DE AGRADECIMIENTO

let $thank_btn = d.querySelector('.thank_btn');
$thank_btn.addEventListener('click', function() {

    let $floatTy = d.querySelector('.floating_thank_card');
    let $floating_divTy = d.querySelector('.floating_div');
    $floating_divTy.classList.remove('floating_thank_card_zone');
    $floatTy.classList.add('no_floating_thank_card');
    $floatTy.classList.remove('floating_thank_card');

});


// CÓDIGO PARA EVITAR QUE LOS MÁRGENES DE LOS BOTONES DE DESALINEEN AL CAMBIAR EL NÚMERO DE STANDS RESTANTES:

let $adjust_card1 = d.querySelector('.card1>div:nth-child(3)>h3');
setInterval(() => {
    if ($adjust_card1.textContent.length === 2) {
        let $card1_btn = d.querySelector('.card1-button');
        $card1_btn.style = 'margin-left:328px;'
    }

    if ($adjust_card1.textContent.length === 1) {
        let $card1_btn = d.querySelector('.card1-button');
        $card1_btn.style = 'margin-left:356px;'
    }

    if ($adjust_card1.textContent === '0') {
        let $card1_btn = d.querySelector('.card1-button');
        $card1_btn.setAttribute('style', 'margin-left:350px; background-color:rgba(180, 180, 180, 0.4);')
    }

}, 1);

let $adjust_card2 = d.querySelector('.card2>div:nth-child(3)>h3');
setInterval(() => {
    // Como el botón ya tenía estilos de color, para no perderlos los introducimos de nuevo al sobreescribir el atributo style:
    if ($adjust_card2.textContent === '0') {
        let $card2_btn = d.querySelector('.card2-button');
        $card2_btn.setAttribute('style', 'margin-left:350px; background-color:rgba(180, 180, 180, 0.4);')
    }

}, 1);