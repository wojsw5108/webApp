<template>
    <header class="mui-bar mui-bar-nav">
        <router-link to="/" class=" mui-icon mui-icon-home mui-pull-left"></router-link>

        <router-link to="/login" class="mui-icon mui-icon-contact mui-pull-right" v-if="!name"></router-link>
         <span class=" mui-pull-right" v-if="name">{{name}} <span @click="logout">退出</span></span>

        <h1 class="mui-title">标题</h1>
    </header>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                name:sessionStorage.IndexLoginInfo?JSON.parse(sessionStorage.IndexLoginInfo).name:null
            }
        },
        methods:{
            logout(){
                sessionStorage.removeItem("IndexLoginInfo");
                this.name="";
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>

</style>