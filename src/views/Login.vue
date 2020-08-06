<template>
  <div class="Login">

   <div class="acclogin">
     <label for="account">帳號：</label>
     <input name="account" type="text" v-model="loginData.account">
     <label for="account">密碼：</label>
     <input name="account" type="text" v-model="loginData.password">
   </div>
    <div class="logBlocks">
      <button class="log" @click="resetInput">忘記密碼</button>
      <button class="log" @click="login">登入</button>
   </div>
   <div v-if="loginData.account != ''&& loginData.password !=''">
     <p>帳號 ： {{loginData.account}}</p>
     <p>密碼 ： {{loginData.password}}</p>
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
      if(this.loginData.password == ''){
        alert('請輸入密碼!');
        return;
      }
      
      alert('登入');
    },
    resetInput(){
      this.loginData = JSON.parse(JSON.stringify(this.loginInit));
    }
  }
}
</script>
<style scoped>
.Login{
  background: url('../assets/login.jpg') no-repeat center center fixed; 
  background-size: cover;
  min-height: 700px;
  padding-top: 10%;
  position: relative;
}
.logBlocks{
 position: absolute;
 bottom: 250px;
 right: 300px;
}
.Login .log{
  background-color: burlywood;
  border-radius: 12px;
  color: aliceblue;
  width: 140px;
  height: 90px;
  font-size: 30px;
  margin-left : 30px;
}
.acclogin{
  position: absolute;
  right: 400px;
  width: 120px;
  height: 80px;
  font-size: 30px;
  margin-left : 30px;

}
</style>
