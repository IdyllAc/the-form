var nameError = document.getElementById('name-error')
var firstnameError = document.getElementById('firstname-error')
var dateError = document.getElementById('date-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
// var cemailError = document.getElementById('cemail-error')
var pwError = document.getElementById('pw-error')
// var cpwError = document.getElementById('cpassword-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateGender() {
  var gender = document.getElementById('regist_gender').value;
  if (gender.length == 0) {
    
  }
}

function validateName(){
    var name = document.getElementById('regist_name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}


function validatefirstName(){
    var firstname = document.getElementById('regist_firstname').value;
    if (firstname.length == 0) {
        firstnameError.innerHTML = 'First name is required';
        return false;
    }
    if (!firstname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        firstnameError.innerHTML = 'Write first name';
        return false;
    }
    firstnameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}


function validateDate(){
    var date = document.getElementById('regist_date').value;
    if (date.length == 0) {
        dateError.innerHTML = 'Date of birth is required';
        return false;
    }
    if (date.length !== dd/mm/yyyy) {
        dateError.innerHTML = 'Date should be dd/mm/yyyy';
        return false;
    }
    if (!dateError.match(/^[0-9]{10}$/)) {
        dateError.innerHTML = 'Only digits and slashes please.';
        return false;
    }
    dateError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}


function validatePhone(){
    var phone = document.getElementById('regist_phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone nomber is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone nomber should be 10 digits';
        return false;
    }
    if (!phoneError.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits allowed please.';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateMail(){
    var email = document.getElementById('regist_email').value;
    if (email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email invalid'
        return false;
    }
        emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
}
// function validateCmail(){
//     var cemail = document.getElementById('regist_cemail').value;
//     if (cemail.length == 0){
//     cemailError.innerHTML = 'Email match is invalide'
//         return false;
//     }
//     if (!cemail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//     cemailError.innerHTML = 'Email invalid'
//         return false;
//     }
//     cemailError.innerHTML = '<i class="fa-solid fa-check"></i>';
//     return true;
// }


function validatePw() {
  var password = document.getElementById('regist_password').ariaValueMax;
  if (pw.length == 0) {
    pwError.innerHTML = 'Password match is incorrect'
    return false;
  }
  pwError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true
}

// function validateCpassword() {
//   var cpw = document.getElementById('regist_cpassword').ariaValueMax;
//   if (cpw.length == 0) {
//     cpwError.innerHTML = 'Password match is incorrect'
//     return false;
//   }
//   cpwError.innerHTML = '<i class="fa-solid fa-check"></i>';
//   return true
// }


 function validateMessage() {
    var message = document.getElementById('regist_message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
    messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
 }


 function validateForm(){
    if (!validateName() || !validatefirstName() || !validateDate() || !validatePhone() || !validateMail() || !validatePassword() ||  !validateMessage()) {
    submitError.style.display = 'block'
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function () { submitError.style.display = 'none';}, 3000);
    return false;
    }
 }



// // ________________________
// // ________________________

// // // Sur la ligne suivante, vous devez inclure les préfixes des implémentations que vous souhaitez tester.
// // window.indexedDB =
// //   window.indexedDB || 
// //   window.mozIndexedDB ||
// //   window.webkitIndexedDB ||
// //   window.msIndexedDB;
// // // N'UTILISEZ PAS "var indexedDB = ..." si vous n'êtes pas dans une fonction.
// // // De plus, vous pourriez avoir besoin de réferences à des objets window.IDB*:
// // window.IDBTransaction =
// //   window.IDBTransaction ||
// //   window.webkitIDBTransaction ||
// //   window.msIDBTransaction;
// // window.IDBKeyRange =
// //   window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// // // (Mozilla n'a jamais préfixé ces objets, donc nous n'avons pas besoin de window.mozIDB*)


// // if (!window.indexedDB) {
// //   window.alert(
// //     "Votre navigateur ne supporte pas une version stable d'IndexedDB. Quelques fonctionnalités ne seront pas disponibles.",
// //   );
// // }



//  // Ouvrons notre première base
// //  var request = window.indexedDB.open("MyTestDatabase", 3);
 

// // request.onerror = function (event) {
// //   // Faire quelque chose avec request.errorCode !
// // };
// // request.onsuccess = function (event) {
// //   // Faire quelque chose avec request.result !
// // };



// // let db;

// // // Let us open our database
// // const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// // // these event handlers act on the database being opened.
// // DBOpenRequest.onerror = (event) => {
// //   note.innerHTML += "<li>Error loading database.</li>";
// // };

// // DBOpenRequest.onsuccess = (event) => {
// //   note.innerHTML += "<li>Database initialized.</li>";

// //   // store the result of opening the database in the db
// //   // variable. This is used a lot below
// //   db = DBOpenRequest.result;

// //   // Run the displayData() function to populate the task
// //   // list with all the to-do list data already in the IDB
// //   displayData();
// // };

// // // This event handles the event whereby a new version of
// // // the database needs to be created Either one has not
// // // been created before, or a new version number has been
// // // submitted via the window.indexedDB.open line above
// // // it is only implemented in recent browsers
// // DBOpenRequest.onupgradeneeded = (event) => {
// //   const db = event.target.result;

// //   db.onerror = (event) => {
// //     note.innerHTML += "<li>Error loading database.</li>";
// //   };

// //   // Create an objectStore for this database
// //   const objectStore = db.createObjectStore("toDoList", {
// //     keyPath: "taskTitle",
// //   });

// //   define what data items the objectStore will contain

// //   objectStore.createIndex("hours", "hours", { unique: false });
// //   objectStore.createIndex("minutes", "minutes", { unique: false });
// //   objectStore.createIndex("day", "day", { unique: false });
// //   objectStore.createIndex("month", "month", { unique: false });
// //   objectStore.createIndex("year", "year", { unique: false });
// //   objectStore.createIndex("notified", "notified", { unique: false });
// // };



// // var db;
// // var request = indexedDB.open("MyTestDatabase");
// // request.onerror = function (event) {
// //   alert("Pourquoi ne permettez-vous pas à ma web app d'utiliser IndexedDB?!");
// // };
// // request.onsuccess = function (event) {
// //   db = event.target.result;
// // };


// // db.onerror = function (event) {
// //   // Gestionnaire d'erreur générique pour toutes les erreurs de requêtes de cette base
// //   alert("Database error: " + event.target.errorCode);
// // };


// // // Cet évènement est seulement implémenté dans des navigateurs récents
// // request.onupgradeneeded = function (event) {
// //   var db = event.target.result;

// //   // Crée un objet de stockage pour cette base de données
// //   var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
// // };


// // // Voici à quoi ressemblent nos données client.
// // const customerData = [
// //   { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
// //   { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
// // ];


// // const dbName = "the_name";

// // var request = indexedDB.open(dbName, 2);

// // request.onerror = function (event) {
// //   // Gestion des erreurs.
// // };
// // request.onupgradeneeded = function (event) {
// //   var db = event.target.result;

// //   // Créer un objet de stockage qui contient les informations de nos clients.
// //   // Nous allons utiliser "ssn" en tant que clé parce qu'il est garanti d'être
// //   // unique - du moins, c'est ce qu'on en disait au lancement.
// //   var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

// //   // Créer un index pour rechercher les clients par leur nom. Nous pourrions
// //   // avoir des doublons (homonymes), alors on n'utilise pas d'index unique.
// //   objectStore.createIndex("name", "name", { unique: false });

// //   // Créer un index pour rechercher les clients par leur adresse courriel. Nous voulons nous
// //   // assurer que deux clients n'auront pas la même, donc nous utilisons un index unique.
// //   objectStore.createIndex("email", "email", { unique: true });

// //   // Utiliser la transaction "oncomplete" pour être sûr que la création de l'objet de stockage
// //   // est terminée avant d'ajouter des données dedans.
// //   objectStore.transaction.oncomplete = function (event) {
// //     // Stocker les valeurs dans le nouvel objet de stockage.
// //     var customerObjectStore = db
// //       .transaction("customers", "readwrite")
// //       .objectStore("customers");
// //     for (var i in customerData) {
// //       customerObjectStore.add(customerData[i]);
// //     }
// //   };
// // };
// ________________

// // var connection = indexedDB.open('notes', 1);

// // connection.onsuccess = (e) => {
// //     var database = e.target.result;
// //     var transaction = database.transaction(['notes']);
// //     var objectStore = transaction.objectStore('notes');
// //     var index = objectStore.index('title');
// //     var request = index.get("Chrome");
// //     request.onsuccess = (e) => {
// //         console.info = (e.target.result);
// //     };
// //     request.onerror = (e) => {
// //         console.error(e.target.result);
// //     };
// // };


// // // Ouverture d'indexedDB.
// // var request = indexedDB.open(dbName, 3);

// // request.onupgradeneeded = function (event) {
// //   var db = event.target.result;

// //   // Création d'un autre objet appelé "names" avec l'option autoIncrement définie à true.
// //   var objStore = db.createObjectStore("names", { autoIncrement: true });

// //   // Puisque l'objet "names" a un générateur de clés, la clé pour la valeur name est générée automatiquement.
// //   // Les enregistrements ajoutés ressembleront à ceci :
// //   // key : 1 => value : "Bill"
// //   // key : 2 => value : "Donna"
// //   for (var i in customerData) {
// //     objStore.add(customerData[i].name);
// //   }
// // };



// // var transaction = db.transaction(["customers"], "readwrite");
// // // Note: Les anciennes implémentations utilisent la constante dépréciée IDBTransaction.READ_WRITE au lieu de "readwrite".
// // // Au cas où vous souhaitiez mettre en oeuvre ces implémentations, vous pouvez écrire :
// // // var transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);




// // // Faire quelque chose lorsque toutes les données sont ajoutées à la base de données.
// // transaction.oncomplete = function (event) {
// //   alert("All done!");
// // };

// // transaction.onerror = function (event) {
// //   // N'oubliez pas de gérer les erreurs !
// // };

// // var objectStore = transaction.objectStore("customers");
// // for (var i in customerData) {
// //   var request = objectStore.add(customerData[i]);
// //   request.onsuccess = function (event) {
// //     // event.target.result == customerData[i].ssn;
// //   };
// // }



// // // Delete data from database
// // var request = db
// //   .transaction(["customers"], "readwrite")
// //   .objectStore("customers")
// //   .delete("444-44-4444");
// // request.onsuccess = function (event) {
// //   // c'est supprimé !
// // };




// // // Retrieve data from database
// // var transaction = db.transaction(["customers"]);
// // var objectStore = transaction.objectStore("customers");
// // var request = objectStore.get("444-44-4444");
// // request.onerror = function (event) {
// //   // gestion des erreurs!
// // };
// // request.onsuccess = function (event) {
// //   // Faire quelque chose avec request.result !
// //   alert("Name for SSN 444-44-4444 is " + request.result.name);
// // };



// // // it's about how to Shorten a bit assuming you handle errors at the database
db
// //   .transaction("customers")
// //   .objectStore("customers")
// //   .get("444-44-4444").onsuccess = function (event) {
// //   alert("Name for SSN 444-44-4444 is " + event.target.result.name);
// // };




