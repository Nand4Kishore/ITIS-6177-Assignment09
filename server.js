const express = require('express');
const app=express();
const port=3000;
const axios=require('axios');

app.get('/say',async (req,res)=>{
    if(req.query && req.query.keyword) {
        const key = req.query.keyword
        const url="https://uqcwusn0yb.execute-api.us-east-2.amazonaws.com/hello/                                                                                                             say?keyword=" + key
        await axios.get(url)
        .then(function(result){
            res.send(result.data)
        })
        .catch(function(error) {
            res.send(error)
        })
    }
    else {
        res.send("Please add keyword parameter");
    }
})

app.listen(port,()=>{
        console.log(`Exapmle app listening at http://localhost:${port}`)
})
