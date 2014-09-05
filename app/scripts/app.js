(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {


            var updateWordCount = document.querySelector('typewriter-textarea'),
            progressBar = document.querySelector('typewriter-progress');

            updateWordCount.addEventListener('word-count', function(e) {
                    console.log(e.detail.words);
                    progressBar.setProgressValue(e.detail.words);
            });

            
			progressBar.setProgressMax(10);

  });



})(wrap(document));
