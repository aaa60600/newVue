<template>
  <div class="Login">
  <meta charset="UTF-8">
   <div class="acclogin">
     <label for="account">帳號：</label>
     <input name="account" type="text" v-model="loginData.account">
     <label for="account">密碼：</label>
     <input name="account" type="text" v-model="loginData.password">
   </div>
    <div class="logBlocks">
      <button class="log" @click="login">登入</button>
      <button class="log" @click="forgetPassword">忘記密碼</button>
   </div>
   <div v-if="loginData.account != ''&& loginData.password !=''">
   </div>
   </div>
</template>
<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
    data() {
       return {
         loginInit:{
           account:'',
           password:'',
         },
         loginData:{}
       }
     },
     created(){
       this.resetInput();
     },
     methods:{
       login(){
      console.log(this.loginData);
      if(this.loginData.account == ''){
        alert('請輸入帳號!');
        return;
      }
      else if(this.loginData.password == ''){
        alert('請輸入密碼!');
        return;
      }
      alert('登入');
    },
    resetInput(){
      this.loginData = JSON.parse(JSON.stringify(this.loginInit));
    },
    forgetPassword(){
      this.$router.push('/resetInput')
    }
  }
}
// ini_set("display_errors", "On");
//    $account = $_POST['account'];
//    $password = $_POST['password'];
//   $select = $connect -> prepare("SELECT account,password FORM member WHERE account = :acc AND password = :pw");
//    $select -> execute(array(':acc' => $account,':pw' => $password));
//    $result = $select -> fetch(PDO::FETCH_ASSOC) ;
//       if ($result['account']==$account&&$result['password']==$password) {
//            session_start();
//            $_SESSION['member'] = $result;
//            header("location:./?error=登入成功");
//       }elseif ($result['password']!=$password||$result['account']!=$account) {
//                   header("location:./?error=帳密錯誤");
//       }elseif ($result['password']!=''||$result['account']!='') {
//                   header("location:./?error=輸入不完全");
//       }
// </script>
<style scoped>
.Login{
  background: url('../assets/login.jpg') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  position: relative;
}
.logBlocks{
 position: absolute;
 bottom: 26%;
 right: 15%;
}
.Login .log{
  background-color: burlywood;
  border-radius: 12px;
  color: aliceblue;
  width: 130px;
  height: 90px;
  font-size: 30px;
  margin-left : 40px;
}
.acclogin{
  position: absolute;
  right: 30%;
  top: 30%;
  width: 120px;
  height: 80px;
  font-size: 30px;
  margin-left : 40px;
}
.acclogin input{
  margin:25px;
  border-radius: 15px;
  height: 30px;
  width: 320px;
  font-size:20px;
}
</style>
