<?php
session_start();


if (isset($_SESSION['UserID'])) {
	if (isset($_SESSION['faction_id'])) 
	{
	//$userid =$_SESSION['logged_id'];
	//require_once 'includes/database.php';
	}
}

?>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/CompanyChoose.css">
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


			<!-- INFINITY YOU ARE IDIOT -->
			<div class="container" style="background-color: #0e0e0e;height: 600px;border-top: 5px solid #3891ff; width: 800px;position: relative;top: 30px;margin: auto;display: block;">

			  <div class="container" id="companyMain">

			  	<div class="container btn-mmo" name="btn-mmo">
			  		<h3>Join The Colonial Juggernaut</h3>
			  		<img src="img/faction/bg_character_mmo.jpg" class="company-mmo" alt="MMO"   draggable="false">
			  	</div>
			  	
			  	<div class="container btn-eic" name="btn-eic">
			  		<h3>In Honor And Glory</h3>
			  		<img src="img/faction/bg_character_eic.jpg" class="company-eic" alt="EIC"   draggable="false">
			  	</div>
			  	
			  	<div class="container btn-vru" name="btn-vru">
			  		<h3>Progress Through Knowledge</h3>
			  		<img src="img/faction/bg_character_vru.jpg" class="company-vru" alt="MMO"   draggable="false">
			  	</div>
			  	<div class="container" id="companyText">
			  		<h4 class"title">MARS MINING OPERATIONS</h4>
			  		<div class="container mmo">I'm not going to blow smoke up your tush, so I'll just get straight to the point. We at Mars Mining Operations want you for two reasons: to mine ore and to eradicate all alien scum infecting our galactic sector. Do this successfully and you'll soon be popping rival pilots for thrills and honor!</div>
			  		<!--<h3>2</h3>-->
					<!--<div class="container eic">2</div>-->
			  		<!--<h3>3</h3>-->
					<!--<div class="container vru">3</div>-->
			  	</div>
			  </div>
			
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