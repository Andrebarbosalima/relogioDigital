const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
function addZero(i){
    if(i < 10){
        i ="0"  + i
    }
    return i;
}
const relogior= setInterval(function time() {
    let dateToday = new Date();
    let hr = addZero(dateToday.getHours());
    let min = addZero(dateToday.getMinutes());
    let s = addZero(dateToday.getSeconds());

    horas.textContent = hr;
    minutos.textContent = min;
    
    segundos.textContent = s;

})