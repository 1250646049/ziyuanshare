<template>


<div class="wrap">
<!-- 头部 -->
<Header/>
<MySwiper/>
<div class="free" ref="free">
    <Free/>
</div>

<!-- 筹课 -->
<div class="content" ref="content" v-if="showAnimate" >
    <Make  ></Make>
</div>
<div ref="skeleton" v-else>
<el-skeleton  :rows="5" animated  />
</div>


<!-- 筹课end -->
</div>
<!-- blok -->

<div class="blog" v-if="blogShow">
    <Blog/>
</div>
<div ref="blog" v-else>
    <el-skeleton  :rows="5" animated  />
</div>
<!-- video -->

<div class="video">
    <Video/>
</div>
</template>




<script>
import Header from "../pages/headers"
import Make from "../pages/make"
import Video from "../pages/video/video_tuijian"
import {  nextTick, onMounted, ref,onBeforeUnmount} from "vue"
import MySwiper from "../pages/swiper"
import Free from "../pages/free"
import Blog from "../pages/blog"
export default {
name:"index",
components:{
    Header,
    MySwiper,
    Free,
    Make,
    Blog,
    Video
},
setup() {
const showAnimate=ref(false);
const skeleton=ref(null);
let timer=null;
const blogShow=ref(false)
const blog=ref(null);
const initPage=()=>{   

initData();


}


const initData=()=>{
 const skeletons=skeleton.value 
const skeletonsTop=skeletons.offsetTop;
const blogTop=blog.value.offsetTop
 window.addEventListener("scroll",()=>{
     if(skeletonsTop>=window.pageYOffset){
         showAnimate.value=true;
     }else if(blogTop>=window.pageYOffset){
         blogShow.value=true;
     }



 })
}

onMounted(()=>{
    nextTick(()=>{
        initPage();
    })
})
onBeforeUnmount(()=>{
timer&&clearTimeout(timer);
})
return {

    showAnimate,
    skeleton,
    blogShow,
    blog

}

}


}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>


</style>