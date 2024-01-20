
var admin = require("firebase-admin");

var serviceAccount = require(__dirname+"/serviceAccountKey.json");

const express= require('express');
const expressApp = express();

expressApp.use(express.json());


expressApp.get('/' , (req, res) => {
  res.send("I'm Alive!");
});


expressApp.post('/sendNotification' , (req , res) => {
   const message = {
    data:req.body,
    token: req.body.toToken
  };
  console.log(message);
    admin.messaging().send(message)
    .then((response) => {
      res.send('Successfully sent message:'+ response);
    })
    .catch((error) => {
      res.send('Error sending message:'+ error);
    });
});


expressApp.post('/openChat' , (req , res) => {
  const message = {
   data:req.body,
   token: req.body.toToken
 };
 console.log(message);
   admin.messaging().send(message)
   .then((response) => {
     res.send('Successfully sent message:'+ response);
   })
   .catch((error) => {
     res.send('Error sending message:'+ error);
   });
});



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://messenger-e75fb-default-rtdb.europe-west1.firebasedatabase.app"
  });
  

const registrationToken = 'dpg6YYPBR16np9iYA9KnAo:APA91bF2T0kk-GU27Dlaq6EPUwSSMiiuvvxGKqtK0zpIC-PTKHuK1xZ2zn0WEnsV7fy4Ak03g2xdRqVXkGKAzijrY_eQtvYIIe4WqHEIFGW5B0DMwzikP3aNK4DTAPi5Ff5kQGfZ62t5';



expressApp.listen(3000 , () => console.log('Listening on Port 3000..'));