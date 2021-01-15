<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button @click="$router.push('/menu/add')">添加</el-button>
        <el-table
            :data="arr"
            row-key="id"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
            >>
            <el-table-column
                label="编号"
                prop="id"
                width="50"
            ></el-table-column>
            <el-table-column
                label="菜单名称"
                prop="title"
                width="80"
            ></el-table-column>
            <el-table-column label="菜单类型">
                <template slot-scope="item">
                    <el-tag v-if="item.row.type == 1">目录</el-tag>
                    <el-tag v-else>菜单</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="菜单图标" prop="icon">
                <template slot-scope="item">
                    <i :class="item.row.icon"></i>
                </template>
            </el-table-column>
            <el-table-column label="菜单地址" prop="url"></el-table-column>
            <el-table-column label="状态">
                <template slot-scope="item">
                    <el-tag v-if="item.row.status == 1">启用</el-tag>
                    <el-tag v-else>禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="150">
                <!-- 父组件拿到子组件一条对象的全部信息 -->
                <template slot-scope="data">
                    <el-button size="mini" type="primary">编辑</el-button>
                    <el-button size="mini" type="danger" @click="todel(data)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            arr: [],
        };
    },
    methods: {
        todel(item) {
            axios.post("/api/menudelete", { id: item.row.id }).then((res) => {
                if (res.data.code == 200) {
                    this.arr = res.data.list;
                }
            });
        },
    },
    mounted() {
        axios.get("/api/menulist", { params: { istree: true } }).then((res) => {
            this.arr = res.data.list;
        });
    },
};
</script>

<style>
</style>