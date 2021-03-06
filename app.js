const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const routes = require('./routes');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes);

app.use(function (request, response, next) {
    // do your logging here
    console.log(request.method+' '+ request.originalUrl);
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();
})

// app.get('/',function(request,response){
//     const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//     response.render( 'index', {title: 'Hall of Fame', people: people} );
// })

app.listen(3000,function(){
    console.log('listening on 3000')
})

/*var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};*/
nunjucks.configure('views', {noCache: true});
/*nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});*/

// app.get ('/stylesheets/style.css', function(req, res, next){
//     res.sendFile(__dirname + '/public/stylesheets/style.css')
// }); 

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates
