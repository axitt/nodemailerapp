const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: '4bc807384583ca',
       pass: 'f88df89b4ae777'
    }
});

const message = {
    from: 'akshitkumar.321@gmail.com',
    to: 'akshit.k@quillhash.com',
    subject: 'Test Subject 1',
    text: 'Test body 1'
};

router.post('/subscribe',(req,res,next)=>{
    console.log("mailing called");
    try{
        transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    })
    res.send();
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = router; 