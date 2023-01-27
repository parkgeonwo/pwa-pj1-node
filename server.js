const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
let cors = require('cors');
app.use(cors());


MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.zrt9g.mongodb.net/PWApj1?retryWrites=true&w=majority',(error, client)=>{
  if (error) return console.log(error);

  db = client.db('PWApj1');
  // db.collection('post').insertOne({_id : 5}, (error, result)=>{
  //   console.log('전송완료');
  // })

  app.listen(8080, ()=>{
    console.log('listening on 8080');
  });
})

app.get('/',(req, res)=>{
  res.send('home');
})

app.get('/pwapj1/mainpage',(req, res)=>{
  db.collection('post').find().toArray((err,result)=>{
    // res.send('메인페이지get');
    // console.log(result);
    res.send(result);
  })
})











// // 리액트랑 합칠떄 

// app.use( express.static( path.join(__dirname, 'pwa-pj1/build') ) );

// app.get('/',(req, res)=>{
//   res.sendFile( path.join(__dirname, '/pwa-pj1/build/index.html') );
// });

// // 리액트 라우터로 전권 넘기기 // 가장 하단에 놓자
// app.get('*',(req,res)=>{
//   res.sendFile( path.join(__dirname, '/pwa-pj1/build/index.html') )
// })


