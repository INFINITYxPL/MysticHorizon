<?php
session_start();
?>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/internal-register.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>MysticHorizon</title>
  
	  <!-- Optional JavaScript -->
		<!-- jQuery first, then Popper.js, then Bootstrap JS -->
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	  
	</head>
	
	
	<body>
			
			<header>
			  <div class="container-fluid" style="background-color: #0e0e0e;height: 50px; border-bottom: 5px solid #3891ff;">
				<div style="text-align: center;">
				  <label style="font: 40px BebasNeue;color: #3891ff;">Mystic</label>
				  <label style="font: 40px BebasNeueBook;color: #fff;">Horizon</label>
				</div>
			  </div>
			</header>

			
			<div class="container" style="background-color: #0e0e0e;height: 345px;border-top: 5px solid #3891ff; width: 300px;position: relative;top: 140px;margin: auto;display: block;">

			  <label style="font: 30px BebasNeue;color: #3891ff;position: relative;margin: 10px 0;">Register</label>
			
			<form method="post" action="register.php">
			  <div class="form-group">
				<input class="form-control input rounded-0" id="Username" name="username" placeholder="Username" required="" type="text">

			  </div>
			  <div class="form-group">
				<input class="form-control input rounded-0" id="Password" name="password" placeholder="Password" required="" type="password">
			  </div>

			  <div class="form-group">
				<input class="form-control input rounded-0" id="Email" name="email" placeholder="E-mail" required="" type="email">
			  </div>
			  
			  <div class="form-check">
					<input class="form-check-input" type="checkbox" value="1" required="" id="defaultCheck1" name="tos">
					<label class="form-check-label" for="defaultCheck1"><a href="InternalRegister.php" style="font-family: 'Open Sans',sans-serif;font-size: 12px;color: #3891ff; text-align: center;">Terms & Condition</a></label>
				</div>
				
			   
			  <input type="submit" class="btn btn-primary input rounded-0" value="register" name="register" style="width: 100%;height: 56px;background-color: #3891ff;border: 1px;margin-top: 7px;font: 20px BebasNeue;color:  white; " />
			</form>
				 
				  <a href="index.php" style="font-family: 'Open Sans',sans-serif;font-size: 12px;color: #3891ff; text-align: center;">Already have an account? Sign in</a>
			</div>
			
			
			<footer>
			  <div class="container-fluid" style="background-color: #0e0e0e;height: 48px;border-top: 5px solid #3891ff; position: fixed;bottom: 0px;">
				<section class="copyright">
				  <p style="font: 24px BebasNeue;margin-top: 8px;text-align: center; color: #3891ff;"> ©Mystic Horizon <a style="color: #3891ff !important; padding-left: 30px;" href="#"> Terms &amp; Condition </a> <a style="color: #3891ff !important;padding-left: 30px;" href="#"> Forum </a> <a style="color: #3891ff !important;padding-left: 30px;" href="#"> Support </a></p>
				</section>
			  </div>
			</footer>
	</body>


</html>