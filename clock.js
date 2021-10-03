const clock = document.querySelector("#clock");

function getClock() {
    const time = new Date()
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds(); 
    clock.innerText = `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

setInterval(getClock, 1000);

