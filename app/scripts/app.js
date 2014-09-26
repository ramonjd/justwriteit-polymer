(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {


            var updateWordCount = document.querySelector('typewriter-textarea'),
            progressBar = document.querySelector('typewriter-progress'),
            countDown = document.querySelector('count-down');
          
            updateWordCount.addEventListener('word-count', function(e) {
                    console.log(e.detail.words);
                    progressBar.setProgressValue(e.detail.words);
            });


            countDown.addEventListener('complete', function(e) {
                    console.log('YOU MADE IT!');
            });


            countDown.addEventListener('tick', function(e) {
                    console.log(e.detail.percentage);
                    progressBar.setTimeProgress(e.detail.percentage);
            });

            countDown.start();


			//progressBar.setProgressMax(100);
           // timer.setTime(100); 



  });



})(wrap(document));
