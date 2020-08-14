<template>
  <div class="testHome">
    <div>
      <img src="../assets/login.jpg">
    </div>
    <div class="btnBlocks">
      <div class="acclogin">
        <label for="account">帳號：</label>
        <input name="account" type="text" v-model="loginData.account">
        <label for="account">密碼：</label>
        <input type="password" name="password" v-model="loginData.password">
        <div class="logBlocks">
          <button class="log" @click="login">登入</button>
          <button class="log" @click="forgetPassword">忘記密碼</button>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
const axios = require("axios");

export default {
  name: 'Login',
  data: () => ({
    loginInit: {
      account: "",
      password: "",
    },
    loginData: [],
  }),
  methods: {
    login() {
      console.log(this.loginData);
      if (this.loginData.account == "") {
        alert("請輸入帳號!");
        return;
      } else if (this.loginData.password == "") {
        alert("請輸入密碼!");
        return;
      }
      axios
        .post(
          "http://localhost/mapGame/login/checkLogin",
          JSON.stringify({
            username: this.loginData.account,
            password: this.loginData.password,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(response=> {
          if (response.data.status) {
            alert("登入成功，準備進入遊戲!");
            setTimeout(() => {
            let expireDays = 1000 * 60 * 60 * 24 * 15;
            this.loginSuccess();
            this.$cookie.set("username", response.data.username, expireDays);
            }, 1000);
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
      this.$router.push("/forget");
    },
  },
};
</script>

<style scoped>
.testHome{
  font-family: arial,"Microsoft JhengHei","微軟正黑體",sans-serif !important;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.btnBlocks{
  position: absolute;
  margin: 0px -50px -15px 0px;
  transform: translate3d(500px, -155px, 0px);
}
.logBlocks{
  width: 340px;
}
.acclogin{
  position: absolute;
  right: 400px;
  width: 100px;
  height: 80px;
  font-size: 30px;
  margin-left : 30px;
}

.testHome .log{
  font-family: arial,"Microsoft JhengHei","微軟正黑體",sans-serif !important;
  background-color:orangered;
  border-radius: 12px;
  color:aliceblue;
  width: 120px;
  height: 80px;
  font-size: 20px;
  margin-left : 30px;
}
.acclogin input{
  margin:25px;
  /* border-radius: 15px; */
  height: 30px;
  width: 320px;
  font-size:20px;
}
</style>
