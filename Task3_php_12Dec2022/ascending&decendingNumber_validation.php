<?php
require_once("common_files/header.php");
?>
<?php
$number1 = $_POST['num1'];
$number2 = $_POST['num2'];
$number3 = $_POST['num3'];
$number4 = $_POST['num4'];
$number5 = $_POST['num5'];

echo "<p>First Number : <strong>$number1</strong></p>";
echo "<p>Second Number : <strong>$number2</strong></p>";
echo "<p>Third Number : <strong>$number3</strong></p>";
echo "<p>Fourth Number : <strong>$number4</strong></p>";
echo "<p>Fifth Number : <strong>$number5</strong></p>";

$number = array($number1, $number2, $number3, $number4, $number5);
sort($number);
$numberLength = count($number);
echo "Number in ascending order : ";
for($i=0 ; $i<$numberLength ; $i++)
{
    echo "$number[$i] ";
}
rsort($number);
echo"<br>";
echo "Number in decending order : ";
for($i=0 ; $i<$numberLength ; $i++)
{
    echo "$number[$i] ";
}
?>
<?php 
require_once("common_files/footer.php");
?>