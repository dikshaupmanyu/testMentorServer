var config = {
    apiKey: "AIzaSyA0o46jRmw6OghL2fcpdIcNWDeG1EQ5upQ",
    authDomain: "tradetips-9baa3.firebaseapp.com",
    databaseURL: "https://tradetips-9baa3.firebaseio.com",
    projectId: "tradetips-9baa3",
    type: "service_account",
    project_id: "tradetips-9baa3",
    storageBucket: "tradetips-9baa3.appspot.com",
    messagingSenderId: "592114858590",
    appId: "1:592114858590:web:2e2f77237953b570fb52cf",
    measurementId: "G-B3RPK4JXG3",
    private_key_id: "9efaa0e3e7bf1fac231c69b552514e210442b223",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDoxICupYmqJ8yY\nmWkKk8lWp3dKzdAfOkAuyb8yrD9WWYOSUsAMIBY+irMBy74uFeJry8hfHicsBWSW\nuzL04S2S6dlJfeuBFI7GmgNIUG3GDfBROKeUS/XUzY2qg0+dNvgYgFbzoBNc0sMH\nxf4Ezarp/3CDqroWQRD0hvn2zUjNOnWqMP4NcZZfhyNJJcrFyvEWcMs8gWR0r+fQ\nijbGVgqf1n9T+HpGBXkXi9X3tZHe3HW4P6n0gjLU1eU8kOr6V6LDDAngp6ESsuQJ\nAyN81Sz9Axi4hygyWl7Oq7zpitVQxjHwzdMuWMGb/GbnHsleJRYHErk85qaHAvp1\nuS416baJAgMBAAECggEACe+VZJ8ZVMOVJrBpvPNZBVNpsq49Y4/bfIPNHw8eNwPk\nK2NP4lSeTnYiNQHq8NGrVBmjSHgjiOwEArEj+DMCfIJx7YKsAlsLyyt412XjgbBH\noVfvQ1PIvxg1I2GujNHzXixgSc779Jrki1jmwnK7CHkIZv5rKhcF78IxOllB8cyn\nsDdEOkYPAvYeVpIG1j3JQD4Yeo5xyT/MEhzZKqvNeg+uKkDS9R3P5jz94gRTbAtv\n3sKuS6Hrx2tn+BmqhpG1YFlKGMeTpAN42Jf96HJZQQvzho1AmTJh1Ep3fCgMOYhW\n0IJa1JnfVlHlZrL2NmLJ7ac+7yCIBPCXGtkihaHmzwKBgQD4g3si7vB2PBFTXxX5\nTJ0LubY/zyMp0sja/Rp2JYVVHh2WNHa6/TKyxksCG2OlMHbHV99QTrBuIyVYPWbN\njGPeQQAwd+y31RhHyePG99gwxvY8rRSzrEoPev6/6LHM5MdPqNzyujY0w0kUp5UR\nUyANKnCVeOll4IEmApBNfT3UhwKBgQDvx5buPbqdGA4mPKmEq/TLUy4OXVCnd1e3\nOe95qQIcbChCCAkSVeJ3nSvE5d0eBGJNlhaWeTA3DP/963o4frkRmaQJK9BsXdnb\nVj5iG3QRRKCYpamH1kY1AHc/G7P7a4hBPJ+4yblpGBiC7EayG9uBhgDA2sdLOPWW\nF1pZ20TwbwKBgAjz66a5hu4rgdBIF6mQigPXH+qykqi6EERbY+2nsmL7n8M+hpx7\n7KymGiOsSu2zjkPmNYRWIWMGXx0LsT1sdliWbORSHbQNuD811b/gQ+iV8l8DOUCz\nz0M5gh31yxn/j/KducAA110VP/e/hc5G+VugEMhBv97MtLpi00IHZgfXAoGBAIBq\nmWfQwY/+4R0TYgp++aSnUMQ6r8ZwwRaNPbcfj9TfDBSJLyqVuqsrDtTt8qVv3aIF\n3uUJ1Iu3N6arJZL6M228pkCPKZnQDaxNnS133IqfAY+fMZNha8pZDIRM9vCRH7Eo\nobYau2UQlZgQqLAdAUt2FBM1WITt5YFT0nzLVTmbAoGBAO/p5zqkeQ3Yjt7qIs8g\nbQTByK/9TsDRdiK9RfsEKuq70BHLuyYoW6jt9yR4AlbQHEFjGek9mWw4k45aZB5P\n2vjISHPiQoAAGVE9eowmvcckYn+IFFkNIs9s3UBX1d2RBzOgy3XMYE897DWGmKc+\n7F3mTXJtUyyjUqERXKBTYxN0\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-olv1b@tradetips-9baa3.iam.gserviceaccount.com",
    client_id: "112955508654296836542",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zgd2j%40chatdemo-96e4f.iam.gserviceaccount.com",
    vapidKey: 'BN2e4vqb2-OY-QX6Z0531oQ1pSiiEUNQU2SEcSaEiMvJFcy8unSAW6gPrFJQeHz0VQyPu2JLqVuaFDnfeDmpy3o'
};

