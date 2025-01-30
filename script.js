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
