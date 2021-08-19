<html> 
 <title>HTML with PHP</title>
 <body>
<?php  
include('database_connection.php');


$query = " SELECT chat_message, AES_DECRYPT(chat_message, 'Encrypt123456')
FROM chat_message";
 $statement = $DB_con->prepare($query);
 $statement->execute();
 $result = $statement->fetchAll();
 foreach($result as $row)
 {
 	?>
<p><?php echo $row[1]; ?></p>
<?php } ?>
 
</body>
 </html>