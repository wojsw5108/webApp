<template>
    <div class="mui-bar1 mui-bar-tab1">
        <router-link to="/" class="mui-tab-item1 mui-active" exact>
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/phone" exact>

            <span class="mui-icon mui-icon-phone"></span>
            <span class="mui-tab-label" >
                电话
            </span>
        </router-link>
        <router-link to="/log" class="mui-tab-item1" exact>
            <span class="mui-icon mui-icon-email"></span>
            <span class="mui-tab-label">日志</span>
        </router-link>
        <router-link to="/set" class="mui-tab-item1" exact>
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">设置</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {}
        },
        methods:{

        }
    }
</script>

<style scoped>
    .mui-bar-tab1 {
        bottom: 0;
        display: table;
        width: 100%;
        height: 50px;
        padding: 0;
        table-layout: fixed;
        border-top: 0;
        border-bottom: 0;
        -webkit-touch-callout: none;
    }
    .mui-bar1 {
        position: fixed;
        z-index: 10;
        right: 0;
        left: 0;
        height: 44px;
        padding-right: 10px;
        padding-left: 10px;
        border-bottom: 0;
        background-color: #f7f7f7;
        -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .85);
        box-shadow: 0 0 1px rgba(0, 0, 0, .85);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .mui-bar-tab1 .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab1 .mui-tab-item1 .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .mui-bar-tab1 .mui-tab-item1 .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .active{
        color:cornflowerblue!important;
    }

</style>