firebase.initializeApp(config);

var db = firebase.firestore();


function handleCreateReply(event) {

  // alert("reply select");

var fullName   = document.getElementById('user_nickname');
// alert(fullName.value);
var message    = document.getElementById('btn-input');
var userId     = document.getElementById('user_id');
// alert(userId.value);
var docId     = document.getElementById('msgreplyId');

   event.preventDefault();
 
   var loggedInVal = userId.value;
   // alert(loggedInVal);
   var loggedInName = fullName.value;
   // alert(loggedInName);
   var uniqueDocId = docId.value;
   // alert(uniqueDocId);

   const docRefreply = db.collection("/openGroups/demoOpenGroup1/messages/"+uniqueDocId+"/replies/");

       
   if(message.value != ""){

    let taskreply = {
    userName: loggedInName,
    userId : loggedInVal,
    message: message.value,
    messageId : loggedInVal + "_"+  Date.now(),
    messageType : "text",
    createdDate :  Date.now(),
    profileImageUrl : "https://apistest.tradetipsapp.com/api/appUser/getImageByAppUserId?appUserId="+loggedInVal,
    messageSource : "Web"
    // status: "incomplete"
  };

  // alert(JSON.stringify(task));
  return docRefreply
    .add(taskreply)
    .then((refs) => {
      taskreply.id = refs.id;
      // fullName.value = '';
      message.value  = '';
      // date.value = '';
      // return createTask(task);
    });

   }else{
   // alert("Message not empty");
    $(".successmsg").html('<span>Message not empty.</span>');
   }    
 
}


