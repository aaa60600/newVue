<template>
  <div class="Resetpass">
  <meta charset="UTF-8">
   <div class="reslogin">
        <img src="../assets/resetpassword.jpg" style="width:100%;">
			</div>
     <label for="account">帳號：</label>
     <div class="pass-input">
        <input v-model="inputData.account" type="text" id="username" name="username" placeholder="" />
      </div>
     <label for="newpass">設定新密碼：</label>
     <input v-model="inputData.password" name="newpass" type="text">
     <div class="pass-input">
      <input v-model="inputData.newPassword" type="text" id="userPass" name="userPass" placeholder="請输入密碼" />
    </div>
    <div class="resPass">
      <button class="pass" @click="ResetpassHandle">設定完成</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Resetpass',
  data() {
      return {
        resetInput:{
          account:'',
          password:'',
          newPassword:'',
        },
        inputData:{}
      }
    },
  created(){
    this.resetInput();
  },
  methods:{
    resetInput(){
      this.inputData = JSON.parse(JSON.stringify(this.resetInput));
    },
    ResetpassHandle(){
      this.$router.push('/forget')
    }
  }
}
</script>
<style scoped>
.reslogin{

  display: inline-block;
  vertical-align: middle;
}
.newpass{
 position: absolute;
 bottom: 26%;
 right: 15%;
}

</style>
