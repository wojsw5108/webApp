<template>
    <div>
        {{message}}
        <select name="" id="" @change="change" ref="select">
            <option value="">选择接收人</option>
            <option v-for="item in members" :value="item.id">{{item.name}}</option>
        </select>
        <textarea name="" id="" cols="30" rows="10" ref="con" v-model="con">

        </textarea>
        <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined" @click="submit">提交</button>
        <button type="button" class="mui-btn mui-btn-outlined">取消</button>

    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                members:[],
                mid2:'',
                mid1:'',
                message:"",
                con:""
            }
        },
        created(){
            var that=this;
            fetch("/selectMem").then(function(e){
                return e.json();
            }).then(function(e){
                console.log(e);
                that.members=e;
            })
        },
        methods:{
            change(){
               this.mid2=this.$refs["select"].value;
               this.mid1=JSON.parse(sessionStorage.IndexLoginInfo).id;
            },

            submit(){
                var that=this;
                this.con=this.$refs["con"].value;
                fetch("/submitLog?mid1="+this.mid1+"&mid2="+this.mid2+"&con="+that.con).then(function(e){
                    return e.text();

                }).then(function(e){
                    if(e=="ok"){
                        that.message="ok";
                        that.con="";
                    }else{
                        that.message="err";
                        that.con="";
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>