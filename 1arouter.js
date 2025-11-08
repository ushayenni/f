const express=require('express');
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
res.send('<h2>Welcome to Express Routing Example</h2>');
});
app.get('/user/:id',(req,res)=>{
const userId=req.params.id;
res.send(`User ID from route parameter: ${userId}`);
});
app.get('/search',(req,res)=>{
const {term,category}=req.query;
res.send(`You searched for term= ${term},category= ${category}`);
});
app.get('/build-url',(req,res)=>{
const userId=101;
const url=`/profile/${userId}?show=summary`;
res.send(`<a href="${url}">Go to Profile</a>`);
});
app.get('/profile/:id',(req,res)=>{
const id=req.params.id;
const show=req.query.show;
res.send(`Profile Page of User ${id}.show:${show}`);
});
app.listen(3000,()=>{
console.log('Server running at http://localhost:3000');
});
//npm init -y
//npm install express
