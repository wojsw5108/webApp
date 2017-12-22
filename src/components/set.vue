<template>
  <div style="position: absolute;left:0;top:0;width:100%;height:100vh;background: #fff">
      <header class="mui-bar mui-bar-nav">
          <a class="mui-icon mui-icon-left-nav mui-pull-left" @click="back"></a>
          <a class="mui-icon mui-icon-closeempty mui-pull-right" @click="close"></a>
          <h1 class="mui-title">设置</h1>
      </header>
      <transition name="fade" mode="out-in">
      <router-view>

      </router-view>
      </transition>
  </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {}
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
            close(){
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>

</style>