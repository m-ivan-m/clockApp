function showTime() {
    const d = new Date(); // constrctor
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = `${h} : ${m} : ${s}`;
    setTimeout(showTime, 1000); //sin este metodo queda fijo
}

function checkTime(i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i
}