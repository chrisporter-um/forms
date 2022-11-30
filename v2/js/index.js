var working = false;
$('.login').on('submit', function(e) {
  e.preventDefault();
  if (working) return;

  var $userid = $('#userid').val();
  var $userpin = $('#userpin').val();

  if (($userid == '9834') && ($userpin == '1394'))
  {
    working = true;
    var $this = $(this),
      $state = $this.find('button > .state');
    $this.addClass('loading');
    $state.html('Authenticating');
    
    setTimeout(function() {
      $this.addClass('ok');
      $state.html('Welcome back!');
      setTimeout(function() {
        $state.html('Log in');
        $this.removeClass('ok loading');
        working = false;
      }, 4000);
    }, 3000);
  }
  else
  {
    $('#message').text('Incorrect details');
    return working;
  }
});