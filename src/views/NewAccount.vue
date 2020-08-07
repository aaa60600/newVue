<template>
<div class="xiao-container">
		<div class="xiao-register-box">
			<div class="xiao-title-box">
				<span>加入會員</span>
			</div>
			<form action="#" method="post">
				<div class="xiao-username-box">
					<span class="xiao-require">*</span>
					<label for="username">會員帳號</label>
					<div class="xiao-username-input">
						<input type="text" id="username" name="username" placeholder="请输入帳號 長度:6-12个字符" />
					</div>
				</div>
 
				<div class="xiao-userPassword-box">
					<span class="xiao-require">*</span>
					<label for="userPassword">會員密碼</label>
					<div class="xiao-userPassword-input">
						<input type="password" id="userPassword" name="userPassword" placeholder="请输入密碼 長度:6-12个字符" />
					</div>
				</div>
 
				<div class="xiao-userRePassword-box">
				<span class="xiao-require">*</span>
						<label for="userRePassword">確認密碼</label>
					<div class="xiao-userRePassword-input">
						<input type="password" id="userRePassword" name="userRePassword" placeholder="请重複輸入密碼" />
					</div>
				</div>
 
				<div class="xiao-userEmail-box">
					<span class="xiao-require">*</span>
					<label for="userEmail">會員信箱</label>
					<div class="xiao-userEmail-input">
						<input type="text" id="userEmail" name="userEmail" placeholder="请输入您的信箱帳號，如：123@gmail.com" />
					</div>
				</div>
				
				<div class="xiao-submit-box">
					<input id = "xiao-submit-button" type="submit" value="加入會員">
				</div>
				
				<div class="xiao-goLogin-box">
					<a href="#" style="text-decoration: none;">已有帳號？去登入</a>
				</div>
			</form>
		</div>
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

</style>