<template>
  <div class="forget-pass">
		<div class="forgetBox">
				<img class="image" src="../assets/forget.jpg">
		</div>
		<form class="Box">
			<div class="Box">
				<span class="xiao-require">*</span>
				<label for="username">會員帳號</label>
				<div class="xiao-input">
					<input type="text" id="username" name="username" placeholder="請输入帳號" v-model="loginData.username"/>
					</div>
			</div>
			<div class="Box">
				<span class="xiao-require">*</span>
				<label for="email">會員信箱</label>
				<div class="xiao-input">
					<input type="text" id="email" name="email" placeholder="請输入您註冊的信箱帳號，如：123@gmail.com" v-model="loginData.email" />
					</div>
			</div>
			<div class="submitbox">
				<input id = "submit-button" type="submit" @click="Resetpass" value="發送新密碼">
				</div>
		</form>
	</div>
</template>
<script>
const axios = require("axios");

export default {
  name: 'forget',
  data: () => ({
    loginInit: {
      username: "",
      email: "",
    },
    loginData: [],
  }),
  methods: {
    login() {
	  console.log(this.loginData.username);
	  console.log(this.loginData.email);
      if (this.loginData.username == "") {
        alert("請輸入帳號!");
        return;
      } else if (this.loginData.email == "") {
        alert("請輸入信箱!");
        return;
      }
      axios
        .post(
          "http://10.10.1.130/mapGame/login/checkName",
          JSON.stringify({
            username: this.loginData.username,
            email: this.loginData.email,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(response=> {
          if (response.data.status) {
            alert("成功寄出驗證信!");            
          } else {
            alert("登入失敗!");
          }
          console.log(response.data.username, response.data.status);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    resetInput() {
      this.loginData = JSON.parse(JSON.stringify(this.loginInit));
    },
    loginSuccess() {
      this.$router.push("/change");
    },
    forgetPassword() {
      this.$router.push("/Resetpass");
    },
  },
};
</script>
<style scoped>
.forget-pass{
  font-family: arial,"Microsoft JhengHei","微軟正黑體",sans-serif !important;
  font-size: 20px;
  display: flex;
  align-items: center;
  height: 100vh;
}
.forgetBox{
    display: inline-block;
    vertical-align: middle;
}

.image{
  width: 80%;
  height: auto;
}
.forgetBox{
	margin:25px;
}
.forget-pass input{
  font-family: arial,"Microsoft JhengHei","微軟正黑體",sans-serif !important;
  height: 30px;
  width: 330px;
  font-size:15px;
  margin:15px;
}
.submitbox input{
  font-family: arial,"Microsoft JhengHei","微軟正黑體",sans-serif !important;
  background-color:blueviolet;
  border-radius: 12px;
  color: aliceblue;
  width: 120px;
  height: 80px;
  font-size: 20px;
  margin-left : 30px;
}
.box{
	margin:25px;
}
</style>
