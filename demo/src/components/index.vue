<template>
    <div>
        <el-container class="wrap">
            <el-header></el-header>
            <el-container class="main">
                <el-aside style="width: 150px">
                    <el-menu
                        :default-active="defaultacive"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router
                    >
                        <el-submenu :index="item.title"  v-for="item of menus" :key="item.id">
                            <template slot="title"><i :class="item.icon"></i>{{item.title}}</template>
                            <el-menu-item-group v-for="subitem of item.children" :key="subitem.id">
                                <el-menu-item :index="subitem.url" style="min-width:150px">{{subitem.title}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            menus:[],
            defaultacive:''
        }
    },
    mounted(){
        axios.get('/api/menulist',{params:{istree:true}}).then((res)=>{
            this.menus = res.data.list
        })
        this.defaultacive=this.$route.meta.selected
    }
};
</script>

<style scoped>
.wrap {
    width: 100vw;
    height: 100vh;
}
.el-header {
    background-color: aquamarine;
}
.el-aside {
    background-color: rgb(84, 92, 100);
    overflow: visible;
}
.main {
    flex: 1;
}
</style>