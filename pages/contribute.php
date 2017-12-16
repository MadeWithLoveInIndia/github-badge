<?php
	header("Location: /profile/anand-chowdhary/message");
	include "../database.php";
	include "../header.php";
	getHeader("Contribute", "Contribute");
?>
<main id="content">
	<div class="container pt-4 mt-4 pb-4">
		<div class="row justify-content-center">
			<div class="col-md-6">
				<h2>Contribute</h2>
				<p>You can fill up this form to report any suggestions:</p>
				<form class="mt-4" method="post">
					<div class="form-group">
						<label for="page">Page</label>
						<input type="text" class="form-control" name="page" id="page" placeholder="Enter the page ID or URL" value="<?php echo $_SERVER["HTTP_REFERER"]; ?>" required>
					</div>
					<div class="form-group">
						<label for="suggestion">Password</label>
						<textarea class="form-control" name="suggestion" id="suggestion" placeholder="Enter your suggestions here..." rows="10"></textarea>
					</div>
					<button class="btn btn-primary" type="submit">Log in</button>
				</form>
			</div>
		</div>
	</div>
</main>
<?php getFooter(); ?>