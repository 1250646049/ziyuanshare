<template>


<div class="wrap  animated bounceInDown">
<el-row class="top">
<el-col :span="22" :offset="1">
    <el-row  class="left"  >
        <el-col :span="1" class="cartgory">
            <span class="more el-icon-s-unfold" @click="showDrop=!showDrop">
             </span>
             <DownSelect :show="showDrop"/>
        </el-col>
         <el-col :span="10" class="listItem">
             <!-- 首页标题 -->
             <span>首页</span><span>下载</span>
        </el-col>
        <!-- logo -->
        <el-col :span="2" >
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTMuNzEgMzgiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy0ye2ZpbGw6IzQwOWVmZjt9LmNscy0xe2ZpbGwtcnVsZTpldmVub2RkO308L3N0eWxlPjwvZGVmcz48dGl0bGU+6LWE5rqQIDE8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxwYXRoIGlkPSJTaGFwZS1Db3B5IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDIsMjYuMTZzLjI4LDAsLjgyLDBhLjcyLjcyLDAsMCwxLC42OS40MXMxLjA4LDIsMS4zNywyLjQ4LDAsLjQyLS4xMi40MWgwcy0uMzEsMC0zLjQ1LDBhNC45Myw0LjkzLDAsMCwxLTQuNTQtNC41NHYtN0gxMzQuM1YxNS4yOGMwLS4zNi40MS0uNDEuNDEtLjQxaDIuMDdWMTIuMjVhLjYuNiwwLDAsMSwuNDEtLjU1bDIuMy0uNjZjLjM0LS4xLjU5LDAsLjU5LjM1VjE1aDMuNThjLjM0LDAsLjQxLjQxLjQxLjQxVjE4aC00djYuMDZjMCwxLjc2LDEuOTMsMi4wNywxLjkzLDIuMDdabS0xMC42LDNoLTIuMmMtLjQzLDAtLjQxLS41NS0uNDEtLjU1VjE4LjQ1YzAtLjYyLS44My0uODMtLjgzLS44M2gtNC41NGMtLjY4LDAtLjY5LjgzLS42OS44M1YyOC43N2EuNDEuNDEsMCwwLDEtLjQxLjQyaC0yLjJjLS40OCwwLS40MS0uNTUtLjQxLS41NVYxNS44M2MwLTEsMS4yNC0xLjI0LDEuMjQtMS4yNGg5LjYzYzEsMCwxLjIzLDEuMjQsMS4yMywxLjI0VjI4LjVjMCwuNzItLjQxLjY5LS40MS42OVpNMTE1LjczLDIzLjRIMTA3LjJ2Mi4wN2MwLC43NCwxLDEsMSwxSDExNWExLjE2LDEuMTYsMCwwLDEsLjgyLjQycy42MSwxLjI1LjgzLDEuNzktLjQxLjU1LS40MS41NUgxMDZjLTEuMjQsMC0xLjUxLTEuNTItMS41MS0xLjUyVjE2YzAtLjY3LDEtMSwxLTFoMTAuMzJjMSwwLDEuMjQsMS4yMywxLjI0LDEuMjN2NS45M2MwLDEtMS4yNCwxLjIzLTEuMjQsMS4yM1ptLTEuNTItNC45NXMtLjA4LS42OS0uNjgtLjY5aC01LjY1cy0uNjguMTgtLjY4LjY5VjIwYS42OS42OSwwLDAsMCwuNjguNjloNS42NWEuOS45LDAsMCwwLC42OC0uODNWMTguNDVaTTEwMS4yOCwyOS4xOWgtMi4yYy0uMjksMC0uNDEtLjQyLS40MS0uNDJWMTguNDVjMC0uNjQtLjgzLS44My0uODMtLjgzSDk1Ljc4Yy0uNTgsMC0uNjkuODMtLjY5LjgzVjI4Ljc3YzAsLjM1LS40MS40Mi0uNDEuNDJoLTIuMmMtLjMxLDAtLjQyLS40Mi0uNDItLjQyVjE4LjQ1YzAtLjY2LS44Mi0uODMtLjgyLS44M0g4OS4xN2MtLjYzLDAtLjY4LjgzLS42OC44M1YyOC43N2EuMzkuMzksMCwwLDEtLjQyLjQyaC0yLjJhLjQxLjQxLDAsMCwxLS40MS0uNDJWMTUuNjljMC0uNzUsMS4xLTEuMSwxLjEtMS4xaDEzLjc2YzEuMSwwLDEuMzcsMS4zOCwxLjM3LDEuMzh2MTIuOGMwLC40OC0uNDEuNDItLjQxLjQyWm0tMjAtNS43OUg3Mi44djIuMDdjMCwuNzQsMSwxLDEsMWg2Ljg4YTEuMTksMS4xOSwwLDAsMSwuODMuNDJzLjYsMS4yNS44MiwxLjc5LS40MS41NS0uNDEuNTVINzEuNTZjLTEuMjQsMC0xLjUxLTEuNTItMS41MS0xLjUyVjE2YzAtLjY3LDEtMSwxLTFIODEuMzNjMSwwLDEuMjQsMS4yMywxLjI0LDEuMjN2NS45M2MwLDEtMS4yNCwxLjIzLTEuMjQsMS4yM1ptLTEuNTEtNC45NXMtLjA5LS42OS0uNjktLjY5SDczLjQ5cy0uNjkuMTgtLjY5LjY5VjIwYS42OS42OSwwLDAsMCwuNjkuNjloNS42NGEuOTEuOTEsMCwwLDAsLjY5LS44M1YxOC40NVpNNjgsMjkuMTlINjIuNzZhNC4zNSw0LjM1LDAsMCwxLTQuMTMtNGMwLTMuOTEsMC0xNi4xLDAtMTYuMWgyLjQ4YS43OS43OSwwLDAsMSwuODIuODJWMjQuMzdBMi41OCwyLjU4LDAsMCwwLDYzLjg2LDI2aDIuMnMuNzItLjIzLDEuMjQuNjlsMS4xLDEuOTNzLjA4LjU1LS40MS41NVptLTI2LjU2LS44M1YxMC4xOWExLDEsMCwwLDEsLjY5LTFINTUuMDVjLjczLDAsLjQyLjgzLjQyLjgzcy0uNDEsMS4xMi0uNjksMS42NWExLDEsMCwwLDEtLjgzLjU1SDQ1LjU2YS43Ny43NywwLDAsMC0uODMuNjl2NC41NGg5LjVjLjU1LDAsLjI3LjY5LjI3LjY5cy0uNzEsMS41Mi0xLDEuOTNhMS4wNSwxLjA1LDAsMCwxLS44My40MWgtOHY0LjgyYS45MS45MSwwLDAsMCwuNjkuODNoOC44MWEuODUuODUsMCwwLDEsLjgyLjQxbDEuMjQsMS45M2MuMzcuNTYtLjE0LjY5LS4xNC42OUg0Mi4yNkM0MS42OCwyOS4xOSw0MS40MywyOC4zNiw0MS40MywyOC4zNlptLTguMTQtMS4xNGMwLDEuNTctLjgzLDEuOTMtLjgzLDEuOTNTMTguMzIsMzcuMzEsMTcuNCwzNy44M2ExLjY4LDEuNjgsMCwwLDEtMS41MiwwUzEuMDksMjkuMjUuNTUsMjguODdhMS4yOSwxLjI5LDAsMCwxLS41NS0xczAtMTcsMC0xNy43OFMxLDguNzYsMSw4Ljc2TDE1Ljc1LjIxYTIsMiwwLDAsMSwxLjc5LDBTMzAuNiw3LjgsMzIsOC42MmEyLjA4LDIuMDgsMCwwLDEsMS4yNSwyLjA2czAsMTUuMDcsMCwxNi41NFptLTUuOS0xN2MtMy0xLjc0LTEwLjE2LTUuODctMTAuMTYtNS44N2ExLjU4LDEuNTgsMCwwLDAtMS40MSwwTDQuMjIsMTFzLS43Ny40Ni0uNzYsMS4wOFMzLjQ2LDI2LDMuNDYsMjZhMSwxLDAsMCwwLC40My43NWMuNDMuMywxMiw3LDEyLDdhMS4zLDEuMywwLDAsMCwxLjE5LDBjLjcyLS40LDExLjgyLTYuNzksMTEuODItNi43OXMuNjUtLjI4LjY1LTEuNTFjMC0uMzYsMC0xLjc0LDAtMy40N0wxNi41MywyOS44OHYtM2EzLDMsMCwwLDEsMS0yLjA3bDExLjU2LTdhMi40OSwyLjQ5LDAsMCwwLC41NS0xLjQ2YzAtMS4yNywwLTIuMzcsMC0zLjA3TDE2LjUzLDIxLjJWMThhMi4xNywyLjE3LDAsMCwxLC44My0xLjc5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1MC4zMiwxMS4yMWgtMi4yNHYtNWMwLS4xMS4xMi0uMjEuMjktLjI0bDEuNDQtLjI2Yy4yNiwwLC41MS4wNy41MS4yNFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDguMDgsOWgyLjI0djUuMTFjMCwuMTEtLjExLjIxLS4yOC4yNWwtMS40NS4yNmMtLjI2LjA1LS41MS0uMDctLjUxLS4yNFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNDUuMDksOWg4LjIyYS40LjQsMCwwLDEsLjQuNHYxLjg1YTAsMCwwLDAsMSwwLDBoLTlhMCwwLDAsMCwxLDAsMFY5LjM2QS40LjQsMCwwLDEsMTQ1LjA5LDlaIi8+PC9nPjwvZz48L3N2Zz4=" alt="">
        </el-col>
        <el-col :span="6" :offset="5" class="search">
            <el-input prefix-icon="el-icon-search" v-model="search" placeholder="请输入检索内容字段"></el-input>
        </el-col>
    </el-row>


</el-col>
</el-row>



</div>


</template>




<script>
import DownSelect from "./downSelect"
import {ref,onMounted} from "vue"

export default {


setup(){
 const search=ref("");
 const showDrop=ref(false);
 onMounted(()=>{

     console.log(666)
 })

 return {
     search,
     DownSelect,
     showDrop

 }


}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap 
   .top 
     
     &>.el-col
        height 70px
        background #FBFBFB
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1) 
        border-radius 15px
        padding 8px 15px
        position fixed
        right 0
        left 0
        z-index 999
        top 0
    .cartgory
        .more 
            font-size 28px

            color #484848 !important
            cursor pointer
            padding 10px
            &:hover
                background #EAEAEA
                border-radius 15px
                
    .listItem
        margin-top 10px
        span 
            margin 15px
            color #484848
            font-size 14px
            font-weight 700
            cursor pointer
            padding 12px
            &:hover
                background #EAEAEA
                border-radius 15px

</style>