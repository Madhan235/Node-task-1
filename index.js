const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const dirName = path.join(__dirname,"TimeStamps")

// app.get('/', (req, res) => {
//     res.send("i m the 1st server 🙌")
// })



app.get('/date-time', (req, res) => {
    let date = new Date();
    let currentTimeStamp = date.toUTCString();
    let content = `The last updated time : ${currentTimeStamp}`
    let cts = currentTimeStamp.split("")
    // console.log(cts.join("").slice(0,8))
    const filterdCts = cts.filter(val => val !== ":" && val !== " ");
    const finalval = filterdCts.join("")
    console.log(finalval)

    fs.writeFile(  `${dirName}/${finalval}.txt`, content, (err)=>{
         
        if (err) {
            console.log(err);
            res.send("Error in writing file")
            return
        }
        res.sendFile(path.join(dirName, `${finalval}.txt`))
    })
})
app.listen(9000,()=>console.log("server Sarted in localhost:9000"));