window.addEventListener("load", function() {
  var url_string = window.location.href; 
  var urls = new URL(url_string);
var uniqueDocId = urls.searchParams.get("messageId");
const docRef = db.collection("/openGroups/demoOpenGroup1/messages/"+uniqueDocId+"/replies/");
// const tasksDOM = document.getElementById("tasks");
const tasksDOMReply = document.getElementById("tasksreply");
var fullName   = document.getElementById('user_nickname');
var userId     = document.getElementById('user_id');
var hiddenId   = document.getElementById('hiddenId');


var date = document.getElementById('dateval');
// utility functions



$('i.fa.fa-paperclip.attachment.btn.btn-primary').click(function () {
  //alert("calll");
  $("input[type='file']").trigger('click');
  //alert("data");
});

 
   

$("input[type='file']").on('change', function(e) {
  var val = $(this).val();
 // alert(val);
  // $(this).siblings('span').text(val);
  // $('#btn-input').text(val);

  $(this).siblings('input#btn-input').text(val);

  const file = e.target.files[0];
  console.log(file);
  console.log(file.type);

  var loggedInVal = user_id.value;
   var loggedInName = user_nickname.value;
  // alert(loggedInName);
 
   if(file.type == "video/mp4" || file.type == "video/webm" || file.type == "video/mov" || file.type == "video/wmv" || file.type == "video/avi" || file.type == "video/avchd" || file.type == "video/mkv"){

    firebase.storage().ref('message_storage_test_env/').child("photo_message_"+loggedInVal+"_"+"_"+Date.now()).put(file).then(function(snapshot) {
      return snapshot.ref.getDownloadURL()
   }).then(url => {
     console.log("Firebase storage image uploaded : ", url);
       
       
  let task = {
    userName: loggedInName,
    userId : loggedInVal,
    message: url,
    messageId : loggedInVal + "_"+ Date.now(),
    messageType : "video",
    createdDate : Date.now(),
    profileImageUrl : "https://apistest.tradetipsapp.com/api/appUser/getImageByAppUserId?appUserId="+loggedInVal,
    // status: "incomplete"
    messageSource : "Web"
  };
  return docRef
    .add(task)
    .then((ref) => {
      console.log(ref.id);
      task.id = ref.id;
      // fullName.value = '';
      // message.value  = '';
      // date.value = '';
      // return createTask(task);
    });


    });

  }else if(file.type == "audio/mpeg" || file.type == "audio/mp3" || file.type == "audio/wav" || file.type == "audio/aac" || file.type == "audio/m4a" || file.type == "audio/flac"){

    firebase.storage().ref('message_storage_test_env/').child("photo_message_"+loggedInVal+"_"+"_"+Date.now()).put(file).then(function(snapshot) {
      return snapshot.ref.getDownloadURL()
   }).then(url => {
     console.log("Firebase storage image uploaded : ", url);
       
       
  let task = {
    userName: loggedInName,
    userId : loggedInVal,
    message: url,
    messageId : loggedInVal + "_"+ Date.now(),
    messageType : "audio",
    createdDate : Date.now(),
    profileImageUrl : "https://apistest.tradetipsapp.com/api/appUser/getImageByAppUserId?appUserId="+loggedInVal,
    // status: "incomplete"
    messageSource : "Web"
  };
  return docRef
    .add(task)
    .then((ref) => {
      console.log(ref.id);
      task.id = ref.id;
      // fullName.value = '';
      // message.value  = '';
      // date.value = '';
      // return createTask(task);
    });


    });

  }  else if(file.type == "application/doc" || file.type == "application/docx" || file.type == "application/html" || file.type == "application/odt" || file.type == "application/pdf" || file.type == "application/ppt" || file.type == "application/txt" || file.type == "application/ms-doc" || file.type == "application/msword"){


    firebase.storage().ref('message_storage_test_env/').child("photo_message_"+loggedInVal+"_"+"_"+Date.now()).put(file).then(function(snapshot) {
      return snapshot.ref.getDownloadURL()
   }).then(url => {
     console.log("Firebase storage image uploaded : ", url);
       
       
  let task = {
    userName: loggedInName,
    userId : loggedInVal,
    message: url,
    messageId : loggedInVal + "_"+ Date.now(),
    messageType : "document",
    createdDate : Date.now(),
    profileImageUrl : "https://apistest.tradetipsapp.com/api/appUser/getImageByAppUserId?appUserId="+loggedInVal,
    // status: "incomplete"
    messageSource : "Web"
  };
  return docRef
    .add(task)
    .then((ref) => {
      console.log(ref.id);
      task.id = ref.id;
      // fullName.value = '';
      message.value  = '';
      // date.value = '';
      // return createTask(task);
    });


    });

  } else {


    firebase.storage().ref('message_storage_test_env/').child("photo_message_"+loggedInVal+"_"+"_"+Date.now()).put(file).then(function(snapshot) {
      return snapshot.ref.getDownloadURL()
   }).then(url => {
     console.log("Firebase storage image uploaded : ", url);
       
       
  let task = {
    userName: loggedInName,
    userId : loggedInVal,
    message: url,
    messageId : loggedInVal + "_"+ Date.now(),
    messageType : "photo",
    createdDate : Date.now(),
    profileImageUrl : "https://apistest.tradetipsapp.com/api/appUser/getImageByAppUserId?appUserId="+loggedInVal,
    // status: "incomplete"
    messageSource : "Web"
  };
  return docRef
    .add(task)
    .then((ref) => {
      console.log(ref.id);
      task.id = ref.id;
      // fullName.value = '';
      // message.value  = '';
      // date.value = '';
      // return createTask(task);
    });


    });

  }
// return firebase
//     .app()
//     .storage()
//     .ref('message_images')
//     .child(file.name)
//     .put(file)
//     // .then(snapshot => {
//     //   // snapshot represents the uploaded file
//     //   console.log(snapshot);
//     // })
//     .getDownloadURL()
//     .then(imgUrl => {
//       console.log(imgUrl);
//     });

// var remoteimageurl = e.target.files[0]
// var filename = file.name

// fetch(remoteimageurl).then(res => {
//   return res.blob();
// }).then(blob => {
//     //uploading blob to firebase storage
//   firebase.storage().ref('message_storage_test_env/').child(filename).put(blob).then(function(snapshot) {
//     return snapshot.ref.getDownloadURL()
//  }).then(url => {
//    console.log("Firebase storage image uploaded : ", url);
//   })
// }).catch(error => {
//   console.error(error);
// });


 
});

// Firebase functions


 fetchTasksReply();


 function fetchTasksReply(id , userid , userName , messageId) {

    var docId     = uniqueDocId;
      const docRefreply = db.collection("/openGroups/demoOpenGroup1/messages/"+docId+"/replies/");
    
     docRefreply.orderBy("createdDate", "asc").onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            console.log(JSON.stringify(change.doc.data()));
            if (change.type === "added") {
              const tasksDOMReply = document.getElementById("tasksreply");
                var taskreply = change.doc.data();
                    var loggedInVal = document.getElementById('user_id').value;
                    var loggedInName = document.getElementById('user_nickname').value;
                    const elemreply = document.createElement("li");
                    elemreply.id = taskreply.messageId;
                    elemreply.innerHTML = reviewTemplateReply(taskreply,loggedInVal,loggedInName);
                    tasksDOMReply.append(elemreply);

                      $('.card-body').scrollTop($('.card-body')[0].scrollHeight);

            }

        });
    });


}


