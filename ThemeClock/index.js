const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleSwitch = document.querySelector('#toggle');

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

toggleSwitch.addEventListener('click', (e) =>
  document.querySelector('html').classList.toggle('dark')
);

function setTime() {
  const time = new Date();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const Hours = time.getHours();
  const Minutes = time.getMinutes();
  const secondas = time.getSeconds();
  const hoursForClock = Hours % 12;
  const amPm = Hours >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = ` translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = ` translate(-50%, -100%) rotate(${scale(
    Minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = ` translate(-50%, -100%) rotate(${scale(
    secondas,
    0,
    59,
    0,
    360
  )}deg)`;
  const displayhours =
    hoursForClock < 10 ? `0${hoursForClock}` : `${hoursForClock}`;

  const displayMins = Minutes < 10 ? `0${Minutes}` : `${Minutes}`;

  const displaySeconds = secondas < 10 ? `0${secondas}` : `${secondas} ${amPm}`;

  timeEl.innerHTML = `${displayhours}:${displayMins}:${displaySeconds}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span> `;
}
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

setInterval(() => {
  setTime();
}, 1000);
