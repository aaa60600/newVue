<template>
  <div class="NewAccount">

   <div class="newaccount">
     <label for="newaccount">建立帳號：</label>
     <input name="newaccount" type="text" v-model="loginAccount.newaccount">
     <label for="newpassword">密碼：</label>
     <input name="newpassword" type="text" v-model="loginAccount.newpassword">
     <label for="newemail">信箱：</label>
     <input name="newemail" type="text" v-model="loginAccount.newemail">
   </div>
    <div class="logaccount">
      <button class="logaccount" @click="resetInput">加入會員</button>
   </div>
   <div v-if="loginData.account != ''&& loginData.password !=''">
     <p>帳號 ： {{loginData.account}}</p>
     <p>密碼 ： {{loginData.password}}</p>
   </div>
   </div>
</template>

<style scoped>
.NewAccount{
  background: url('../assets/account.jpg'); 
  background-size: cover;
  min-height: 700px;
  padding-top: 10%;
  position: relative;
}
</style>