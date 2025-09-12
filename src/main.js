const cards = document.querySelectorAll('.card'); //выбираем элемент с классом card на странице
for (let card of cards){
    card.addEventListener('click', ()=>{
        card.classList.toggle('card-show');
    });
}