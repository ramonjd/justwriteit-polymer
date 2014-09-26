(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {


            var updateWordCount = document.querySelector('typewriter-textarea'),
            progressBar = document.querySelector('typewriter-progress'),
            timer = document.querySelector('typewriter-timer');

            updateWordCount.addEventListener('word-count', function(e) {
                    console.log(e.detail.words);
                    progressBar.setProgressValue(e.detail.words);
            });

            
			//progressBar.setProgressMax(100);
            timer.setTime(100); 



  });



})(wrap(document));
