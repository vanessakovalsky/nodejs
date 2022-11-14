var emitter = require('events').EventEmitter;
var nodemailer = require ('nodemailer');
var em = new emitter();
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vanessakovalsky@gmail.com',
    pass: 'monpassword'
  }
});

em.addListener('AjoutTicket', function (email, titre, body){
  // Code métier pour envoyer le mail
  var mailOptions = {
    from: 'vanessakovalsky@gmail.com',
    to: email,
    subject: titre,
    text: body
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
    } else {
      console.log('Email envoyé : ' + info.response);
    }
  });
})

// Le deuxième listerner ...

em.emit('AjoutTicket', 'vanessakovalsky@gmail.com', 'Un nouveau ticket a été crée', 'Une nouvelle demande ....');
