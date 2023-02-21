window.onload = () => {
    getBuffer();
}

let getBuffer = () => {
    let date = new Date();
    let seed = date.toDateString();
    let rng = new Math.seedrandom(seed);
    let buffer = rng();

    getTime(buffer);
}

let getTime = (buffer) => {
    let time = new Date();
    time.setHours(0, 0, 0, 0);

    time.setHours(time.getHours() + Math.floor(24/buffer));
    time.setMinutes(time.getMinutes() + Math.floor(60/buffer));
    time.setSeconds(time.getSeconds() + Math.floor(60/buffer));
    if (time.toLocaleString == Date.now) { time.setMinutes(time.getMinutes + Math.floor(60 / buffer)) }

    displayTime(time);
}

let displayTime = (time) => {
    document.getElementById('time').textContent = time.toLocaleTimeString();
}