/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable brace-style */
const burger = document.getElementsByClassName('header__burger')[0]; // burger obj
const spans = document.getElementsByClassName('header__div');
const buttons = document.getElementsByClassName('content__button--circle');
const bookButton = document.getElementsByClassName('content__book-now-btn')[0];
const calendar = document.getElementsByClassName('calendar')[0];
const inputs = document.getElementsByClassName('content__input');
const sendButton = document.getElementsByClassName('content__accept-button')[0];
const date = new Date();
// true varaibles
let hour;
let calendarDate;
let name; let school; let subject; let topic;

let isActive = false; // to burger
let help = true; // to buttons
let buttton; // idk xD
function clickedBurger() // clicked burger
{
  const headerObj = document.getElementsByClassName('header')[0];
  const headerTrue = document.getElementsByClassName('open')[0];
  const disable = document.getElementsByClassName('open__dis')[0];
  const logo = document.getElementsByClassName('header__logo')[0];
  if (isActive)
  {
    for (let i = 0; spans.length > i; i += 1) // getting i index
    {
      const AnimationIndex = (i + 1).toString();
      spans[i].classList.remove(`header__span${AnimationIndex}0`); // removing classes
    }
    isActive = false;
    setTimeout(() =>
    {
      headerObj.classList.remove('open__header');
      headerTrue.classList.remove('header__open');
      disable.classList.remove('open__disable');
      logo.classList.remove('header__logo--none');
      headerTrue.classList.remove('open--none');
      headerTrue.style.display = 'none';
    }, 390);
  }
  else if (!isActive)
  {
    for (let i = 0; spans.length > i; i += 1) // getting i index
    {
      const AnimationIndex = (i + 1).toString();
      spans[i].setAttribute('class', `header__div header__span2 header__span${AnimationIndex}0`); // removing classes
    }
    setTimeout(() =>
    {
      headerObj.classList.add('open__header');
      headerTrue.classList.add('header__open');
      disable.classList.add('open__disable');
      logo.classList.add('header__logo--none');
      headerTrue.classList.remove('open--none');
      headerTrue.style.display = 'flex';
      headerTrue.style.opacity = '100%';
    }, 390);
    isActive = true;
  }
}

function clickedButton()
{
  function check(btn)
  {
    if (btn.className.includes(event.target.className))
    {
      event.target.classList.add('--active');
      buttton = event.target; // set first click focus
      hour = btn.innerHTML;
    }
    else
    {
      buttton.classList.remove('--active'); // delete focus from first selected
      buttton = event.target; // change focus on other clicked button
      buttton.classList.add('--active'); // set on him focus background
      hour = event.target.innerHTML;
    }
  }
  if (help)
  {
    check(event.target); // use first check
    help = false; // end it
  }
  else
  {
    check(buttton); // check first check button with actual clicking
  }
}

function sendIt()
{
  window.scrollBy({
    top: 500,
    left: 0,
    behavior: 'smooth',
  });
}

function setDay(dateIndex)
{
  function getZero(arg) // check to add zero
  {
    if (arg > 9)
    {
      return arg;
    }
    return `0${arg}`;
  }

  function day() // get days, month and full year
  {
    if (dateIndex === 1)
    {
      return getZero(date.getUTCDate()) + 1;
    }
    return getZero(date.getUTCDate());
  }
  function month()
  {
    return getZero(date.getUTCMonth());
  }
  function year()
  {
    return getZero(date.getUTCFullYear());
  }
  const day1 = document.getElementsByClassName('content__text-date')[dateIndex];
  day1.innerHTML = `${day()}/${month()}/${year()}`;
}

function SeeRresults()
{
  alert(`Your name: ${name}   Your school: ${school}   Your subject: ${subject}   Your hour: ${name}`);
}

function validateResults()
{
  let helper = true;
  function ResetButtons(arg) // reset buttons
  {
    arg.classList.remove('--active'); // reset color
    calendar.value = 0; // reset calendar value
    alert('Select one date, in calendar or in button');
  }
  for (let i = 0; buttons.length > i; i += 1) // checking buttons iteration
  {
    const elementss = buttons[i]; // button in iteration
    if (elementss.className.includes('--active') && calendarDate !== '') // button clicked && calendar have date
    {
      helper = false;
      ResetButtons(elementss); // reset all buttons
    }
  }
  if (name === '' || school === '' || subject === '' || topic === '') // validate input data
  {
    alert('Wprowadź poprawne dane w formularzu');
  }
  else if (helper)
  {
    SeeRresults(); // see results
  }
}

function bookNow()
{
  calendarDate = calendar.value; // set date from caendar

  for (let index = 0; index < inputs.length; index += 1) // get date form inputs
  {
    switch (index) // set input to variable ni inputs array
    {
      case 0:
        name = inputs[index].value;
        break;
      case 1:
        school = inputs[index].value;
        break;
      case 2:
        subject = inputs[index].value;
        break;
      case 3:
        topic = inputs[index].value;
        break;
      default:
        break;
    }
  }
  // test();
  validateResults(name, school, subject, topic);
}

export default function header() // main function
{
  setDay(0); // setting date to page
  setDay(1); // setting sacond date to page
  burger.addEventListener('click', clickedBurger); // add event to click burger
  for (let index = 0; index < buttons.length; index += 1) // add event to click all buttons
  {
    const element = buttons[index];
    element.addEventListener('click', clickedButton);
  }
  sendButton.addEventListener('click', sendIt); // add event to send button
  bookButton.addEventListener('click', bookNow); // add event to book button
}
