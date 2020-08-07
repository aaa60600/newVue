<template>
<div class="xiao-container">			
			<div class="formBox">
					<img src="../assets/account.jpg">
			</div>
			<form action="#" method="post" class="formBox">
				<div class="box xiao-username-box">
					<span class="xiao-require">*</span>
					<label for="username">建立帳號</label>
					<div class="xiao-input">
						<input type="text" id="username" name="username" placeholder="請输入帳號" />
					</div>
				</div>

				<div class="box xiao-userPassword-box">
					<span class="xiao-require">*</span>
					<label for="userPassword">設定密碼</label>
					<div class="xiao-input">
						<input type="password" id="userPassword" name="userPassword" placeholder="請输入密碼" />
					</div>
				</div>

				<div class="box xiao-userEmail-box">
					<span class="xiao-require">*</span>
					<label for="userEmail">驗證信箱</label>
					<div class="xiao-input">
						<input type="text" id="userEmail" name="userEmail" placeholder="請输入您的信箱帳號，如：123@gmail.com" />
					</div>
				</div>

				<div class="box xiao-submit-box">
					<input id = "xiao-submit-button" type="submit" value="加入會員">
				</div>

				<div class="box xiao-goLogin-box">
					<a href="#" style="text-decoration: none;">已有帳號？去登入</a>
				</div>
			</form>
		</div>
</template>

<script>
// 如果要含資料輸入或輸出 就是需要變數
// html上面的 {{...}} v-xx="..." 或者 :class="..." :style="..." 也是屬於動態資料
// 整段script都需要使用
export default {
  name: 'NewAccount',
  //宣告這個檔案裡面所使用到的變數
  data() {
    return {
      accountDataInit:{
        newaccount:'',
        newpassword:'',
        newemail:'',
      },
      accountData:{}
    }
  },
  // 生命週期
  created(){
    this.resetInput();
  },
  // 方法宣告
  methods:{
    // 重製輸入框方法
    resetInput(){
      this.accountData = JSON.parse(JSON.stringify(this.accountDataInit));
    }
  }
}
</script>
<style scoped>

.formBox{
	width:50%;
	height:100px;
	display: inline-block;
}
.xiao-input{
	margin:15px;

}



</style>
