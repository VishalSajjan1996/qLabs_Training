<?php
require_once("common_files/header.php");
?>

<form action="stateCardForm_validation.php" method="POST">
    <label for="state">States In India</label>
    <?php require_once('includes/india_states.php'); ?>
    <label for="">From Karnataka</label>
   
    <input type="radio" name="radio" value="Yes">yes
    <input type="radio" name="radio" value="No">No
    <label for="number">Phone Number</label>
    <input type="text" name="number" id="number" maxlength="10">
   
    <input type="submit" value="Submit">
</form>
<?php
require_once("common_files/footer.php");
?>