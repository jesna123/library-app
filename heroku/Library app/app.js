const express = require("express");
const app = new express();

const port = process.env.PORT ||5000;

const booksrouter = require('./src/routes/bookroutes');
const authorsrouter = require('./src/routes/authorroutes');



app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksrouter);
app.use('/authors',authorsrouter);


app.get('/',function(req,res){
    res.render("index",
    {
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
      title:'Library'
    });
});


app.listen(port,()=>{console.log("Server Ready at"+port)});