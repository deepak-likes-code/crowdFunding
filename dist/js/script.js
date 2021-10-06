


var openModalButton = document.getElementById('open-modal');
var backModal = document.getElementById('back-modal');
var content = document.getElementById('content')
var hero = document.getElementById('hero')
var close = document.getElementById('close-button')

openModalButton.onclick = () => {
    content.style.display = "none";
    hero.style.display = "none";
    backModal.style.display = "block";

}

close.onclick = () => {
    content.style.display = "block";
    hero.style.display = "block";
    backModal.style.display = "none";

}





// Close Modal


