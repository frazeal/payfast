var express = require('express');
var app = express();

app.listen(3000, function(){
    console.log('Server running at port:3000.');
});

app.get('/test', function(request, response) {
    console.log('Request received.');
    response.send('OK.');
});
