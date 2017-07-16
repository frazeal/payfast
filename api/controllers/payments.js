module.exports = function(app){
    app.get('/payments', function(request, response) {
	console.log('Request received at http://localhost:3000.');
	response.send('OK.');
    });
};
