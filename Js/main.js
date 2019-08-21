
 /*Lbold italic msatter*/
 function myone(){
    if(document.getElementById("psst").style.fontWeight!="bold"){
        document.getElementById("psst").style.fontWeight="bold" ;} 
        else document.getElementById("psst").style.fontWeight=""
}


function mytwo(){
    if(document.getElementById("psst").style.fontStyle!="italic"){
        document.getElementById("psst").style.fontStyle="italic" ;} 
        else document.getElementById("psst").style.fontStyle=""
}


function mythree(){
    if(document.getElementById("psst").style.textDecoration!="underline"){
        document.getElementById("psst").style.textDecoration="underline" ;} 
        else document.getElementById("psst").style.textDecoration="none"
}

/*lsizez*/

function Size(){
        document.getElementById("psst").style.fontSize=document.getElementById("fs").value;
}

   

/*lboulis*/

function Police(){

        document.getElementById("psst").style.fontFamily=document.getElementById("fp").value;
}      


/*jskweri*/

$("document").ready(function(){
        $(".imgcontainer").hover(function(){
                $(".viewmore").toggle()
        })
})

/*$(document).ready(function(){
$(".tsawer").parent(".divet").hover(function(){
        $(this).find(".btns").toggle();
})
})*/


$(document).ready(function(){
        // console.log($(".ezouz"));
        $(".btns").css("opacity",0);
        $(".divet").hover(function(){
          $(this).css("opacity",0.4);
          $(this).find(".btns").css("opacity",1);
        },function(){
          $(this).css("opacity",1);
          $(this).find(".btns").css("opacity",0);

 });
 });

  // Your web app's Firebase configuration
  var firebaseConfig = {
        apiKey: "AIzaSyDZUIK4rRN4Asp-Bf8uYQCAGceGMwyfHTs",
        authDomain: "firebassech.firebaseapp.com",
        databaseURL: "https://firebassech.firebaseio.com",
        projectId: "firebassech",
        storageBucket: "",
        messagingSenderId: "434094077264",
        appId: "1:434094077264:web:1943ae667ce176ad"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var messagesRef = firebase.database().ref('myDatabase');
function submitForm() {
  event.preventDefault();
  //get values
  var name = document.getElementById('name').value;
  var track = document.getElementById('track').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  saveMessage(name,track,email,phone);//sending data to our database
}

document.getElementById('contactForm').addEventListener('submit', submitForm);

//Save message to fireBase
function saveMessage(name,track,email,phone){
  var newMessageRef = messagesRef.push() ; 
  newMessageRef.set({
      name : name,
      track : track,
      email: email,
      phone : phone, 
  });
}

