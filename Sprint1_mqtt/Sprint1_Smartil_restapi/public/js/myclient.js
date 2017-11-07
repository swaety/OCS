window.onload = function () {
  var url,
    i,
    port = 3;  // the button port we will read

 $('#input_' + port).html('loading port ' + port + ' value...');

  setInterval( function () {
      url = document.URL + 'inputs/' + port;
      console.log('making API call ' + url);

      $.getJSON(url, function (data) {
        console.log('API response received for smartil button. port ' + data.port + ' value = ' + data.value);
        $('#input').append('</br>Smartil button on port ' + data.port + ' value is ' + data.value);
      });
     // for
  }, 10000); // setInterval

}; //onload






