<?php
require_once("common_files/header.php");
?>

<?php
$states = $_POST["state"];
$boolean = $_POST["radio"];
$numbers = $_POST["number"];


if(is_numeric($numbers))
{

}
else{
    echo "Error : Enter a valid number";
}


$divCard ="<div class='divcard'>
 <p>State : <strong>$states</strong></p>
 <p>From Karnataka : <strong>$boolean</strong></p>
 <p>Phone Number : <strong>+91$numbers</strong></p>;
 </div>";
 for($i=0; $i<5; $i++)
 {
    echo $divCard;
 }

?>

<?php
require_once("common_files/footer.php");
?>