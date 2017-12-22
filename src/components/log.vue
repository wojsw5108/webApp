<template>
   <div style="position: absolute;left:0;top:0;;width:100%;height:100vh">
       <header class="mui-bar mui-bar-nav">
           <a class=" mui-icon mui-icon-left-nav mui-pull-left" @click="back"></a>
           <h1 class="mui-title">日志</h1>
       </header>
       <div style="padding-top:50px;">

       <router-link to="/log" type="button" class="mui-btn mui-btn-outlined">已发送</router-link>
       <router-link to="/asep" type="button" class="mui-btn mui-btn-outlined">已接收</router-link>
       <router-link to="wri" type="button" class="mui-btn mui-btn-outlined">写日志</router-link>
       </div>
       <router-view> </router-view>
   </div>
</template>

<script>
    /*
    *   id  m1(发送者) m2(接受者) con (内容) time
    * */
    export default {
        name: 'hello',
        data () {
            return {}
        },
        mounted(){
          console.log(this.$root.abc)
        },
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .active{
        color:red;
    }
</style>