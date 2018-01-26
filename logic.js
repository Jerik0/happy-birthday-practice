'use strict';

(() => {

  const konamiCode = [38,38,40,40,37,39,37,39];

  const welcome = () => {

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
          console.log('woo');
        }
      } else {
        i = 0;
        konamiMatch = [];
      }
    });
  };

  konamiCodeMatcher();

})();