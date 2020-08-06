<template>
<!-- 這裡是靜態畫面 -->
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
.NewAccount{
  background: url('../assets/account.jpg'); 
  background-size: cover;
  height: 100vh;
  position: relative;
}
.newaccount{
padding-top: 20%;
}
</style>