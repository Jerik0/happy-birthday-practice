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
          console.log('woo');
          secret();
        }
      } else {
        i = 0;
        konamiMatch = [];
      }
    });
  };



  konamiCodeMatcher();

})();