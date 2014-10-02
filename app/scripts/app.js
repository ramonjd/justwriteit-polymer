(function(document) {
  'use strict';

  // hoist, hoist me hearties!
  var updateWordCountElem,
  progressBarElem,
  countDownElem,
  dialogElem,
  settingsElem,
  toastElem,
  wordCount;


  // bootstrap application
  document.addEventListener('polymer-ready', function() {

        dialogElem = document.querySelector('paper-dialog');
        toastElem = document.querySelector('paper-toast');
        updateWordCountElem = document.querySelector('typewriter-textarea');
        progressBarElem = document.querySelector('typewriter-progress');
        countDownElem = document.querySelector('count-down');
        settingsElem = document.querySelector('writing-settings');
        
        // can't set element attribute because for some reason DOM elem is not avail
        dialogElem.opened = true;

        dialogElem.addEventListener('core-overlay-open', function(e) {
          
          if (e.detail === false) {
            progressBarElem.setMaxValue(settingsElem.settings.words);
            countDownElem.start(settingsElem.settings.time * 60);
            updateWordCountElem.focus();

          }

        });
      
        updateWordCountElem.addEventListener('word-count', function(e) {
            wordCount = e.detail.words;
            progressBarElem.setProgressValue(e.detail.words);
        });


        countDownElem.addEventListener('complete', function(e) {
              if (wordCount >= settingsElem.settings.words) {
                toastElem.text ="You beat the clock! Well done.";
              } else {
                toastElem.text ="The clock beat you :(";
              }
              toastElem.show();
        });


        countDownElem.addEventListener('tick', function(e) {
                //console.log(e.detail.percentage);
                progressBarElem.setTimeProgress(e.detail.percentage);
        });

        progressBarElem.addEventListener('complete', function(e) {
            if (countDownElem.complete === false && wordCount >= settingsElem.settings.words) {
                  toastElem.text ="You wrote all your words! Well done.";
              } else {
                toastElem.text ="You got there... eventually :)";
              }
                
                toastElem.show();
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
