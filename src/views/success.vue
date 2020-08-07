// 註冊成功

<template>
  <div class="success">
  <meta http-equiv="refresh" content="5; url=http://localhost:8080/">
        <el-button @click="$router.push('/')">返回首頁登入</el-button>
  </div>
</template>


<style scoped>
.success{
  background: url('../assets/success.jpg') no-repeat center center fixed; 
  background-size: cover;
  height: 100vh;
  position: relative;
}
</style>
