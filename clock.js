const getClock = () => {
    // time 
    const today = new Date()    // time ISO standard format
    const hour = today.getHours()
    const minute = today.getMinutes()
    const second = today.getSeconds()

    // hh:mm:ss
    const str = String(hour).padStart(2, 0) + ":" + String(minute).padStart(2, 0) + ":" + String(second).padStart(2, 0)
    document.getElementById('clock').innerHTML = str;
}

setInterval(getClock, 1000)

let counter = 0;
const increaseCounter = () => {
    counter++
    document.getElementById("counter").innerHTML  =counter
}

document.getElementById('btn').onclick = increaseCounter