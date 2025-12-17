<?php
$sereername = "localhost";
$username = "root";
$password = "";
$dbname = "student_portal";

$con = mysqli_connect("localhost" , "root" , "" , "student_portal");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Result Portal</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="container">
        <h2>🎓 Student Result Portal</h2>
        <form action="index.php" method="post">
            <input type="text" placeholder="Enter Roll Number" name="rollnum" required>
            <br>
            <button type="submit" name="submit">Check Result</button>
        </form>

        <?php
        if(isset($_POST['submit'])){
            $roll_no = $_POST["rollnum"];
            $query = "SELECT * FROM results WHERE roll_no = '$roll_no'";
            $query_run = mysqli_query($con , $query);

            if(mysqli_num_rows($query_run) > 0){
                $row = mysqli_fetch_assoc($query_run);
                echo "<div class='result'>";
                echo "<h2>Student Name: ".$row['student_name']."</h2>";
                echo "<h4>Marks: ".$row['mark']."</h4>";
                echo "<h4>Grade: ".$row['grade']."</h4>";
                echo "<h4>Remarks: ".$row['remark']."</h4>";
                echo "</div>";
            } else {
                echo "<p class='text-danger'>Record not found!</p>";
            }
        }
        ?>
    </div>
</body>
</html>