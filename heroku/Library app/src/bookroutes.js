const express = require("express");
const booksrouter = express.Router();
var books = [
    {
      title : 'The Ocean at the End of Lane',
      author : 'Neil Gaiman',
      genre : 'Fantasy',
      img : 'ocean.jpg'
        },
    {
      title : 'Three',
      author : 'Ted Dekker',
      genre : 'Thriller and Suspense',
      img : 'three.jpg'
        },
        {
          title : 'Stiff',
          author : 'Mary Roach',
          genre : 'Non-fiction',
          img : 'stiff.jpg'
            }
  ];
  booksrouter.get('/',function(req,res){
    res.render("books",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
      title:'Library',
      books
    });
   
  });
  booksrouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('book',{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
      title:'Library',
      book:books[id]
    })
  });

  module.exports = booksrouter;