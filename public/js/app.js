const modal = document.getElementById('myModal');
const ModalStyle = document.getElementById('ModalStyle');
const closeBtn = document.getElementsByClassName('close')[0];

ModalStyle.onclick = function() {
    modal.style.display = 'block';
}
closeBtn.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}