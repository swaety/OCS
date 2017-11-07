window.onload = function () {
  var socket = io('ws://169.254.230.202:5000');

  setInterval( function () {
          console.log("get-state");
          socket.emit('get-state', { duration: 0 });
          socket.on('state', function (data) {
            console.log(data.value);
            $("#myTable>tbody").append('<tr><td>  '+data.pin+'</td><td>    '+data.port+'</td><td>    '+data.value+'</td></tr>');
            // parameters: service_id, template_id, template_parameters
           
            if(data.value=="down"){
            
           
            emailjs.send("Smartil", "smartil_template", {"reply_to":"ibrahim.abdelkader@esprit.tn","from_name":"smartil","to_name":"client","message_html":"new letter"})
            .then(function(response) {
              console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
              console.log("FAILED. error=", err);
            });
          
          
          }
         
        });
     
  }, 7000); // setInterval
  
}; //onload
