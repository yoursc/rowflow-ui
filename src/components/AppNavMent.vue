<script setup lang="ts">
import {RouterLink} from "vue-router";

const tab_list = [
  {name: "Tab 1", href: "/"},
  {name: "Tab 2", href: "/"},
]

</script>

<template>
  <div style="display: flex; flex-direction: column;height: 100%;width: 100%">
    <!-- 搜索栏 -->
    <div>
      <p>搜索栏</p>
    </div>
    <!-- 窗体列表 -->
    <div id="app-table-ment">
      <RouterLink v-for="li in tab_list" :to="li.href" :key="li.name">{{ li.name }}</RouterLink>
    </div>
    <!-- 新建菜单 -->
    <div>
      <p>新建菜单</p>
    </div>
  </div>
</template>

<style scoped>
#app-table-ment {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
}
</style>
