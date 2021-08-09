const express =require('express')
const app=express() 
const path=require('path')
const http=require('http').createServer(app)
const io=require('socket.io')(http)
const port=process.env.PORT || 3000

const index=path.join(__dirname,'../public')
app.use(express.static(index))

http.listen(port,()=>{
console.log('listening...')
})
app.get('/',(req,res)=>{
      res.send('working')
})
app.get('*',(req,res)=>{
      res.send('Return to previous page')
})

io.on('connection',(socket)=>{
      socket.on('message',(msg)=>{
            socket.broadcast.emit('message',msg)
      })
})


