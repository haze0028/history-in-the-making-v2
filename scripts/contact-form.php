<?php 

$test = "testicle";	
echo "<h1>".$test."</h1>";
	
	if(isset($_POST['submit'])){
			$name=$_POST['yourname'];
			$email=$_POST['email'];
			$subject=$_POST['subject'];
			$message=$_POST['message'];
			$adminSite="haze9greg@gmail.com";
			$headers="Reply-to: $email";
			mail($adminSite, $subject, $message, "From: ". $name);
			header('location:index.php');
			echo "Your message has been sent";
		};

?>