<template>


<div class="wrap">
  <video id="video"   class="video-js " ></video>
    <div class="title animate__animated animate__backInLeft animate__delay-2s " v-show="titleShow">
        <div class="name">
            666666666666
        </div>
        <div class="details">
            aaaaaaaaaaaaaa
        </div>
    </div>
</div>


</template>




<script>

import {nextTick, onMounted,ref} from "vue"
import "video.js/dist/video-js.min.css"
import VideoJs from "video.js"

export default {

setup(){
let Video=null;
const titleShow=ref(true);
const InitData= ()=>{
Video=new VideoJs("video",{
  controls: true,
  preload: "metadata",
  playbackRates: [0.5, 1, 1.5, 2,2.5,3],
  height:"400",
autoplay:false,
 techOrder: ['html5', 'flash'],
sources: [{
type: "application/x-mpegURL", // 类型
src: 'https://douban.donghongzuida.com/20210301/18514_58affef5/index.m3u8' // url地址
}],

},(err)=>{
    if(!err){

        Video.on("playing",()=>{
            titleShow.value=false
        })
        Video.on("pause",()=>{
            titleShow.value=true
        })
    }

})

}


onMounted(()=>{
    nextTick(()=>{
        InitData();

    })
})
return {
    titleShow
}



}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
    position relative
    .title
        position absolute
        bottom 30px
        display flex
        flex-direction column
        .name
        .details
            background blue
            color white 
            padding 6px 12px
            border-top-right-radius 15px
            display inline-block
            border-bottom-right-radius 15px
        .details
            background green
            margin-top 5px
</style>