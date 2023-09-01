const h2 = document.createElement('h2"')
h2.textContent = 'This content added by JavaScript'
document.querySelector('body').appendChild('h2')

const isRevealed = getElementById('struggles')
isRevealed.style.visibility = 'hidden'
const showMe = document.getElementById('clickEvent')

function reveal (){isRevealed.style.visibility = 'visible'}
showMe.addEventListener('click', reveal)