"use strict";

const HOURS_WORD = [' час ', ' часа ', ' часов '];
const MINUTES_WORD = [' минута ', ' минуты ', ' минут '];
const SECONDS_WORD = [' секунда!', ' секунды!', ' секунд!'];

setInterval(function displayTime() {

  let date = new Date();

  let dayMonth = date.toLocaleString("ru", {month: 'long', day: 'numeric'}); //получаем день + месяц
  let year = date.getFullYear(); // Получаем год
  let weekday = date.toLocaleString("ru-RU", {weekday: 'long'}); //по аналогии с месяцем, только день недели
  let hours = date.getHours(); //получаем часы
  let minutes = date.getUTCMinutes(); //минуты
  let seconds = date.getSeconds(); //секунды

  console.log('Сегодня ' +
    dayMonth + ' ' +
    year + ' ' + 'года, ' +
    weekday + ', ' +
    hours + declOfNum(hours, HOURS_WORD) +
    minutes + declOfNum(minutes, MINUTES_WORD) +
    seconds + declOfNum(seconds, SECONDS_WORD));

}, 1000);

function declOfNum(number, titles) {

  let cases = [2, 0, 1, 1, 1, 2];

  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

}