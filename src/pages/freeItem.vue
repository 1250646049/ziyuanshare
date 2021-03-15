<template>


<div class="item animate_animated animate__bounceIn"  @click="alterShow" >
<el-card v-if="show" shadow="always" class="card" style="border-radius:30px;overflow:hidden;" body-style="padding-top:3px;" >
    <template v-slot:header >
        <div class="headers" >
            <img class="imgs" src="https://v.dsb.ink/img/2021/0303/cbf4336e2a00ad47b22ee96c01835fb2.jpg" alt="" >
        </div>
    </template>
    <div class="contains">
    <div class="content">
        <h2 class="title">
            猫和老鼠 2021
        </h2 >
        <span class="subname">Tom and Jerry</span>
        <div class="tags">
            <span>A级</span>/
            <span>A级</span>/
            <span>A级</span>/
        </div>
    </div>

    <div class="rate">
        6.8
    </div>
    </div>
</el-card>

</div>


</template>




<script>

import {getCurrentInstance, onMounted, ref} from "vue"
export default {


setup(){
    const show=ref(true);
    const instance=getCurrentInstance();
    const allbus=instance.appContext.config.globalProperties.$allbus
    function alterShow(){
        show.value=false;
        instance.emit("showBig",{show:true});
    }
    const initData=()=>{
        
    allbus.on("shows",()=>{
        show.value=true;

    });
    }
    onMounted(()=>{
        initData();



    })

    return {
        show,
        alterShow
    }


}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.item 
    
    transition all .3s
    margin 14px 8px
    width 32%
    .card
        padding 0 !important
        .headers
            height 247px
            background #EADAAD
            text-align center
            padding-top 18px
            box-sizing border-box
            img 
                width 130px
                height 162px
                transform rotate(4deg)
                transition all .3s
                &:hover 
                     transform rotate(0deg)
        .title 
            margin-bottom 5px
        .subname
            margin 6px 0
            display inline-block
            font-size 13px
        .tags 
            margin-left -2px
            margin-top 5px
            font-size 12px

            span 
                margin 0 6px
                font-weight 700
        .contains
            display flex
            justify-content space-between
            .rate
                font-family agency
                font-size 60px
                margin-top 25px
    &:hover 
        transform translateY(-20px)

.el-card__header
    padding 0 !important


</style>