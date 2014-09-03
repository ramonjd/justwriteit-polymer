(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {


            var updateWordCount = document.querySelector('typewriter-textarea');
            updateWordCount.addEventListener('word-count', function(e) {
                    console.log(e.detail.words);
            });


  });



})(wrap(document));
