<template>
  <div class="home">
    <!--  -->
    <img alt="Vue logo" src="../assets/welcome.jpg">
    <el-button @click="$router.push('/login')">登入</el-button>
    <el-button @click="$router.push('/pageExample')">註冊</el-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
