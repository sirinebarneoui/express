
const express = require('express')

const app = express()

const port = 5000

const testTime=(req,res,next)=>{
    const currentDate = new Date()
    const currentDay = currentDate.getDay()
    const currentTime = currentDate.getHours()

    if(currentDay == 1 || currentDay == 6 || currentTime <9 || currentTime>15){
   return res.sendFile(__dirname+'/public/Error.html')
    }
    next()
}
app.use(testTime)
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/Home.html')
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/Contactus.html')
})

app.get('/services',(req,res)=>{
    res.sendFile(__dirname+'/public/OurServices.html')
})

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/public/style.css')
// })


app.listen(port,console.log(`Server is running on the port ${port}`))
