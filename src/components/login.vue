<template>
  <div style="height:100vh">
      <header class="mui-bar mui-bar-nav">
          <router-link to="/" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
          <h1 class="mui-title">登录</h1>
      </header>
      <div class="mui-content">
          <div>{{message}}</div>
          <form id='login-form' class="mui-input-group">
              <div class="mui-input-row">
                  <label>工号</label>
                  <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" v-model="number" autocomplete="off">
              </div>
              <div class="mui-input-row">
                  <label>密码</label>
                  <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="pass">
              </div>
          </form>

          <div class="mui-content-padded">
              <button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>

          </div>
          <div class="mui-content-padded oauth-area">

          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                number:"",
                pass:"",
                message:""
            }
        },
        methods:{
            submit(){
                var that=this;
                var number=this.number;
                var pass=this.pass;
               fetch("/login?number="+number+"&pass="+pass)
                   .then(function(e){
                       return e.json();
                   }).then(function(e){
                       console.log(e);
                       if(e.message=="err"){
                           that.message="登陆出错";
                           that.pass="";
                           that.number="";
                       }else{
                           sessionStorage.IndexLoginInfo=JSON.stringify(e[0]);
                        that.$router.push("/phone")
                       }
               })
            }
        }
    }
</script>

<style scoped>

</style>