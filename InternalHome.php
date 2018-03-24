<?php
session_start();



if (isset($_SESSION['UserID'])) {
$userid =$_SESSION['UserID'];
require_once 'includes/database.php';
	
$dataQuery = $db->query("SELECT * FROM accounts WHERE user_id=". $_SESSION['UserID']);
$dataQuery->execute();

$data = $dataQuery->fetch();



}else{
	header('Location: InternalRegister.php');
	exit();
}




//print_r($users);

?>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<link href='https://fonts.googleapis.com/css?family=Ubuntu+Condensed&subset=latin,greek,cyrillic' rel='stylesheet' type='text/css'>
    
    <link href='https://fonts.googleapis.com/css?family=Ubuntu:400,700,500italic&subset=latin,greek,cyrillic' rel='stylesheet' type='text/css'>
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/internal-home.css">
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
				<div class="container-fluid" style="background-color: #0e0e0e;height: 28px; border-bottom: 2px solid #3891ff;">
				
				  	<!-- StartMap -->
						<div class="container-fluid" style="text-align: center;position: relative;display:  block;margin-left: auto;margin-right: auto;top: 8px;width: 800px;height: 18px;">
							<a class="btn btn-primary rounded-0" href="internalMapRevolution.php" target="_blank" role="button" style="width: 90px;background-color: #3891ff;font: 15px Tahoma;color: white;">START</a>
						
							<!-- Stats -->
							<div class="container" style="text-align: left; margin-top: -40px;">
						  	
							  	<label style="font: 12px Tahoma;color: #fff;">UserID:</label>
									<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;"><?php echo $data['user_id']; ?></label>
								<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;">EP:</label>
									<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;"><?php echo $data['experience']; ?></label>
								<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;">Level:</label>
									<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;"><?php echo $data['level']; ?></label>
								<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;">Honor:</label>
									<label style="font: 12px Tahoma;color: #fff;"><?php echo $data['honor']; ?></label>
			
				  			</div>

							<!-- Stats 2 -->
				  			<div class="container" style="text-align: right; margin-top: -28px;">
							
								<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;">C:</label>
									<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;"><?php echo $data['credits']; ?></label>
								<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;">U:</label>
									<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;"><?php echo $data['uridium']; ?></label>
								<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;"><img src="img/icons/gold.gif" class="center" alt="gold" width="14" height="16"draggable="false"> e*gold :</label>
									<label style="padding-left: 2px;font: 12px Tahoma;color: #fff;"><?php echo $data['e_gold']; ?></label>

				  			</div>
						</div>
				</div>


			</header>
			
			<!-- buttons -->
			<div class="container" style="text-align: right;margin-left: auto;margin-right: auto;margin-top: -3px;width: 800px;position:  relative;">
			  		<button class="hbutton">Settings</button>
			  		<button class="hbutton"onclick="window.location.href='http://localhost/logout.php'">Logout</button>
			  	</div>
			  
			<!-- logo -->
			<div class="container-fluid" style="position: absolute; top: 50px;">
				<div style="text-align: center;">
					  <label style="font: 52px BebasNeue;color: #3891ff;">Mystic</label>
					  <label style="font: 52px BebasNeueBook;color: #fff;">Horizon</label>
				</div>
			</div>

			<!-- Main -->	
			<div class="container" style="background-color: #0e0e0e;height: 520px;border-top: 5px solid #3891ff;width: 800px;position: relative;display:  block;top: 130px;">

			  
			<!-- nav -->
			<div class="container" style="text-align: center;position: absolute;display:  block;margin-left: -30px;margin-top: -60px;">
			
				<div class="btn-group" style="">
				  <button class="button" onclick="window.location.href='http://localhost/InternalHome.php'">HOME</button>
				  <button class="button">HANGAR</button>
				  <button class="button">SHOP</button>
				  <button class="button">TRADE</button>
				  <button class="button">SKYLAB</button>
				  <button class="button">CLAN</button>
				  <button class="button">QUESTS</button>
				  <button class="button">GALAXY GATES</button>
				  <button class="button">PREMIUM</button>
				  <button class="button">PILOT SHEET</button>
				</div>
			
			</div>
				
				<!-- News -->
				<div class="container" style="background-color: #3a3a3a;height: 520px;width: 350px;position: relative;top: 0px;right: 225px;margin: auto;display: block;">
					<p style="font-size: 24px;font-family:Agency FB;color: rgb(255, 255, 255);text-align:  center;">NEWSLETTER</p>
					
					<img src="img/news/discordsocial.png" class="center" style="display: block;margin-left: auto;margin-right: auto;width: 301px;margin-top: -22px;" alt="Discord" width="301" height="168"draggable="false">

					<div class="newscroll container">
								<h3 class="bn_headline">Stay on top of the News</h3>
							<br />
								<div class="bn_teaser"><b>Follow us on the 'net and get all the background information and more!</b></div>
								<br/>
								<div class="bn_content">Hi Spacepilots!<br /><br />Follow MysticHorizon on all relevant gaming channels to stay on top of the news. Chat with the team, give us your feedback and get all the nitty-gritty about your favorite game.<br /><br />The DarkOrbit team is present on the following channels:
						<ul>
						<li><a href=# target="_blank">Discord live chat</a> - instant contact to the team and your friends</li>
						<li><a href="#" target="_blank">Twitch.tv</a> - regular live streams with the team</li>
						<li><a href="#" target="_blank">Facebook</a> - pix, stories and stuff</li>
						<li><a href="#" target="_blank">YouTube</a> - archives of previous trailers, podcasts and Twitch streams</li>
						<li><a href="#" target="_blank">Forums</a> (for your language forum, click on the "Forum" link at the bottom of the page)</li>
						</ul></div>
							<br/>
							<br/>
							<div class="bn_footer">Join us on your preferred channel to keep up-to-date with the game and all events.</div>
							<br />
					</div>
				</div>
				<!-- PlayerInfo -->
				<div class="container" style="background-color: #252525;height: 258px;width: 225px;position: relative;bottom: 520px;margin: auto;display: block;left: 62px;">
					
					<p style="font-size: 24px;font-family:Agency FB;color: rgb(255, 255, 255);text-align:  center;">PILOT INFO</p>
					
					<img src="img/avatars/uid1.png" class="center" style="display: block;margin-left: auto;margin-right: auto;width: 125px;margin-top: -22px;border: 2px solid #fdba2a;" alt="uid1" width="125" height="125" draggable="false">
					
					<label style="font: 24px BebasNeue;color: #fdba2a;text-align:  center;width:  100%;    margin-top: -3px;">PREMIUM</label>
					
					<div style="width: 290px; height: 110px;">
						<table cellpadding="0" cellspacing="0" border="0" style="margin-top: -13px;font-family: Verdana, Arial, sans-serif;color: #fff;font-size: 11px;font-weight: normal;">
							<tbody>
								<tr>
									<td style="">League:</td>
									<td style="color: #ffd800;padding-left: 1px;">Legendary Gold Master</td>
								</tr>
								<tr>
									<td style="">Rank:</td>
									<td style="padding-left: 1px;">Administrator</td>
								</tr>
								<tr>
									<td style="">Title:</td>
									<td style="color: #ffe346;padding-left: 1px;">MYSTIC HORIZON LORD</td>
								</tr>
								<tr>
									<td style="">Company:</td>
									<td style="color: #1588fe;padding-left: 1px;">Earth</td>
								</tr>
								<tr>
									<td style="">Elite Points:</td>
									<td style="padding-left: 1px;">124.353.531</td>
								</tr>
							</tbody>
						</table>
					</div>

					
					
				</div>
				<!-- rank -->
				<div class="container" style="background-color: #252525;height: 262px;width: 225px;position: relative;border-top: 3px solid #585858;bottom: 520px;margin: auto;left: 62px;">
				
				<label style="font: 18px BebasNeue;color: #fff;text-align:  center;width:  100%;    margin-top: -3px;">Gold League Top3</label>
				
					<table class="tg">
					  <tr>
						<th class="tg-7f5c">NR</th>
						<th class="tg-7f5c">NAME</th>
						<th class="tg-7f5c">RANK</th>
						<th class="tg-7f5c">LP</th>
					  </tr>
					  <tr>
						<td class="tg-7f5c">1</td>
						<td class="tg-7f5c">INFINITY</td>
						<td class="tg-7f5c"></td>
						<td class="tg-05x3">258970</td>
					  </tr>
					  <tr>
						<td class="tg-7f5c">2</td>
						<td class="tg-7f5c">Anonymous</td>
						<td class="tg-7f5c"></td>
						<td class="tg-05x3">54346</td>
					  </tr>
					  <tr>
						<td class="tg-7f5c">3</td>
						<td class="tg-7f5c">test</td>
						<td class="tg-7f5c"></td>
						<td class="tg-05x3">25000</td>
					  </tr>
					</table>
				
				
				
				
				</div>
				
				<!-- ship -->
				<div class="container" style="background-color: #3a3a3a;height: 258px;width: 225px;position: relative;bottom: 1040px;left: 287px;">
					<div class="preview" style="margin-top: 190px;position: absolute;display: inline;margin-left: 5px;">
						<img src="img/ranks/<?php echo $data['rank']; ?>.png" class="center" style="margin-left: -15px;width: 16px;position: absolute;left: 30px;top: 4px;" alt="21" width="16" height="16" draggable="false">
						<div style="position: fixed;" class="clan">[TEST]</div>
						<div style="position: fixed;" class="username"><?php echo $data['username']; ?></div>
						<div style="position: fixed;" class="title">MYSTIC HORIZON LORD</div>
						<img src="img/icons/<?php echo $data['faction_id']; ?>.png" class="center" style="margin-left: -15px;width: 12px;position: absolute;left: 165px;top: 4px;" alt="eic" width="12" height="12" draggable="false">
						<img src="img/icons/drones.png" class="center" style="margin-left: -15px;width: 5px;position: absolute;left: 50px;top: 24px;" alt="eic" width="5" height="11" draggable="false">
						<img src="img/icons/iris8.png" class="center" style="margin-left: -15px;width: 38px;position: absolute;left: 57px;top: 25px;" alt="eic" width="38" height="3" draggable="false">
					</div>
					
					<img src="img/ships/ship<?php echo $data['ship_id']; ?>.png" class="center" style="margin-left: -15px;width: 199px;margin-top: 3px;position: absolute;left: 35px;top: 72px;" alt="ship<?php echo $data['ship_id']; ?>" width="199" height="100" draggable="false">
					<img src="img/preview/maps/map1.png" class="center" style="margin-left: -15px;width: 222px;margin-top: 3px;" alt="map1" width="222" height="252" draggable="false">
				  
				</div>
				
				<!-- logbook -->
				<div class="container" style="background-color: #3a3a3a;height: 262px;width: 225px;position: relative;border-top: 3px solid #898989;bottom: 1040px;left: 287px;">

				<label style="font: 18px BebasNeue;color: #fff;text-align:  center;width:  100%;    margin-top: -3px;">Log Book</label>
				<div class="logbook container">
					<div class="log">
					<div class="date">2018-01-25 09:38:45:</div>
					<div class="action">You have destroyed -=[ Devolarium ]=-.</div>
					<div class="action">You received 51,200 credits.</div>
					<div class="action">You received 16 uridium.</div>
					<div class="action">You received 6,400 ep.</div>
					<div class="action">You received 32 honor.</div>
					</div><br>
					<div class="log">
					<div class="date">2018-01-25 09:38:45:</div>
					<div class="action">You have destroyed -=[ Devolarium ]=-.</div>
					<div class="action">You received 51,200 credits.</div>
					<div class="action">You received 16 uridium.</div>
					<div class="action">You received 6,400 ep.</div>
					<div class="action">You received 32 honor.</div>
					</div><br>
					<div class="log">
					<div class="date">2018-01-25 09:38:45:</div>
					<div class="action">You have destroyed -=[ Devolarium ]=-.</div>
					<div class="action">You received 51,200 credits.</div>
					<div class="action">You received 16 uridium.</div>
					<div class="action">You received 6,400 ep.</div>
					<div class="action">You received 32 honor.</div>
					</div><br>
					<div class="log">
					<div class="date">2018-01-25 09:38:45:</div>
					<div class="action">You have destroyed -=[ Devolarium ]=-.</div>
					<div class="action">You received 51,200 credits.</div>
					<div class="action">You received 16 uridium.</div>
					<div class="action">You received 6,400 ep.</div>
					<div class="action">You received 32 honor.</div>
					</div><br>
				</div>
				  
				</div>
			
			</div>		
			
			<footer>
			  <div class="container-fluid" style="background-color: #0e0e0e;height: 35px;border-top: 2px solid #3891ff; position: fixed;bottom: 0px;">
				<section class="copyright">
				  <p style="font: 20px BebasNeue;margin-top: 4px;text-align: center; color: #3891ff;"> ©Mystic Horizon <a style="color: #3891ff !important; padding-left: 30px;" href="#"> Terms &amp; Condition </a> <a style="color: #3891ff !important;padding-left: 30px;" href="#"> Forum </a> <a style="color: #3891ff !important;padding-left: 30px;" href="#"> Support </a></p>
				</section>
			  </div>
			</footer>
	</body>


</html>