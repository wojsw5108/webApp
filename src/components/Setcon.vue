<template>
    <ul class="mui-table-view" style="padding-top:44px;">
        <li class="mui-table-view-cell">
            <router-link to="resetPass" class="mui-navigate-right">
                修改密码
            </router-link>
        </li>
        <li class="mui-table-view-cell">
            <a class="mui-navigate-right">
                修改头像
            </a>
        </li>
        <li class="mui-table-view-cell">
            <router-link to="/echarts" class="mui-navigate-right">
                查看日志情况
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {}
        }
    }
</script>

<style scoped>

</style>