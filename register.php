
<!-- Lets Start Fresh -->


<?php


include 'includes/database.php';

//This is an if for if the button is clicked

if(isset($_POST['register']))
{
	//Lets Define some Variables


	$Username = $_POST['username'];
	$Password = $_POST['password'];
	$Email = $_POST['email'];
	$Tos = $_POST['tos'];

	//Before we do anything we need to check if Account already exits!

	//Prepare & Execute Database Query
	$CheckAccount = $db->prepare('SELECT * FROM accounts WHERE username = ? OR email = ?');
	$CheckAccount->execute(array($Username, $Email));

	$Results = $CheckAccount->fetchALL(PDO::FETCH_OBJ);


	//Now Lets verify input feilds are filled!

		if(empty($Username) || empty($Password) || empty($Email) || empty($Tos)){


				//Now there is an Error because the Fields are Empty!


		}  elseif($CheckAccount->rowCount() > 0){
			//Error Account Exists

			echo 'Account Exists';

		}
		elseif(filter_var($Email ,FILTER_VALIDATE_EMAIL)) {

			//Here we will Create the account bc the Email is valid!

			
			//Insert the New Password (Hashed Password)

			$password_hash = password_hash($Password, PASSWORD_DEFAULT);

			//Now Lets Insert the account to the Database.

			$InsertAccount = $db->prepare('INSERT INTO `accounts`(`username`, `password`, `email`) VALUES (?, ?, ?)');
			$InsertAccount->execute(array($Username, $password_hash, $Email));


			//Account INserted


			//echo 'Account Created';
			
			// Get new account userID
			$AccountID = $db->prepare('SELECT * FROM accounts WHERE username = ?');
			$AccountID->execute(array($Username));

	        $results = $AccountID->fetchALL(PDO::FETCH_OBJ);

	        $UserID = $results[0]->user_id;

	        $_SESSION['UserID'] = $UserID;
	        
			header('Location: CompanyChoose.php');
		} else {
			//Email not Valid Error!
			echo 'Email Invalid';
		}

}


?>