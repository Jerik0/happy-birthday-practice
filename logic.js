'use strict';

(() => {

  const konamiCode = [38,38,40,40,37,39,37,39,66,65];

  const welcome = () => {

  };

  const secret = () => {

  };

  const konamiCodeMatcher = () => {
    let konamiMatch = [];
    let i = 0;
    document.addEventListener('keydown', function(e) {
      if(e.which === konamiCode[i]) {
        konamiMatch.push(e.which);
        i++;
        console.log(konamiMatch);
        if(konamiCode.every((e, i) => e === konamiMatch[i])) {
          hexGenerator();
          secret();
        }
      } else {
        i = 0;
        konamiMatch = [];
      }
    });
  };

  const hexGenerator = () => {
    let hex = [];
    let i=0;
    do {
      hex.push(randomNum(48,9));
      i++;
    } while (i<6);
    hex.join('');
    console.log(hex.join(''));
    return hex;
  };

  const randomNum = (start, toNum) => {
    return Math.floor((Math.random() * toNum) + start);
  };

  konamiCodeMatcher();

})();