var start = document.querySelector('#start')
var stop = document.querySelector('#stop')
var reset = document.querySelector('#reset')
var timer = document.querySelector('#contador')
var interval

start.addEventListener('click',startTimer,false)
stop.addEventListener('click',stopTimer,false)
reset.addEventListener('click',resetTimer,false)

function startTimer(){
    timer.value = +timer.value+1
    interval = setTimeout(startTimer,1000)
}

function stopTimer(){
    clearInterval(interval)
}

function resetTimer(){
    timer.value = 0
    stopTimer()
}