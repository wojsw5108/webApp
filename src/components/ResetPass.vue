<template>
    <form class="mui-input-group" style="padding-top:44px;">
           {{passmessage}}
        <div class="mui-input-row">
            <label>原始密码</label>
            <input type="text" class="mui-input-clear" placeholder="请输入原始密码" v-model="pass1">
        </div>
        <div class="mui-input-row">
            <label>新密码</label>
            <input type="text" class="mui-input-password" placeholder="请输入密码" v-model="pass2">
        </div>

        <div class="mui-input-row">
            <label>确认密码</label>
            <input type="text" class="mui-input-password" placeholder="请输入密码" v-model="pass3">
        </div>
        <div class="mui-button-row">
            <button type="button" class="mui-btn mui-btn-primary" @click="submit" >确认</button>
            <button type="button" class="mui-btn mui-btn-danger" >取消</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                pass1:"",
                pass2:"",
                pass3:"",
                passmessage:""
            }
        },
        methods:{
            submit(){
                if(this.pass1==""){
                    this.passmessage="旧密码必须输入";
                    return;
                }
                if(this.pass2==""){
                    this.passmessage="新密码必须输入";
                    return;
                }
                if(this.pass3==""){
                    this.passmessage="确认密码要输入";
                    return;
                }
                if(this.pass2!=this.pass3){
                    this.passmessage="两次密码要一致";
                    return;
                }
                this.passmessage="";

                fetch("/resetpass",{
                    method:"post",
                    headers:{
                        "content-type":"application/x-www-form-urlencoded"},
                    body:`pass1=${this.pass1}&pass2=${this.pass2}&pass3=${this.pass3}&id=`+JSON.parse(sessionStorage.IndexLoginInfo).id

                }).then(function(e){
                    return e.text();
                }).then((e)=>{
                    if(e=="ok"){
                        sessionStorage.removeItem("IndexLoginInfo");
                        this.passmessage=("请重新登录");
                        this.$router.push("/")
                    }else{
                        this.passmessage=("修改失败");
                        this.pass1="";
                        this.pass2="";
                        this.pass3="";
                    }
                })


            }
        }
    }
</script>

<style scoped>

</style>