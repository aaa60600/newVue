<template>
<div class="forget-pass">	
	<div class="formBox">
					<img class="image" src="../assets/forget.jpg">
			</div>		
			<form action="#" method="post" class="forgetBox">
				<div class="username-box">
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

				<div class="submitbox">
					<button class="new" @click="Resetpass">發送新密碼</button>
				</div>

			</form>
		</div>
</template>

<style scoped>
.forget-pass{
    position: relative;
}

.image{
  width: 80%;
  height: auto;
}
.forget-passbox{
	margin:25px;
}
.forget-pass input{
  height: 30px;
  width: 330px;
  font-size:15px;
  margin:15px;
}
.forget-pass button{
  background-color:blueviolet;
  border-radius: 12px;
  color: aliceblue;
  width: 100px;
  height: 50px;
  font-size: 15px;
  margin-left : px;
}
</style>
