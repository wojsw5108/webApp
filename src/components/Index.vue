<template>
   <div class="Index" style="position: absolute;left:0;top:0;width:100%;height:100vh">
       <transition name="left">
           <router-view>

           </router-view>
       </transition>
       <Tab></Tab>
   </div>
</template>

<script>

    import Tab from "@/components/tab"

    export default {
        name: 'hello',
        components:{Tab},
        data () {
            return {}
        },
        methods:{
            before(){

            }
        }
    }
</script>

<style scoped>

</style>