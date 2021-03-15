<template>



<div class="wrap">
    <el-row>
    <el-col :span="22" :offset="1">
            <el-carousel type="card" :interval="4000">
      <el-carousel-item  v-for="item in 4" :key="item">
        <img src="../assets/img/01.jpg" alt="" >
      </el-carousel-item>
    </el-carousel>
</el-col>
</el-row>
</div>




</template>



 
<script>
import {onMounted} from "vue"

// import Swiper from "swiper"

export default {


setup(){

onMounted(()=>{

   
// new Swiper(".swiper-container",{})  

})

}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap 
    margin-top 100px
    margin-bottom 20px
    .el-carousel-item
        img 
            width 100%
            height 100%
</style>