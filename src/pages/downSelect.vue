<template>


<div class="wrap animate__animated animate__bounceInUp"  v-if="show" >
<div class="left">
    <div class="container">

   
    <span
   
     @click="alaterActive(index,'big')"
     v-for="(item,index) in 15" :key="item" :class="{active:bigActive===index?'active':''}">众筹{{item}}</span>
 </div>
</div>
<div class="right">
    <span
    @click="alaterActive(index,'short')"
      v-for="(item,index) in 40" :class="shortActive===index?'active':''" :key="index">类别{{item}}</span>
</div>
</div>

</template>




<script>

import {ref} from "vue"

export default {

props:{
  show:{
      type:Boolean,
      default:false
  }
},

setup(){
const bigActive=ref(0);
const shortActive=ref(0);

// 修改type
const alaterActive=(index,type)=>{
        if(type==='big'){
            bigActive.value=index;
        }else shortActive.value=index;
    
}

// 初始化数据



return {
    bigActive,
    shortActive,
    alaterActive,
    
}


}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
    margin-top 20px
    width 350px
    height 434px
    background transparentify
    border-radius 15px
    position absolute
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    background rgba(241,241,241,.9)
    display flex
    span 
        &.active 
            background #EAEAEA
            border-radius 10px
    .left 
        flex 1
        border-right 1px solid #EAEAEA
        display flex

        flex-direction column
        padding 15px 15px
        overflow-y  auto
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
      
         z-index 998
        }
        .container

            span 
                display block
                text-align center
                font-size 16px
                margin 8px 0
                cursor pointer
                height 30px
                line-height 30px
            

    .right 
        flex 3
        overflow-y auto 
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
     
        }
        span 
            
            margin 10px 0 10px 10px
            display inline-block
            width 40%
            height 30px
            line-height 30px
            text-align center
            cursor pointer

  
</style>