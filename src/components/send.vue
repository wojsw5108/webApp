<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="item in sends">
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
                sends:[]
            }
        },
        created(){
            var that=this;
            var mid1=JSON.parse(sessionStorage.IndexLoginInfo).id
            fetch("/sends?mid1="+mid1).then(function(e){
                return e.json();
            }).then(function(e){
                that.sends=e;
            })
        }
    }
</script>

<style scoped>

</style>