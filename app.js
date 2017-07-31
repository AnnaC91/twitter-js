const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use(function (request, response, next) {
    // do your logging here
    console.log(request.method+' '+ request.originalUrl);
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();
})

app.get('/',function(request,response){
    response.send('Hello World!');
})

app.listen(3000,function(){
    console.log('listening on 3000')
})