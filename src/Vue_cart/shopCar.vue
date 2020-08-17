<template>
  <div v-loading="loading" class="flexbox">
    <div class="panel">
      <span v-for="item in dataList" :key="item.id" class="panel-price">
        <img :width="200" src="item.imgUrl">
        <div>
          {{item.name}}
        </div>
        <div>
          {{item.price}}
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import api from './../service/user-service'
export default {
  data() {
    return {
      loading:false,
      dataList:[],
    }
  },
  created() {
    this.getDataListNotApi();
  },
  methods: {
    getDataList(){
        this.loading = true;
        api.getUser().then(response => {
          if (response.status == 200) {
            this.dataList = [];
            return;
          }
          this.$message.error("登入異常");          
        })
        .catch(err => {
          console.log(err);
          this.$message.error("系統異常");
        }).finally(() => {
          this.loading = false;
        })
    },
    getDataListNotApi(){
      this.dataList = [
        {
          name:'Monsters',
          price:'123',
          imgUrl:require('../assets/role/monsters2(31).png'),
        },
        {
          name:'Monsters',
          price:'123',
          imgUrl:require('../assets/role/monsters2(53).png'),
        },
        {
          name:'Monsters',
          price:'123',
          imgUrl:require('../assets/role/monsters2(80).png'),
        },
        {
          name:'商品1',
          price:'123',
          imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBl4exyImeXMZkIEG2IdIgImacTQG3ngrT6JcGvBHWIf-u1wBmEgOZrOeBIw&usqp=CAc'
        },
        {
          name:'商品1',
          price:'123',
          imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBl4exyImeXMZkIEG2IdIgImacTQG3ngrT6JcGvBHWIf-u1wBmEgOZrOeBIw&usqp=CAc'
        },
        {
          name:'商品1',
          price:'123',
          imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBl4exyImeXMZkIEG2IdIgImacTQG3ngrT6JcGvBHWIf-u1wBmEgOZrOeBIw&usqp=CAc'
        },
        {
          name:'商品1',
          price:'123',
          imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBl4exyImeXMZkIEG2IdIgImacTQG3ngrT6JcGvBHWIf-u1wBmEgOZrOeBIw&usqp=CAc'
        },
        {
          name:'商品1',
          price:'123',
          imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBl4exyImeXMZkIEG2IdIgImacTQG3ngrT6JcGvBHWIf-u1wBmEgOZrOeBIw&usqp=CAc'
        },
        {
          name:'商品1',
          price:'123',
          imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBl4exyImeXMZkIEG2IdIgImacTQG3ngrT6JcGvBHWIf-u1wBmEgOZrOeBIw&usqp=CAc'
        },
        {
          name:'商品1',
          price:'123',
          imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBl4exyImeXMZkIEG2IdIgImacTQG3ngrT6JcGvBHWIf-u1wBmEgOZrOeBIw&usqp=CAc'
        },
      ];
    }
  },

}
</script>

<style scoped>
  .panel-price {
    width: 210px;
    border: 1px solid cadetblue;
    padding: 10px;
    margin: 5px;
    display: inline-block;
    transition:All 0.5s ease;
    cursor: pointer;
  }
  .panel-price:hover{
      transform:scale(1.2);
  }
  .panel{
    width: 70%;
  }
  .flexbox{
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>