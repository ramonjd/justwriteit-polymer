(function(document) {
  'use strict';

  // hoist, hoist me hearties!
  var updateWordCountElem,
  progressBarElem,
  countDownElem,
  dialogElem;


  // bootstrap application
  document.addEventListener('polymer-ready', function() {

        dialogElem = document.querySelector('paper-dialog');
        updateWordCountElem = document.querySelector('typewriter-textarea');
        progressBarElem = document.querySelector('typewriter-progress');
        countDownElem = document.querySelector('count-down');
        
        // can't set element attribute because for some reason DOM elem is not avail
        dialogElem.opened = true;

        dialogElem.addEventListener('core-overlay-open', function(e) {
          
          if (e.detail === false) {
            countDownElem.start();
          }

        });



      
        updateWordCountElem.addEventListener('word-count', function(e) {
                console.log(e.detail.words);
                progressBarElem.setProgressValue(e.detail.words);
        });


        countDownElem.addEventListener('complete', function(e) {
                console.log('YOU MADE IT!');
        });


        countDownElem.addEventListener('tick', function(e) {
                console.log(e.detail.percentage);
                progressBarElem.setTimeProgress(e.detail.percentage);
        });

        


			//progressBarElem.setProgressMax(100);

  });



  // global namespace for testable utilities
  window.JFWI = (function(){

      var pad = function (n) {
        n = parseInt(n, null);
        return (n < 10 && n >= 0) ? ('0' + n) : n;
      },
      getCompletedTimePercentage = function(current, duration){
        var seconds = current / 1000;
        return 100 - Math.floor(seconds / duration * 100);
      };

      return {
        pad:pad,
        getCompletedTimePercentage:getCompletedTimePercentage
      }

  }());




})(wrap(document));
