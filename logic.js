'use strict';

(() => {
  let cakeBody = document.querySelector('#cake-body');
  let happyBdayTxt = document.querySelector('#happy-bday-text');

  const konamiCode = [38,38,40,40,37,39,37,39,66,65];

  const secret = () => {
    cakeBody.classList.toggle('slide-down');
    happyBdayTxt.classList.toggle('slide-down-h1');
  };

  const konamiCodeMatcher = () => {
    let konamiMatch = [];
    let i = 0;
    document.addEventListener('keydown', e => {
      if(e.which === konamiCode[i]) { //pressed key's value === current value at i index in konamiCode array?
        konamiMatch.push(e.which);
        i++;
        if(konamiCode.every((el, i) => el === konamiMatch[i])) { //match every value in both arrays
          setTimeout(() => {
            document.querySelector('#audio').play();
          }, 3000);
          setInterval(() => {
            document.body.style.backgroundColor = randomHex();
          }, 250);
          secret();
          cakeBody.style.top = '50px';
          happyBdayTxt.style.top = '0';
        }
      } else { //if the keycode that was pressed doesn't match the konami code at index i, reset the player's array and reset the iterator to 0 (to look at the beginning of the konami array again)
        i = 0;
        konamiMatch = [];
      }
    });
  };

  const randomNum = (start, toNum) => {
    return Math.floor((Math.random() * toNum) + start);
  };

  const randomHex = () => {
    let hex = ['#'];
    let hexChars = ['a', 'b', 'c', 'd', 'e', 'f'];
    for(let i=0; i<6; i++) {
      let flag = Math.round(Math.random()); // randomly pick 0 or 1
      let random;
      flag ? random = randomNum(0,9) : random = hexChars[randomNum(0, hexChars.length-1)]; //assign a number between 0-9, or a letter from a-f, depending on either 1 or 0 respectively.
      hex.push(random); //push the newly assigned character/number into the hex array
    }
    hex = hex.join(''); //join the hex array into a string
    return hex;
  };

  console.log(randomHex());

  konamiCodeMatcher();

})();