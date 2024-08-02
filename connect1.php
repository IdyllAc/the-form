<?php

   //   include("commun/entete.php");

    // if ($_SERVER['REQUEST_METHOD']=='POST'){
       $gender = $_POST["gender"]==1?"Madame" : "Monsieur";
       $name = $_POST["name"];
       $firstname = $_POST["firstname" ]   ;
       $date = $_POST["date"];
       $phone = $_POST["phone"];
       $email = $_POST["email"];
       // $cemail = $_POST ["cemail"] ;
       $pwd = $_POST["pwd"];
       // $cpwd =  $_POST ["cpwd"];
       $textarea = $_POST["textarea"];

       // Database connection

       $conn = new mysqli ('localhost', 'root','', 'resource_manager');
       if ($conn->connect_error){
       die('Connection Failed : '.$conn->connect_error);
       }else{
         $stmt = $conn->prepare("insert into register(gender, name, firstname, date, phone, email, pwd, textarea)values(?, ?, ?, ?, ?, ?, ?, ? )");
         $stmt->bind_param("sssiisss", $gender, $name, $firstname, $date, $phone, $email, $pwd, $textarea);
         $stmt->execute();
          echo "registration successfully...";
         $sql_close();
         $conn_close();
          }
     


//      $request = "INSERT INTO register (regist_gender, regist_name, regist_firstname, regist_date, regist_phone, regist_email, regist_pw, regist_textarea) VALUES 
//       ('".$gender."', '".$name."', '".$firstname."', '".$date."', '".$phone."', '".$email."', '".$pw."', '".$textarea."')";

//      $result=mysqli_query ($conn, $stmt) or die ("Problem with the request") ;
//   }
  ?>

<!-- <script language="javascript" type="text/javascript">
var gender= false; var name=false; var Firstname=false; var date=false; var phone= false; var contact_email=false;
var contact_cemail=false; var pw= false; var cpw=fals; var textarea=false;

 function submit()
  {
  if(gender=true && name=true && firstname=true && date =true && phone=true && email =true cemail=true && 
     pw=true && cpw= true && textarea=true)
  {
    document.getElementById ("message").innerHTML = "Envoi serveur...inscreption success" ;
    document.getElementById("inscription").submit () ;
  }
  else
  {
    document.getElementById ("message").innerHTML = "Le formulaire n'est pas complet" ;
  }
  document.getElementById ("message"). innerHTML += "-" + gender + "-" + name + "-" + first_name + "-" + date + "_" + phone + "_" + email + "_" + password = "_" + textarea
 }
 </script> -->

<!-- //  <script language="javascript" src="js/register.js"></script>
// <div class="div_saut_ligne"></div>

// <div style="float:left; width: 10%; height:40px;"></div>
//  <div style="float:left; width: 80%; height:40px; text-align: center;"> 

// <div id="GTitre">
// <h1>Formulaire d'inscription contrôlé côté Client</h1>
// </div> 

// <div style="float:left; width: 10%; height:40px;"></div>

// <div class="div_saut_ligne" style="height: 60px">
// </div>

// <div style="width:100%; height:auto; text-align: center;">

// <div style="width:800px; display:inline-block;" id="conteneur">
//      <div id="centre"> 
//      <div id="message">  -->


     <?php 
         if (isset ($_POST ["name" ] ) )
         {
              if ($retours==1)
                echo "Vous êtes désormais inscrit(e)";
             else
                echo $gender."-".$name."-".$firstname."-".$date."-".$phone."-".$email."-".$cemail."-".$pw."-".$cpw."-".$textarea ;
         }
             else

                 echo "Tous les champs sont obligatoires" ;
      ?>
      </div>
      
<!-- //  <form id="inscription" name="inscription" method="post" action="index.php">

// <div class="div_input_form">
// <select id="gender" name="gender" onChange="Javascript: if (this.value>0) { gender=true; } else { gender= false; }>
// <option value="0">Gender</option>
// <option value="1">Madame</option>
// <option value="2">Monsieur</option>
// </select>
// </div>
// <div class="div_input_form">
//    <input type="text" name="name" id="name" maxlength="50" class="input_form" value="Your name" onClick="write('Your name')">
// </div>
// <div class="div_input_form">
//    <input type="text" name="first_name" id="first_name" maxlength="50" class="input_form" value='Your first_name' onClick="write('Your first_name')" onClick="write('Your first_name')">
// </div>
// <div class="div_input_form">
//    <input type="text" name="date" id="date" maxlength="50" class="input_form" value="Votre date_n" onClick="write('Votre date_n')">
// </div>
// <div class="div_input_form">
//    <input type="tel" name="phone" id="phone" maxlength="10" class="input_form" value="phone" onClick="write('Votre phone_num')">
// </div>

// <div class="div_input_form">
// <input type="text" name="mail_inscr" Id="mail_inscr" maxlenght="150" class="input_form" value="votre mail" onClick="write('Votre mail')">
// </div>

// <div class="div_iput_form">
// <input type="text" name="cmail_inscr" id="cmail_inscr" maxlength="150" class="input_form" value="votre cmail" onClick="write('Votre cmail')">
// </div>

// <div class="div_input_form">
// Your pass word : enter 5 et 10 caracters<br />
// <input type="password" name="pw_inscr" id="pw_inscr" maxlength="10" class="input_form" value="password" onClick="write('Votre pw')">
// </div>

// <div class="div_input_form">
// Confirm password :<br />
// <input type="password" name="pw_conf" id="cpw_inscr" maxlength="10" class="input_form" value="cpw_inscr" onClick="write('Votre cpw')">
// </div>

// <div class="div_input_form">
// message :<br />
// <input type="textarea" name="textarea" id="textarea" maxlength="50" class="input_form" value="textarea">
// </div>
// <div class="div_input_form">
// <input type="button" name="valid_inscr" id="valid_inscr" class="input_form" value="validation" onclick="enter('Validation form')">
// </div>
// </form>
// </div>
// </div>
// </div>
// <div class="div_saut_ligne" style="height:150px;">
// </div> 
//  <?php
// include ("commun/pied.php");
// ?>  -->