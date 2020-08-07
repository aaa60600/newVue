<template>
<div class="forget-pass">	
	<div class="formBox">
					<img src="../assets/forget.jpg">
			</div>		
			<form action="#" method="post" class="forgetBox">
				<div class="box xiao-username-box">
					<span class="xiao-require">*</span>
					<label for="username">會員帳號</label>
					<div class="xiao-input">
						<input type="text" id="username" name="username" placeholder="請输入帳號" />
					</div>
				</div>

				<div class="forgetBox">
					<span class="xiao-require">*</span>
					<label for="userEmail">會員信箱</label>
					<div class="xiao-input">
						<input type="text" id="userEmail" name="userEmail" placeholder="請输入您註冊的信箱帳號，如：123@gmail.com" />
					</div>
				</div>

				<div class="box xiao-submit-box">
					<input id = "xiao-submit-button" type="submit" value="發送新密碼">
				</div>

			</form>
		</div>
</template>

<style scoped>
.forget-pass{
    width:50%;
	height:100px;
	display: inline-block;
	max-width: 100px;
}
</style>
