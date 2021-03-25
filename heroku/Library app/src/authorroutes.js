const express = require("express");
const authorsrouter = express.Router();

var Authors = [
    {
      Author :' Manohar Malgonkar',
      img : 'manohar.jpg',
      

    },
    {
      Author :'Arundathy Roy',
      img : 'Arundhati roy.jpg',

    },
    {
      Author :'Salman Rushdie',
      img : 'Salman-Rushdie-2008.jpg',
    } 
    {
      Author :'Charles Dickens',
      img : 'charles.jpg',
    } 
    {
      Author :'Vikram Seth',
      img : 'vikram seth.jpg',
     
    }
  ]
  
  authorsrouter.get('/',function(req,res){
    res.render("authors",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
      title:'Library',
      Authors
    });
   
  });
  authorsrouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('author',{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
      title:'Library',
      Author:Authors[id]
    });
  });
  module.exports = authorsrouter;