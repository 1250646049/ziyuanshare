<template>

        <el-drawer
            
             v-model="ShowDrawer"
            
             direction="btt"
        >
        <template v-slot:title>
            <div style="text-align:center">
                参加筹课活动 ———— 联系客服 ———— QQ1445221728
             </div>
        </template>
        <el-row>
            <el-col :span="20" :offset="2">
                <div class="advice" >
                    <p>发起人公告：</p>

                    <p>小说版本严厉，推出一款避开版权的小说系统，小说搜索系统，服务器上不保存章节信息。采用程序调用目标站数据。 悟空追书专注于小说搜索。 每人980元，即可拥有此程序，提供各种玄幻小说、奇幻小说、武侠小说、仙侠小说、都市小说、历史小说、军事小说、游戏小说、竞技小说、科幻小说、灵异小说、同人小说、其他小说，各种分类更新快，界面简介清晰广告位多适合投放各种广告。 百度权重6，移动权重6(点击查看)，带手机站、带多站点采集、喜欢的站长快下手里吧，名额有限。 日常维护： 1、自动采集 2、自动发布、自动更新，伪静态加缓存，适合高访问量，免去手工更新的麻烦工作。 3、系统开源，不限域名 4、开发工期：40天 5、92不上架销售 6、火车头破解版采集 演示站：http://kong.92demo.com/ 手机站：http://m.kong.92demo.com/</p>
                </div>
                <div class="other">
                    <el-table
                    style="width:800px"
                    border
                    >
                        <el-table-column
                        prop="info"
                        label="简介"
                        width="380"
                        >
                        </el-table-column>

                    <el-table-column
                        prop="properties"
                        label="概述"
                        width="380"
                        >
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
        
        </el-drawer>

</template>




<script>
import { getCurrentInstance, onMounted, ref} from 'vue';
export default {
  
  setup(){
      const ShowDrawer=ref(false);
      const instance=getCurrentInstance();
      onMounted(()=>{
          const allbus=instance.appContext.config.globalProperties.$allbus 

          allbus.on("alterStates",()=>{
              ShowDrawer.value=true;

          })


      })
      return {
          ShowDrawer
      }

  }
};
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.advice
    background #F2F2F2
    padding 12px
    p 
        font-size 13px
        &:first-child 
            margin 4px 0
        &:last-child 
            line-height 24px
.other
    .el-table
        margin 0 auto
        .el-table-column
            text-align center
    margin 20px 0
</style>