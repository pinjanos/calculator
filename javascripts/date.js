const getCurrentTime = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = padNumbers(currentDate.getMonth() + 1);
    const day = padNumbers(currentDate.getUTCDate());
    const hours = padNumbers(currentDate.getHours());
    const minutes = padNumbers(currentDate.getMinutes());
    const seconds = padNumbers(currentDate.getSeconds());

    return `${[year, month, day,].join('-')} ${[hours, minutes, seconds].join(':')}`;
}

const padNumbers = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
}

setInterval( () => {
    const time = getCurrentTime();
    
    const clockFace = document.querySelector('.clock-face');
    clockFace.textContent = time;

}, 1000);


