// oq é uma função construtora? operador construtor?
const showText = document.querySelector("#container");
function getCalendar() {
    const data = new Date();
    return data;
}

const processExpressions = () => {
    const date = getCalendar();
    const week = weekdays();
    const months = getMonths();
    const days = date.getDate();
    const years = date.getFullYear();
    const seconds = date.getSeconds();
    const [hours, minutes] = interpretedHoursAndMinutes();
    return [week, days, months, years, hours, minutes, seconds];
};

function weekdays() {
    const weekDays = getCalendar().getDay();
    switch (weekDays) {
        case 0:
            return "Domingo";
        case 1:
            return "Segunda-Feira";
        case 2:
            return "Terça-Feira";
        case 3:
            return "Quarta-Feira";
        case 4:
            return "Quinta-Feira";
        case 5:
            return "Sexta-Feira";
        case 6:
            return "Sábado";
        default:
            return "Erro";
    }
}

function getMonths() {
    const months = getCalendar().getMonth();

    switch (months) {
        case 0:
            return "Janeiro";
        case 1:
            return "Fevereiro";
        case 2:
            return "Março";
        case 3:
            return "Abril";
        case 4:
            return "Maio";
        case 5:
            return "Junho";
        case 6:
            return "Julho";
        case 7:
            return "Agosto";
        case 8:
            return "Setembro";
        case 9:
            return "Outubro";
        case 10:
            return "Novembro";
        case 11:
            return "Dezembro";
        default:
            return "Erro";
    }
}

const interpretedHoursAndMinutes = () => {
    const date = getCalendar();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
        hours = `0${hours}`;
    } else {
        hours = hours;
    }

    return [hours, minutes];
};

function interpretedCalendarTime() {
    const interprete = processExpressions();

    showText.innerHTML = "";
    showText.innerHTML += `<h1>${interprete[0]}, ${interprete[1]} de ${interprete[2]} de ${interprete[3]} ${interprete[4]}:${interprete[5]}:${interprete[6]}</h1>`;

}

setInterval(interpretedCalendarTime, 1000);