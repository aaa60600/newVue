<template>
  <div class="home">
    <!--  -->

    <div class="btnBlocks">
    <button class="btn" @click="$router.push('/login')">登入</button>
    <button class="btn" @click="$router.push('/NewAccount')">註冊</button>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
.home{
  background: url('../assets/welcome.jpg') no-repeat center center fixed; 
  background-size: cover;
  height: 100vh;
  position: relative;
}
.btnBlocks{
 position: absolute;
 bottom: 250px;
 right: 300px;
}
.home .btn{
  background-color: hotpink;
  border-radius: 12px;
  color: aliceblue;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 120px;
  height: 80px;
  font-size: 30px;
  margin-left : 30px;
  cursor: pointer;
}

</style>

