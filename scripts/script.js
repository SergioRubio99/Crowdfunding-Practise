let d = document;

(function() {
    let container = d.querySelector('.amount').textContent.replace(',', '').substring(1);
    console.log(container);
    let total = d.querySelector('.total').textContent.replace(',', '').substring(4).replace(' backed', '');
    container = parseFloat(container);
    total = parseFloat(total);
    console.log(container);
    console.log(total);

}());