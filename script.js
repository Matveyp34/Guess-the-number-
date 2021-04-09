let btnCheck=document.querySelector(".check")
let btnStart=document.querySelector(".start")
let secretNumber= getRandomNumber()
let attempts= 3
let spanAttempts= document.querySelector(".attempts")
spanAttempts.innerHTML= attempts
document.querySelector(".start").disabled=true
document.querySelector(".start").classList.add("disabled")

btnCheck.addEventListener("click", check)
btnStart.addEventListener("click", newGame)


function check(){
    let input=document.querySelector(".number").value
    let hint=document.querySelector(".hint") 
    if (input>secretNumber){
        hint.innerHTML="Секретное число меньше"
        attempts--
    }
    if (input<secretNumber){
        hint.innerHTML="Секретное число больше"
        attempts--
    }
    if (input==secretNumber){
        hint.innerHTML="Ты угадал"
    }

    spanAttempts.innerHTML=attempts
    document.querySelector(".number").value=""

    if (attempts<1){
        document.querySelector(".check").disabled=true
        document.querySelector(".start").disabled=false
        document.querySelector(".check").classList.add("disabled")
        document.querySelector(".start").classList.remove("disabled")
    }
}

function getRandomNumber(){
    let min=1
    let max=15
    let randomNumber= Math.floor(Math.random() * (max) + min)
    return randomNumber
}

function newGame(){
    document.querySelector(".start").disabled=true
    document.querySelector(".start").classList.add("disabled")

    document.querySelector(".check").disabled=false
    document.querySelector(".check").classList.remove("disabled")

    attempts=3
    document.querySelector(".attempts").innerHTML=attempts

    document.querySelector(".hint").innerHTML="Я буду подсказывать"
}


