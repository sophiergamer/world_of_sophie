const h2 = document.createElement('h2"')
h2.textContent = 'This content added by JavaScript'
document.querySelector('body').appendChild('h2')

const showMe = document.getElementById('clickEvent')
showMe.addEventListener('click', reveal)
function reveal (){console.log(document.getElementById('struggles'))}