const express = require( 'express' );
const app = express(); // creates an instance of an express application


app.get('/',function(request,response){
    response.send('Hello World!');
})

app.listen(3000,function(){
console.log('listening on 3000')
})