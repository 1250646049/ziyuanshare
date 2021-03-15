<template>
  <div class="tuijian" @mouseenter="onEnter" @mouseleave="onLeave">
    <div class="title">
      <span class="left"
        ><span class="icon el-icon-loading"></span> 博客推荐</span
      >
      <span class="right">
        <span class="one el-icon-arrow-left" @click="onLeft"></span>
        <span class="two el-icon-arrow-right" @click="onRight"></span>
      </span>
    </div>
    <div class="content">
      <div
        class="items"
        
        :style="{
          transform: `translateX(${animated_left}px)`,
          transition: `all ${transtionTime}s`,
        }"
      >
        <Item v-for="item in itemList" :key="item" />
      </div>
    </div>
  </div>
</template>




<script>
import { onMounted, ref } from "vue";
import Item from "./blog_item";
export default {
  components: {
    Item,
  },

  setup() {
    // eslint-disable-next-line no-unused-vars
    const timers = ref(null);
    const animated_left = ref(0);
    const itemList = ref(10);
    const current = ref(0);
    const transtionTime = ref(1);

    // const instance=getCurrentInstance();

    const initPage = () => {
      // const {items}=instance.refs
      !timers.value && clearInterval(timers.value);
      timers.value = setInterval(() => {
        scroll();
      }, 3000);
    };
    const scroll = (type="auto") => {
        
      if (current.value == itemList.value - 7) {

          transtionTime.value = 0;
          
         setTimeout(()=>{animated_left.value = 0;
        current.value = 1;},20)
      }else if(current.value==0 && type==='left'){
        transtionTime.value = 0;
        animated_left.value = -260*(itemList.value-7);
        current.value=itemList.value-7;
      } 
      else {
        transtionTime.value !== 1 && (transtionTime.value = 1);
        let setp=(type==='auto')?-260:+260;
        animated_left.value = animated_left.value+setp;
        type==='auto'&&current.value++;
      }
    };
    const onEnter = () => {
      timers.value && clearInterval(timers.value);
    };
    const onLeave = () => {
      initPage();
    };
    const onLeft = () => {
      current.value=current.value-1;
      
      scroll("left");
    };
    const onRight = () => {

  
      scroll();
    };
    onMounted(() => {
      initPage();
    });

    return {
      animated_left,
      transtionTime,
      itemList,
      onEnter,
      onLeave,
      onLeft,
      onRight,
     
    };
  },
};
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.tuijian {
  width: 100%;

  .title {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 600;
    color: #333;

    .right {
      span {
        font-size: 24px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  .content {
    width: 100%;
    overflow: hidden;
    height: 384px;
    position: relative;

    .items {
      transition: all 1s;
      width: 100%;
      display: flex;
      position: absolute;
    }
  }
}
</style>