module.exports = function(app) {

   app.get('/', function(req, res) {
    res.render('index.ejs');
  });

   app.get('/chat', function(req, res) {

    res.render('chat.ejs');
  });

    app.get('/profile', function(req, res) {

    res.render('profile.ejs');
  });

    app.get('/mentorProfile', function(req, res) {

    res.render('mentorProfile.ejs');
  });

     app.post('/imagetweet', function(req, res) {

   // console.log(req.body.dataUrl);

   // console.log(req.body.objecturls);

   const imageDataURI = require('image-data-uri');

    const fs = require('fs');
    const path = require('path');
    const config = require('./config');

    const apiClient = config.newClient();
    const uploadClient = config.newClient('upload');


   let dataURI = req.body.dataUrl;

   var url = req.body.objecturls;

   const last = url.split("/")
   const lastItem = last[last.length-1];
     let filePath = 'images/uploadscreenshot/'+lastItem;
  imageDataURI.outputFile(dataURI, filePath)
    .then(function(resk){
      console.log(resk);
      const mediaFile = fs.readFileSync(resk);
      fs.unlink(resk, (err) => {
        if (err) {
            console.log("failed to delete local image:"+err);
        } else {
            console.log('successfully deleted local image');                                
        }

        });
    const base64image = Buffer.from(mediaFile).toString('base64');

    uploadClient.post('media/upload', { media_data: base64image }).then(media => {
    console.log('You successfully uploaded media');

    var media_id = media.media_id_string;
    console.log(media_id);

    apiClient.post('statuses/update', { status: '', media_ids: media_id }).then(tweet => {
      res.send(tweet);
      // console.log(tweet);
      console.log("https://twitter.com/intent/tweet?text="+tweet.text);
       
        console.log('Your image tweet is posted successfully');
    }).catch(console.error);

    }).catch(console.error);

    });



});




   app.get('/stockChart', function(req, res) {

    var mentorids = req.query.id;

    var symbol = req.query.stockName;

    res.render('stockChart.ejs' , {tipsIds : mentorids , stockSymbol : symbol});
  });


  app.get('/dashboard', function(req, res) {

   
        res.render('dashboard.ejs');



  });

  app.get('/replyMsg', function(req, res) {

   
        res.render('replyMsg.ejs');



  });

  app.get('/chatCodee', function(req, res) {

    res.render('chatCodee.ejs');
  });

   app.get('/mentorDetails', function(req, res) {

    var mentorids = req.query.id;

    res.render('mentorDetails.ejs' , {tipsIds : mentorids});
  });

   app.get('/macdDetails', function(req, res) {

    var mentorids = req.query.id;

    res.render('macdDetails.ejs' , {tipsIds : mentorids});
  });
   

     app.get('/aiDetails', function(req, res) {

    var mentorids = req.query.id;

    var symbol = req.query.stockName;

    res.render('aiDetails.ejs' , {tipsIds : mentorids , stockSymbol : symbol});
  });


  app.get('/Newsletter', function(req, res) {

    res.render('newsFeedServices.ejs');
  });

  app.get('/NewsFeed', function(req, res) {

    res.render('newsletterServices.ejs');
  });

  app.get('/TradeAlerts', function(req, res) {

    res.render('tradeAlerts.ejs');
  });

  app.get('/TradeAlerts', function(req, res) {

    res.render('tradeAlerts.ejs');
  });

  app.get('/DueDiligence', function(req, res) {

    res.render('dueDiligence.ejs');
  });

  app.get('/recommendedService', function(req, res) {

    res.render('recommendedService.ejs');
  });


  app.get('/LiveChat', function(req, res) {

    res.render('chatRoomServices.ejs');
  });

  app.get('/1-1Chat', function(req, res) {

    res.render('chatVideoServices.ejs');
  });
  

  app.get('/Webinar', function(req, res) {

    res.render('webinarServices.ejs');
  });

   app.get('/MentorPhoneGroup', function(req, res) {

    res.render('mentorPhoneServices.ejs');
  });

    app.get('/Books', function(req, res) {

    res.render('bookServices.ejs');
  });

    app.get('/Class', function(req, res) {

    res.render('classServices.ejs');
  });


  app.get('/VideoSubscription', function(req, res) {

    res.render('videoServices.ejs');
  });

  app.get('/services', function(req, res) {

    res.render('services.ejs');
  });

   app.get('/editService', function(req, res) {

    var serviceIddd = req.query.id;

    var servicePlanIddd = req.query.ids2;

    var servicesubscriptionname = req.query.sname;


    res.render('editService.ejs' , {subscriptionServiceId : serviceIddd , servicesMainId : servicePlanIddd , serviceName : servicesubscriptionname});



  });


    app.get('/forgetPassword', function(req, res) {

    
    res.render('forgetPassword.ejs');



  });


  app.get('/chatWindow', function(req, res) {

    const admin = require('firebase-admin');
  
    const db = admin.firestore();



     res.render('chatWindow.ejs');

       
    // });




  });

  app.post('/firebasejs', function(req, res) {

     // console.log(req.body);

    const admin = require('firebase-admin');
  
    // const serviceAccount = require('./../serviceAccountKey.json');
    // //initialize admin SDK using serciceAcountKey
    // admin.initializeApp({
    //   credential: admin.credential.cert(serviceAccount)
    // });
    const db = admin.firestore();

    // console.log(req.body)

    db.collection("/openGroups/demoOpenGroup1/messages").add({
    createdDate : req.body.createdDate,
    message: req.body.message,
    messageId: req.body.userId + "_"+ req.body.createdDate,
    messageType : "text",
    profileImageUrl : "https://apis.tradetipsapp.com/api/appUser/getImageByAppUserId?appUserId=" + req.body.userId,
    userId : req.body.userId,
    userName : req.body.userName

    })
    .then(function(docRef) {
        // console.log(docRef);
        // console.log("Document written with ID: ", docRef.id);
        return res.redirect('firebase.ejs');

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  });

    app.get('/home', function(req, res) {

   

    res.render('home.ejs');

  });

    app.get('/room', function(req, res) {

    res.render('room.ejs');
  });

     app.get('/tip', function(req, res) {

    res.render('tip.ejs');
  });



};