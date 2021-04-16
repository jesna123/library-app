const express = require('express');
const { request } = require('express');
const authRouter = express.Router();
const app = new express();
var books = require('./books');
var authors = require('./authors');
module.exports = app;
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use('/', authRouter);
app.get('/', function(req, res) {
    res.render("index", {
        nav: [{ link: '/', name: 'Home' }, { link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }, { link: '/sign-in', name: 'Sign In' }, { link: '/sign-up', name: 'Sign Up' }],
        title: 'Library App'
    });
});
authRouter.get('/sign-in', function(req, res) {
    res.render("sign-in", {
        nav: [{ link: '/', name: 'Home' }, { link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }, { link: '/sign-in', name: 'Sign In' }, { link: '/sign-up', name: 'Sign Up' }],
        title: 'Library App'
    });
});
authRouter.get('/sign-up', function(req, res) {
    res.render("sign-up", {
        nav: [{ link: '/', name: 'Home' }, { link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }, { link: '/sign-in', name: 'Sign In' }, { link: '/sign-up', name: 'Sign Up' }],
        title: 'Library App'
    });
});
app.get('/authors', authors.list);
app.get('/authors/:id', authors.view);
app.get('/books', books.list);
app.get('/books/:id', books.view);
app.get('/add-book', books.new);
app.listen(5000);