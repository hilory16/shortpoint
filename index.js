'use strict'

const btn = document.querySelector('.button');
const progressBars = document.querySelectorAll('.progress-bar .level');
const progressNumbers = document.querySelectorAll('.progress-bar .level .progress-number')

btn.addEventListener('click', function(e){
    e.preventDefault();
    var i = progressBars.length;
    while (i--) {
        progressBars[i].setAttribute("style", "width:100%");
        progressNumbers[i].setAttribute("style", `--num: 100`)
    }
})