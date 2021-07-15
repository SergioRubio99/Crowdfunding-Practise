let d = document;

export let progress_bar = function progress_bar() {

    let container = d.querySelector('.amount').textContent.replace(',', '').substring(1);
    console.log(container);
    let total = d.querySelector('.total').textContent.replace(',', '').substring(4).replace(' backed', '');
    container = parseFloat(container);
    total = parseFloat(total);
    console.log(container);
    console.log(total);

    //Regla de tres para calcular el % que queda para alcanzar el objetivo del crowdfunding.

    let x;
    x = (container * 100) / total;
    console.log(x);
    console.log((100 - x) + '%' + ' Es el porcentaje restante para llegar al total');

    let bar = d.querySelector('.progress');
    bar.setAttribute('style', `width:${x}%`);

    // if (x > total) {

    //     bar.setAttribute('style', `width:100%`);
    // }
}