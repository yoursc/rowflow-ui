<script setup lang="ts">
const view_list = [
  {name: "view 1", id: 1},
  {name: "view 2", id: 2},
  {name: "view 3", id: 3},
  {name: "view 4", id: 4},
  {name: "view 5", id: 5},
]
</script>

<template>
  <div id="app-table">
    <!-- 表-视图选项卡 -->
    <div id="app-table-view_navbar">
      <!-- 导航菜单栏mini -->
      <div>nav</div>
      <!-- 视图选项卡 -->
      <div id="app-table-view_navbar-view_list">
        <div v-for="view in view_list" :key="view.id">
          <button>{{ view.name }}</button>
        </div>
      </div>
      <!-- 新建视图 -->
      <div>
        <button>+</button>
      </div>
    </div>
    <!-- 表-菜单栏 -->
    <div id="app-table-menu_bar">
      <button>插入数据</button>
      <button>字段配置</button>
      <button>视图配置</button>
      <button>筛选</button>
      <button>分组</button>
      <button>排序</button>
    </div>
    <!-- 表-数据区 -->
    <div id="app-table-main">
      <p>表格数据</p>
      <p style="background: var(--bs-body-color)">body-color</p>
      <p style="background: var(--bs-body-color-rgb)">body-color-rgb</p>
      <p style="background: var(--bs-body-bg)">body-bg</p>
      <p style="background: var(--bs-body-bg-rgb)">body-bg-rgb</p>

      <p style="background: var(--bs-emphasis-color)">emphasis-color</p>
      <p style="background: var(--bs-emphasis-color-rgb)">emphasis-color-rgb</p>

      <p style="background: var(--bs-secondary-color)">secondary-color</p>
      <p style="background: var(--bs-secondary-color-rgb)">secondary-color-rgb</p>
      <p style="background: var(--bs-secondary-bg)">secondary-bg</p>
      <p style="background: var(--bs-secondary-bg-rgb)">secondary-bg-rgb</p>

      <p style="background: var(--bs-tertiary-color)">tertiary-color</p>
      <p style="background: var(--bs-tertiary-color-rgb)">tertiary-color-rgb</p>
      <p style="background: var(--bs-tertiary-bg)">tertiary-bg</p>
      <p style="background: var(--bs-tertiary-bg-rgb)">tertiary-bg-rgb</p>

    </div>
    <!-- 表-汇总页脚  -->
    <div id="app-table-status">
      <a>页脚数据汇总区</a>
    </div>
  </div>
  <!-- TODO:表-选中数据统计区（浮动） -->
</template>

<style scoped>
#app-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 16px 16px 0;
  background: var(--bs-secondary-bg);
}

#app-table-view_navbar {
  display: flex;
  flex-direction: row;
  height: 30px;
}

#app-table-view_navbar-view_list {
  display: flex;
  flex-direction: row;
}

#app-table-menu_bar {
  padding: 3px;
  background: var(--bs-body-bg);
}

#app-table-main {
  flex-grow: 1;
  overflow-y: auto;
  background: var(--bs-body-bg);
}

#app-table-status {
  background: var(--bs-body-bg);
}
</style>
