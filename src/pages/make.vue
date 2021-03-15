<template>


<div class="wrap">
    <el-row>
  <el-col :span="20" :offset="2" class="freeItem">
      <!-- 内容 -->

    <div class="content">
      <MakeCard v-for="item in 5" :key="item" @showDetails="onShowDetail" />
    </div>
    
  </el-col>
  <Detail />
</el-row>

</div>


</template>




<script>
import Detail from "./make_detail"
import MakeCard from "../pages/make_card"
import { getCurrentInstance } from "vue"
export default {

components:{
    MakeCard,
    Detail
},

setup(){


const instance=getCurrentInstance();
const onShowDetail=()=>{
 
  const allBus=instance.appContext.config.globalProperties.$allbus
  allBus.emit("alterStates")
}

return {

  onShowDetail
}



}


}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
    margin-top 28px

</style>