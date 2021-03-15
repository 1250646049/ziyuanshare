<template>


<div class="free">
<el-row>

    <el-col :span="20" :offset="2" class="freeItem">
        <Items @showBig="onShow" v-for="item in 12" :key="item"></Items>
    </el-col>
</el-row>
<BigItem :show="isshow" @showBig="onShow"/>

</div>


</template>




<script>
import BigItem from "../pages/bigCard"
import Items from "./freeItem"
import { ref } from "vue"
export default {
components:{
    Items,
    BigItem
},


setup(){
    const isshow=ref(false)
    
  const onShow=(data)=>{
      const {show}=data;
      console.log(show);
      isshow.value=show;
  }



return {
    onShow,
    isshow
}

}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.el-col
    display flex
    flex-wrap wrap

</style>