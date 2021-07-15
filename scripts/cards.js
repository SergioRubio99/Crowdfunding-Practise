let d = document;

export function cards() {
    const $card1 = d.querySelector('.card1-button'),
        $card2 = d.querySelector('.card2-button'),
        $card3 = d.querySelector('.card3-button'),
        $body = d.querySelector('body'),
        $dFragm = d.createElement('div');

    $dFragm.innerHTML = `
    
    <h2 class = 'dFragm-main_title'>Back this project</h1>
    
    <p class= 'dFragm-p'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
    
    <div class='dFragm-card1'>

    <input type="radio" id='radio1' name="fav_language" value="HTML">
    <label for="radio1">Pledge with no reward</label><br>
    <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>

    </div>
    `
    $dFragm.classList.add('dFragm');

    $body.appendChild($dFragm);

}