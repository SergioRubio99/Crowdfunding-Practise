const d = document;

// alert(`${document.documentElement.clientWidth} + ${document.documentElement.clientHeight}`);
export function responsive_card() {

    let $dFragm = d.querySelector('.dFragm');
    if ($dFragm.style === "top:70px") {
        alert('responsive_card() function')
            // $dFragm.setAttribute('style', 'top:70px; height:90%; width:90%;')
    }
}

export function nav_btn() {
    let $menu = d.querySelector('.navigation>ul');
    let $mobile_btn = d.querySelector('.toggle');
    $mobile_btn.addEventListener('click', function() {
        $menu.classList.toggle('nav_mobile_menu_visible')
    })

}

export function noScroll() {
    // setInterval(() => {
    //     window.scrollTo(0, 0);
    // }, 1);

}