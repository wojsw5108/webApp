<template>
    <div style="position: absolute;left:0;top:0;width:100%;height:100vh">
        <Header1></Header1>
        <List class="list" :data="datas" :index="index"></List>
    </div>
</template>

<script>
    import List from "@/components/list"
    import Header1 from "@/components/header"
    export default {
        name: 'hello',
        components:{List,Header1},
        data () {
            return {
                datas:[],
                index:["phone","name"]
            }
        },

        mounted(){
            var that=this;
            fetch("/phone").then(function(e){
                return e.json();
            }).then(function(e){
                console.log(e);
                that.datas=e;
            })
        }
    }
</script>

<style scoped>
  .list{
      margin-top:44px;
  }
</style>