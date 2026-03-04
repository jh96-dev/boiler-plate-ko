const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 5000

const config = require('./config/key');

const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());



const mongoose = require('mongoose')

mongoose.connect(config.mongoURI)
  .then(()=> console.log('MongoDb Connected...'))
  .catch(err => console.log(err))







app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', async (req, res) => {
  const user = new User(req.body);

  try {
    // await를 사용하여 저장이 완료될 때까지 기다립니다.
    const userInfo = await user.save();
    return res.status(200).json({
      success: true
    });
  } catch (err) {
    // 에러가 발생하면 catch 블록에서 처리합니다.
    return res.json({ success: false, err });
  }
})


app.listen(port, ()=> console.log('Example app listening on port ${port}!'))










app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
