<template>
<!-- // 註冊成功 -->
  <div class="success">
    <div class="showTime">{{showSecond}}秒，回到首頁</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      timeOut:null,
      second: 6,
      showSecond: 6,
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
  background: url('../assets/success.jpg') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  position: relative;
}
.showTime{
  font-size:30px;
  color:whitesmoke;
}
</style>
