const express = require('express');
const app = express();
const product = require('./utils/product');

app.get('',(req,res)=>{
    res.send('Hello express!')
});

app.get('/help',(req,res)=>{
    res.send('Help page!');
})

app.get('/about',(req,res)=>{
    res.send('about page!');
})

app.get('/weather',(req,res)=>{
    if(!req.query.search){
       return res.send({
        error: 'you must provide an address'
       });
    }
    product(req.query.search, (error,response)=>{
        if (error) {
            return res.send({error})
        }

        res.send({
            response: response,
            query:req.query.search
        })
    })
    // res.send({
    //     search:req.query.search
    // });
})

fetch('https://dummyjson.com/products').then((response)=>{
    response.json().then((data)=>{
        console.log(data.products[0].title);
    })
})
app.listen(3000,()=>{
    console.log("server is up on port 3000.");
})