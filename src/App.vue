<template>


<div class="wrap">
 <router-view></router-view>

</div>


</template>




<script>


export default {


}
</script>


<style lang='stylus' rel='stylesheet/stylus' >
@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");

body 
    background #F4F4F4
    
.el-card__header

    padding 0 !important

.el-drawer
        height 80% !important
ul 
    list-style-type none
.vjs-big-play-button
    left 50% !important
    top 50% !important
    transform translate(-50%,-50%) 

</style>