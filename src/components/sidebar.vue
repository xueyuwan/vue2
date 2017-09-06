<template>
  <el-menu default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-document"></i>数据管理</template>
      <el-menu-item index="userList">用户列表</el-menu-item>
      <el-menu-item index="goodsList">商品列表</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-plus"></i>添加数据</template>
      <el-menu-item index="addshops">添加商铺</el-menu-item>
      <el-menu-item index="addgoods">添加商品</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-edit"></i>编辑</template>
      <el-menu-item index="upload">上传图片</el-menu-item>
      <el-menu-item index="texteditor">文本编辑</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
