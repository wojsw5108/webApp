<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell" v-for="item in datas">
            <a class="mui-navigate-right" :href="'tel:'+item[ins[0]]">
                {{item[ins[1]]}} {{item[ins[0]]}}
            </a>
        </li>
    </ul>

</template>

<script>
    export default {
        name: 'hello',
        props:["data","index"],
        data () {
            return {
                page:0,
                datas:[],
                ins:this.index,
                abc:"aaa"
            }
        },
        watch:{
           data(){

               this.datas=this.data;
            }
        }
    }
</script>

<style scoped>

</style>