<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppNavMent from "@/components/AppNavMent.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <div id="app-base">
    <!-- 顶部导航容器 -->
    <AppHeader id="app-header"></AppHeader>
    <!-- 主体表格容器 -->
    <div id="app-body">
      <!-- 左侧导航菜单栏 -->
      <div class="col-md-2">
        <AppNavMent></AppNavMent>
      </div>
      <!-- 右侧内容区域 -->
      <div class="col-md-10">
        <RouterView></RouterView>
      </div>
    </div>
    <!-- 底部固定页脚 -->
    <AppFooter id="app-footer"></AppFooter>
  </div>
  <!-- todo 上浮菜单 -->
</template>

<style scoped>
#app-base {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
}

#app-header {
  height: 50px;
  width: 100vw;
  border-bottom: 1px solid var(--bs-tertiary-color);
  padding: 12px;
}

#app-footer {
  height: 25px;
  width: 100vw;
  border-top: 1px solid var(--bs-tertiary-color);
}

#app-body {
  flex-grow: 1;
  height: calc(100vw - 75px);
  display: flex;
  flex-direction: row
}
</style>
