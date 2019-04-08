function copy(that){
var inp = document.createElement('input');
var pop = document.querySelector('.all');
document.body.appendChild(inp)
inp.value = that.textContent
inp.select();
document.execCommand('copy');
inp.remove();
pop.classList.add('opened');
document.body.classList.add('fix');
}

var popClose = document.querySelector('.all');
var close = document.querySelector('.close, .all');
close.onclick = function() {
popClose.classList.remove('opened');
document.body.classList.remove('fix');
}
