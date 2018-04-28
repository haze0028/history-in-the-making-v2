<?php 
	if(isset($_POST['submit'])){
			$name=$_POST['yourname'];
			$email=$_POST['email'];
			$subject=$_POST['subject'];
			$message=$_POST['message'];
			$adminSite="haze9greg@gmail.com";
			$headers="Reply-to: $email";
			mail($adminSite, $subject, $message, "From: ". $name);
			header('location:../contact-us.html');
		};

?>