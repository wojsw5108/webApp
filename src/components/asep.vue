<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="item in jieshou">
                <a class="mui-navigate-right">
                    {{item.con}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                jieshou:[]
            }
        },
        created(){
            var that=this;
            var mid2=JSON.parse(sessionStorage.IndexLoginInfo).id
            fetch("/jieshou?mid2="+mid2).then(function(e){
                return e.json();
            }).then(function(e){
                that.jieshou=e;
            })
        }
    }
</script>

<style scoped>

</style>