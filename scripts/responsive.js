const d = document;

// alert(`${document.documentElement.clientWidth} + ${document.documentElement.clientHeight}`);
export function responsive_card() {

    let $dFragm = d.querySelector('.dFragm');
    if ($dFragm.style === "top:70px") {
        alert('responsive_card() function')
            // $dFragm.setAttribute('style', 'top:70px; height:90%; width:90%;')
    }
}