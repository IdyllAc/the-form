<?php
$servername = "localhost";
$gender = "gender";
$username = "username";
$date = "date";
$phone = "email";
$pwd = "pwd";
$dbname = "resource_manager";
$port = 8888; // default port for MySQL

// Create connection
$conn = new mysqli("localhost","root", "", resource_manager);

// Check connection
if ($conn->connect_error) {
 die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";


   ini_set('display_errors', 1);
   ini_set('display_startup_errors', 1);
   error_reporting(E_ALL);

?>


// <?php
// $dsn = 'mysql:host=localhost;dbname=database_name;port=3306';
// $username = 'username';
// $password = 'password';

// try {
//     $pdo = new PDO($dsn, $username, $password);
//     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     echo "Connected successfully";
// } catch (PDOException $e) {
//     echo "Connection failed: " . $e->getMessage();
// }


