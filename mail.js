const firebaseConfig = {

    apiKey: "AIzaSyAeMludBbPBXLxdSq5gThV6rffcdTChUOU",

    authDomain: "contactform-3bae0.firebaseapp.com",

    databaseURL: "https://contactform-3bae0-default-rtdb.firebaseio.com",

    projectId: "contactform-3bae0",

    storageBucket: "contactform-3bae0.firebasestorage.app",

    messagingSenderId: "212814608",

    appId: "1:212814608:web:7033e6224198c0ec57b395"

  };

firebase.initializeApp(firebaseConfig);


// reference your database

var contactFormDB = firebase.database().ref('contactForm');

document.getElementById("contactForm").addEventListener('submit',submitForm);


function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgContent = getElementVal('msgContent');

    saveMessages(name, emailid, msgContent);

    //enable alert
    document.querySelector('.alert').style.display = 'block';

    setTimeout(() =>{
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // reset form 
    document.getElementById("contactForm").reset();

}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set(
        { 
            name: name,
            emailid: emailid,
            msgContent:msgContent,
        }    
    )
}


const getElementVal = (id) => {
    return document.getElementById(id).value;
}