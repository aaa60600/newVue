<template>
  <div class="NewAccount">

   <div class="newaccount">
     <label for="newaccount">建立帳號：</label>
     <input name="newaccount" type="text" v-model="accountData.newaccount">
     <label for="newpassword">密碼：</label>
     <input name="newpassword" type="text" v-model="accountData.newpassword">
     <label for="newemail">信箱：</label>
     <input name="newemail" type="text" v-model="accountData.newemail">
   </div>
    <div class="logaccount">
      <button class="logaccount" @click="resetInput">加入會員</button>
   </div>
   <div v-if="accountData.account != ''&& accountData.password !=''">
     <p>帳號 ： {{accountData.account}}</p>
     <p>密碼 ： {{accountData.password}}</p>
   </div>
   </div>
</template>
<script>

export default {
  name: 'NewAccount',
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
     created(){
       this.resetInput();
     },
     methods:{
    resetInput(){
      this.accountData = JSON.parse(JSON.stringify(this.accountDataInit));
    }
  }
}
</script>
</script>
<style scoped>
.NewAccount{
  background: url('../assets/account.jpg'); 
  background-size: cover;
  min-height: 700px;
  padding-top: 10%;
  position: relative;
}
</style>