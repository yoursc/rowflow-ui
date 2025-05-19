<script setup lang="ts">
import {RouterLink} from "vue-router";

const tab_list = [
  {name: "Tab 1", href: "/"},
  {name: "Tab 2", href: "/"},
  {name: "Login", href: "/login"},
]

</script>

<template>
  <div id="appbody-nav">
    <!-- 搜索栏 -->
    <div>
      <p>搜索栏</p>
    </div>
    <!-- 窗体列表 -->
    <div id="app-table-menu">
      <RouterLink v-for="li in tab_list" :to="li.href" :key="li.name">{{ li.name }}</RouterLink>
    </div>
    <!-- 新建菜单 -->
    <div>
      <p>新建菜单</p>
    </div>
  </div>
</template>

<style scoped>
#appbody-nav {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--bs-tertiary-color);
}

#app-table-menu {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
}
</style>
