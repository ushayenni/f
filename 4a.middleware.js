const express=require('express');
const app=express();
app.use((req,res,next)=>{
console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
next();
});
const checkApiKey=(req,res,next)=>{
if(req.query.apiKey==='1235'){
next();
}
else
{
res.status(403).send(`Forbidden: Invalid API Key`);
}
};
app.get('/',(req,res)=>{
res.send(`Welcome to home page!`);
});
app.get('/secure',checkApiKey,(req,res)=>{
res.send(`You hava accessed a secure route!`);
});
app.listen(3000,()=>
{
 console.log(`server is running on http://localhost:3000`);
});

//npm i express
