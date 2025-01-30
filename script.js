document.querySelector('.yes').addEventListener('click', () => {
  
  const messages =document.querySelectorAll('.message-js');
  messages[0].textContent = 'Yayyy I LOVE YOUU!!';
  messages[1].textContent = 'Thank you for being my Valentine!'
});


document.querySelector('.no').addEventListener('click', () => {
  
  const messages =document.querySelectorAll('.message-js');
  messages[0].textContent = 'SIGE, SAD KAMI NI JJ HUHUHUHU';
  messages[1].textContent = 'JJ OH SI MAMI MO'
});


document.addEventListener('DOMContentLoaded', () => {
  const noButton = document.getElementById('no-btn')

  noButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`
})
});