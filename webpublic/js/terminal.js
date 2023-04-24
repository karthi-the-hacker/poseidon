$(function() {
  var data = [
  { 
    action: 'type',
    strings: ["sudo root^1000"],
    
    
    output: '<span class="gray">Password: </span><br>&nbsp;',
    postDelay: 1000
  },
  { 
    action: 'type',
    strings: ["cd poseidon^400"],
    output: ' ',
    postDelay: 1000
  },
  { 
    action: 'type',
    //clear: true,
    strings: ['bash poseidon^400'],
    output: $('.mimik-run-output').html()
  },
  { 
    action: 'type',
    strings: ["Jaihind 🇮🇳!", ''],
    postDelay: 10000
  }
  
];
  runScripts(data, 0);
});

function runScripts(data, pos) {
    var prompt = $('.prompt'),
        script = data[pos];
    if(script.clear === true) {
      $('.history').html(''); 
    }
    switch(script.action) {
        case 'type':
          // cleanup for next execution
          prompt.removeData();
          $('.typed-cursor').text('');
          prompt.typed({
            strings: script.strings,
            typeSpeed: 30,
            callback: function() {
              var history = $('.history').html();
              history = history ? [history] : [];
              history.push('$ ' + prompt.text());
              if(script.output) {
                history.push(script.output);
                prompt.html('');
                $('.history').html(history.join('<br>'));
                
              }
              // scroll to bottom of screen
              $('section.terminal').scrollTop($('section.terminal').height());
              // Run next script
              pos++;
              if(pos < data.length) {
                setTimeout(function() {
                  runScripts(data, pos);
                }, script.postDelay || 1000);
              }
            }
          });
          break;
        case 'view':

          break;
    }
}
