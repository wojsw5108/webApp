<template>
   <div style="background: blue;height:100vh">
       <pullDown :callback="fn" :autoLoad="true">
           <div> div1</div>
           <ul>
               <li>111</li>
               <li>111</li>
               <li>111</li>
               <li>111</li>
               <li>111</li>
               <li>111</li>
               <li>111</li>
           </ul>
           <div>
               div2
           </div>
       </pullDown>
   </div>
</template>

<script>
    import pullDown from "@/components/pullDown"
    export default {
        name: 'hello',
        components:{pullDown},
        data () {
            return {}
        },
        methods:{
            fn(obj){
              setTimeout(function(){
                  console.log(111);
                  obj.over();
              },2000)
            }
        }
    }
</script>

<style scoped>

</style>