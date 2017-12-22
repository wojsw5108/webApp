<template>
        <div id="box" style="padding-top: 44px;width:100%;height:100vh">
             图标
        </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {}
        },
        mounted(){
            var echarts=this.$root.echarts;
            var myChart = echarts.init(document.getElementById('box'));

            var id=JSON.parse(sessionStorage.IndexLoginInfo).id;
            fetch("/echarts?id="+id).then(function(e){
               return e.json();
            }).then(function(e){
                myChart.setOption({
                    title: {
                        text: '日志图表'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['已发送', '已接收']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: e
                    }]
                });
            })
        }
    }
</script>

<style scoped>

</style>