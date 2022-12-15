<?php
require_once("common_files/header.php");
?>
<form action="ascending&decendingNumber_validation.php" method="POST">
    <label for="nu1">Number 1</label><br>
    <input type="number" id="num1" name="num1" ><br>
    <label for="nu2">Number 2</label><br>
    <input type="number" id="num2" name="num2" ><br>
    <label for="nu3">Number 3</label><br>
    <input type="number" id="num3" name="num3" ><br>
    <label for="nu1">Number 4</label><br>
    <input type="number" id="num4" name="num4" ><br>
    <label for="nu1">Number 5</label><br>
    <input type="number" id="num5" name="num5" ><br>
    <input type="submit" value="Submit">
</form>
<?php
require_once("common_files/footer.php");
?>