let d = document;

export let bookmark = function() {
    let bookmark_btn = d.querySelector('.bookmark_btn')
    let bookmark_btn_inside = d.querySelector('.bookmark_btn_inside');
    let img = bookmark_btn_inside.firstChild;
    let p = bookmark_btn.lastChild;
    console.log(img)
    console.log(p)


    // bookmark_btn.toggleAttribute("bookmark-btn_bookmarked");
    // bookmark_btn_inside.toggleAttribute('bookmark_btn_inside-bookmarked');
    // img.toggleAttribute('img-bookmarked');
    // p.toggleAttribute('p-bookmarked');

    bookmark_btn.addEventListener('click', function() {
        bookmark_btn.toggleAttribute("bookmark-btn-bookmarked");
        bookmark_btn_inside.toggleAttribute('bookmark_btn_inside-bookmarked');
        img.toggleAttribute('img-bookmarked');
        p.toggleAttribute('p-bookmarked');

        if (p.innerHTML === 'Bookmark') {
            p.innerHTML = 'Bookmarked'
        } else {
            p.innerHTML = 'Bookmark'
        }
        console.log(img);
        //Atención al objeto img, que en src no tenía la ruta al uso del archivo favicon.ico, sino la que le daba el live server.

        if (img.src === 'http://127.0.0.1:5500/PR%C3%81CTICAS/crowdfunding-product-page-main/css/favicon.ico') {
            img.setAttribute('src', './css/favicon_white.png')
        } else {
            img.setAttribute('src', './css/favicon.ico')
        }

    })

};


//  <button class='bookmark_btn'><div class='bookmark_btn_inside'><img src='css/favicon.ico'></img ></div><p>Bookmark</p></button>