<template>
  <div class="home">
    <!--  -->
    <img alt="Vue logo" src="../assets/logo.png">
    <el-button @click="$router.push('/about')">去about</el-button>
    <el-button @click="$router.push('/pageExample')">去pageExample</el-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