function reviewTemplateReply({profileImageUrl,userName,userId, message,createdDate,messageType,messageId},loggedInVal,loggedInName) {


                const date = new Date(createdDate); //new Date(createdDate).toDateString();
                  //console.log(date);
                var options = {year: "numeric", month: "long", day: "numeric"};
                var newdate = date.toGMTString('en-US', options);  
                  //console.log(newdate);
                const stripped = newdate.replace(/GMT/g, 'EST');
                  //console.log(stripped);
                  // alert(date);
                var newdate1 = stripped.toString(stripped);  
                var newdate2 = newdate1.split(/(\s+)/);
                 newdate2.splice(11, 18);
                 newdate2.splice(0, 2);
                 newdate2.splice(3,3);
                  //console.log(newdate2);
                 function moveArrayItemToNewIndex(arr, old_index, new_index) {
                 if (new_index >= arr.length) {
                      var k = new_index - arr.length + 1;
                      while (k--) {
                          arr.push(undefined);
                      }
                  }
                 arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
                 return arr;
                 };

                moveArrayItemToNewIndex(newdate2, 0, 2);
                var result1 = moveArrayItemToNewIndex(newdate2, 0, 2);
                //console.log(result1);
                result1.splice(1, 0, ' ');
                var newdate3 = result1.toString(result1);
                var result = newdate3.replace(/,/g, "");
                //console.log(result);
                x = result.substring(0, 6) + "," + result.substring(6, result.length);
                //console.log(x);
                function formatAMPM(date) {
                    var hours = date.getHours();
                    var minutes = date.getMinutes();
                    var ampm = hours >= 12 ? 'PM' : 'AM';
                    hours = hours % 12;
                    hours = hours ? hours : 12; // the hour '0' should be '12'
                    minutes = minutes < 10 ? '0'+minutes : minutes;
                    var strTime = hours + ':' + minutes + ' ' + ampm;
                    return strTime;
                  }

                  var date1 = formatAMPM(date);
                  //console.log(date1);
                  //console.log(newdate2);
                  const stripped1 = x.replace(newdate2[4], date1);
                  //console.log(stripped1);
   
   if(loggedInVal == userId){
        if(messageType == "text"){

           return `

            <li class="admin clearfix">
              <span class="chat-img right clearfix mx-2">
                  <img onerror="imgError(this);" src="${profileImageUrl}" alt="Admin" class="img-circle" style="width: 50px;height: 50px;"/>
              </span>
              <div class="chat-body clearfix">
                  <div class="header clearfix">
                      <small class="left text-muted" style = "display:inline-block;"><span class="glyphicon glyphicon-time"></span>${stripped1}</small>
                      <strong class="right primary-font" class='fullName'>${userName}</strong>
                  </div>
                  <p class='message' onClick='copyClipboard(this.id)' id="${createdDate}">
                      <span id='divClipboard${createdDate}'>${message}<span>
                  </p>
              </div>
          </li>
          `

        }else if(messageType == "photo"){

           return `

            <li class="admin clearfix">
              <span class="chat-img right clearfix mx-2">
                  <img onerror="imgError(this);" src="${profileImageUrl}" alt="Admin" class="img-circle" style="width: 50px;height: 50px;"/>
              </span>
              <div class="chat-body clearfix">
                  <div class="header clearfix">
                      <small class="left text-muted"><span class="glyphicon glyphicon-time"></span>${stripped1}</small>
                      <strong class="right primary-font" class='fullName'>${userName}</strong>
                  </div>
                    <p class='message'><img src="${message}" class="img-responsive" style="width:100%;"/></p>
              </div>
          </li>
          `

        }else if(messageType == "video"){

          return `

            <li class="admin clearfix">
              <span class="chat-img right clearfix mx-2">
                  <img onerror="imgError(this);" src="${profileImageUrl}" alt="Admin" class="img-circle" style="width: 50px;height: 50px;"/>
              </span>
              <div class="chat-body clearfix">
                  <div class="header clearfix">
                      <small class="left text-muted"><span class="glyphicon glyphicon-time"></span>${stripped1}</small>
                      <strong class="right primary-font" class='fullName'>${userName}</strong>
                  </div>
                 <p class='message'><video controls style="width:100%;"><source src="${message}" type="video/mp4"></video></p>
              </div>
          </li>
          `
        } else if(messageType == "document"){

          return `

            <li class="admin clearfix">
              <span class="chat-img right clearfix mx-2">
                  <img onerror="imgError(this);" src="${profileImageUrl}" alt="Admin" class="img-circle" style="width: 50px;height: 50px;"/>
              </span>
              <div class="chat-body clearfix">
                  <div class="header clearfix">
                      <small class="left text-muted"><span class="glyphicon glyphicon-time"></span>${stripped1}</small>
                      <strong class="right primary-font" class='fullName'>${userName}</strong>
                  </div>
                 <p class='message'><a href="${message}" target="_blank">click here to download pdf</a></p>
              </div>
          </li>
          `
        } 
        else {

          return `

            <li class="admin clearfix">
              <span class="chat-img right clearfix mx-2">
                  <img onerror="imgError(this);" src="${profileImageUrl}" alt="Admin" class="img-circle" style="width: 50px;height: 50px;"/>
              </span>
              <div class="chat-body clearfix">
                  <div class="header clearfix">
                      <small class="left text-muted"><span class="glyphicon glyphicon-time"></span>${stripped1}</small>
                      <strong class="right primary-font" class='fullName'>${userName}</strong>
                  </div>
                <p class='message'><audio controls><source src="${message}" type="audio/mpeg"></audio></p>              </div>
          </li>
          `

        }

   }else{

     if(messageType == "text"){


         return `

        <li class="agent clearfix">
          <span class="chat-img left clearfix mx-2">
              <img onerror="imgError(this);" src="${profileImageUrl}" alt="Admin" class="img-circle" style="width: 50px;height: 50px;"/>
          </span>
          <div class="chat-body clearfix agent" style="float:none;background:#77839647;color:#000;">
              <div class="header clearfix">              
                  <small class="right text-muted" style="color: #000"><span class="glyphicon glyphicon-time"></span>${stripped1}</small>
                  <strong class="primary-font" class='fullName' style="color: #000">${userName}</strong>
              </div>
              <p class='message' style="color: #000 !important">
                      <span id="textMessage${createdDate}">${message}<span>
                  </p>
          </div>
      </li>
      `
     } else if(messageType == "video"){

         return `

        <li class="agent clearfix">
          <span class="chat-img left clearfix mx-2">
              <img onerror="imgError(this);" src="${profileImageUrl}" alt="Admin" class="img-circle" style="width: 50px;height: 50px;"/>
          </span>
          <div class="chat-body clearfix agent" style="float:none;background:#77839647;color:#000;">
          
              <div class="header clearfix">
                  <small class="right text-muted" style="color: #000"><span class="glyphicon glyphicon-time"></span>${stripped1}</small>
                  <strong class="primary-font" class='fullName' style="color: #000">${userName}</strong>
              </div>
           
             <p class='message' style="color: #000 !important"><video controls style="width:100%;"><source src="${message}" type="video/mp4"></video></p>

          </div>
      </li>
      `
     }else if(messageType == "photo"){

         return `

        <li class="agent clearfix">
          <span class="chat-img left clearfix mx-2">
              <img onerror="imgError(this);" src="${profileImageUrl}" alt="Admin" class="img-circle" style="width: 50px;height: 50px;"/>
          </span>
          <div class="chat-body clearfix agent" style="float:none;background:#77839647;color:#000;">
              <div class="header clearfix">
                  <small class="right text-muted" style="color: #000"><span class="glyphicon glyphicon-time"></span>${stripped1}</small>
                  <strong class="primary-font" class='fullName' style="color: #000">${userName}</strong>
              </div>
              <p class='message' style="color: #000 !important"><img src="${message}" class="img-responsive" style="width:100%;"/></p>

          </div>
      </li>
      `
     }else if(messageType == "document"){

          return `

            <li class="admin clearfix">
              <span class="chat-img right clearfix mx-2">
                  <img onerror="imgError(this);" src="${profileImageUrl}" alt="Admin" class="img-circle" style="width: 50px;height: 50px;"/>
              </span>
              <div class="chat-body clearfix">
                  <div class="header clearfix">
                      <small class="left text-muted"><span class="glyphicon glyphicon-time"></span>${stripped1}</small>
                      <strong class="right primary-font" class='fullName'>${userName}</strong>
                  </div>
                 <p class='message'><a href="${message}" target="_blank">click here to download pdf</a></p>
              </div>
          </li>
          `
        } else{

         return `

        <li class="agent clearfix">
          <span class="chat-img left clearfix mx-2">
              <img onerror="imgError(this);" src="${profileImageUrl}" alt="Admin" class="img-circle" style="width: 50px;height: 50px;"/>
          </span>
          <div class="chat-body clearfix agent" style="float:none;background:#77839647;color:#000;">
              <div class="header clearfix">
                  <small class="right text-muted" style="color: #000"><span class="glyphicon glyphicon-time"></span>${stripped1}</small>
                  <strong class="primary-font" class='fullName' style="color: #000">${userName}</strong>
              </div>
             
              <p class='message' style="color: #000 !important"><audio controls><source src="${message}" type="audio/mpeg"></audio></p>            

          </div>
      </li>
      `
     }

   }

 
};

function imgError(image) {
    image.onerror = "";
    image.src = "images/userIcon.png";
    return true;
}

});
