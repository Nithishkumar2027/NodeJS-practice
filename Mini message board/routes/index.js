const express = require('express');
const router = express.Router();
const moment = require('moment')

const messages = [
  {
    text: "Hi there!",
    user: "Kumar",
    added: 'October 12th 2020, 11:21:35 pm'
  },
  {
    text: "Hello world",
    user: "Ijaan",
    added: 'October 12th 2020, 12:21:35 am'
  }
]

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/create-message', (req, res) => {
  res.render('createMessage', {title: 'Create Message'})
})


router.post('/create-message', (req, res)=>{
  messages.push(handleMessage(req.body))
  res.redirect('/')
})

const handleMessage = (messageRequest) => {
  return {
    text: messageRequest.message,
    user: messageRequest.username,
    added: moment().format('MMMM Do YYYY, h:mm:ss a')
  }  
}

module.exports = router;
