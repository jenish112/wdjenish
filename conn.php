<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        .alert-danger {
            color: #721c24;
            font-size: 2rem;
            margin-top: 100px;
            background-color: #f8d7da;
            border-color: #f5c6cb;
            text-align: center;

        }

        .alert-success {
            color: #155724;
            font-size: 2rem;
            margin-top: 100px;
            background-color: #d4edda;
            border-color: #c3e6cb;
            text-align: center;
        }

        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
        }

        .btn {
            padding: .1rem 1rem;
            background-color: #333;
            color: #fff;
            margin-left: 50%;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-top: 1rem;
            font-size: 1.3rem;
            border-radius: 5rem;
        }

        .btn i {
            padding: 0 .5rem;
            font-size: 1.8rem;
        }

        .btn:hover {
            background-color: #f9ca24;
        }

        @media (max-width:991px) {
            .btn{
                margin-left: 50%;   
            }
        }
    </style>
</head>

<?php
if (isset($_POST)) {
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $dbname = 'port';
    $conn = mysqli_connect($host, $user, $pass, $dbname);
    if (!$conn) {
        die('Could not connect: ' . mysqli_connect_error());
    }
    $name = $_POST["name"];
    $email = $_POST["email"];
    $pro = $_POST["pro"];
    $msg = $_POST["msg"];

    if (empty($name)) {
        $errors[] = "Name is required";
    }
    if (empty($email)) {
        $errors[] = "Email is required";
    }
    if (empty($pro)) {
        $errors[] = "Subject is required";
    }
    if (empty($msg)) {
        $errors[] = "Message is required";
    }
    if (!preg_match("/^[a-zA-Z'\s]*$/", $name)) {
        $errors[] = "ONLY ALPHABETS ARE ALLOWED IN NAME!";
    }
    if (strlen($pro) < 1) {
        $errors[] = "YOUR SUBJECT MUST CONSIST OF AT LEAST 4 CHARACTERS";
    }
    if (strlen($msg) < 3) {
        $errors[] = "YOUR MESSAGE is too short!";
    }
    if (!empty($errors)) {
        foreach ($errors as $error) {
?>
            <div class="alert alert-danger">
                <?php echo $error; ?>
            </div>
<?php
        }
    } else {
        $sql = "INSERT INTO `port`(`name`, `email`, `pro`, `msg`) VALUES ('$name','$email','$pro','$msg')";
        if (mysqli_query($conn, $sql)) {
            echo '<div class="alert alert-success"><img src="image/circle-check-solid.svg" height="300">Your message successfully send!</div>';
        } else {
            echo '<div class="alert alert-danger"><img src="image/circle-xmark-solid.svg" height="300">Something Went Wrong. Please try again!</div>';
        }
        mysqli_close($conn);
    }
}
?>

<body>
    <a href="index.html"><button class="btn"> Home</button></a>
</body>

</html>