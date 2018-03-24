<?php
session_start();


if (!isset($_SESSION['UserID'])) {

	if (isset($_POST['username'])) {
		
		$login = filter_input(INPUT_POST, 'username');
		$password = filter_input(INPUT_POST, 'password');
		
		//echo $login . " " .$password;
		
		require_once 'includes/database.php';

		$userQuery = $db->prepare('SELECT user_id, password FROM accounts WHERE username = :username');
		$userQuery->bindValue(':username', $login, PDO::PARAM_STR);
		$userQuery->execute();
		
		//echo $userQuery->rowCount();
		
		$user = $userQuery->fetch();
		
		//echo $user['user_id'] . " " . $user['password'];
		
		if ($user && password_verify($password, $user['password'])) {
			$_SESSION['UserID'] = $user['user_id'];
			header('Location: InternalHome.php');
			unset($_SESSION['bad_attempt']);
		} else {
			$_SESSION['bad_attempt'] = true;
			header('Location: index.php');
			exit();
		}
			
	} else {
		
		header('Location: index.php');
		exit();
	}
}

//$usersQuery = $db->query('SELECT * FROM accounts');
//$users = $usersQuery->fetchAll();

//print_r($users);

?>
