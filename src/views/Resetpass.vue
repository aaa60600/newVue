<template>
  <div class="Resetpass">
  <meta charset="UTF-8">
   <div class="reslogin">
        <img src="../assets/resetpassword.jpg" style="width:100%;">
			</div>
     <label for="account">帳號：</label>
     <div class="pass-input">
						<input type="text" id="username" name="username" placeholder="" />
					</div>
     <label for="newpass">設定新密碼：</label>
     <input name="newpass" type="text" v-model="login.password">
     <div class="pass-input">
						<input type="text" id="userPass" name="userPass" placeholder="請输入密碼" />
					</div>
    <div class="resPass">
      <button class="pass" @click="Resetpass">設定完成</button>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.reslogin{

  display: inline-block;
  vertical-align: middle;
}
.newpass{
 position: absolute;
 bottom: 26%;
 right: 15%;
}

</style>