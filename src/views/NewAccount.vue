<template>
<!-- 這裡是靜態畫面 -->
  <div class="NewAccount">
   <div class="newaccount">
     <label for="newaccount">建立帳號：</label>
     <input name="newaccount" type="text" v-model="accountData.newaccount">
     <label for="newpassword">設定密碼：</label>
     <input name="newpassword" type="text" v-model="accountData.newpassword">
     <label for="newemail">驗證信箱：</label>
     <input name="newemail" type="text" v-model="accountData.newemail">
   </div>
    <div class="LogAccount">
      <button class="logaccount" @click="resetInput">加入會員</button>
   </div>
   <div v-if="accountData.account != ''&& accountData.password !=''">
   </div>
   </div>
</template>
<script>
// 如果要含資料輸入或輸出 就是需要變數
// html上面的 {{...}} v-xx="..." 或者 :class="..." :style="..." 也是屬於動態資料
// 整段script都需要使用
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
<style scoped>
.NewAccount{
  background: url('../assets/account.jpg'); 
  background-size: cover;
  min-height: 700px;
  padding-top: 10%;
  position: relative;
}

</style>