<template>
<!-- // 註冊成功 -->
  <div class="success">
    <div class="showTime">{{showSecond}}秒，回到首頁，請重新登入!</div>
    	<img class="image" src="../assets/success.jpg">
  </div>
  
</template>
<script>
export default {
  data(){
    return{
      timeOut:null,
      second: 5,
      showSecond: 5,
    }
  },
  created(){
    this.showTime();
  },
  methods:{
    showTime(){
      if(this.timeOut == null){
        // /success
        this.timeOut = setInterval(() => {
          this.showSecond = this.showSecond -1;
          if(this.showSecond <= 0){
            this.$router.push('/')
          }
        }, 1000)
      }else{
        this.clearTime();
      }
    },
    clearTime(){
      clearInterval(this.timeOut);
      this.timeOut = null;
      this.second = 0;
      this.showSecond = 0;
    }
  },
  destroyed(){
    this.clearTime();
  }
}
</script>

<style scoped>
.success{
  /* background: url('../assets/success.jpg') no-repeat center center fixed; */
  background-size: cover;
  height: 100vh;
  position: relative;
}
.showTime{
  font-size:30px;
  color:orangered;
}
</style>
