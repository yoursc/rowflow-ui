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
  <div style="display: flex; flex-direction: column;height: 100%">
    <!-- 表-视图选项卡 -->
    <div>
      <button v-for="view in view_list" :key="view.id">{{ view.name }}</button>
      <button>+</button>
    </div>
    <!-- 表-菜单栏 -->
    <div>
      <button>插入数据</button>
      <button>字段配置</button>
      <button>视图配置</button>
      <button>筛选</button>
      <button>分组</button>
      <button>排序</button>
    </div>
    <!-- 表-数据区 -->
    <div style="flex-grow: 1;overflow-y: auto">
      <p>表格数据</p>
      <p>表格数据</p>
    </div>
    <!-- 表-汇总页脚  -->
    <div>
      <a>页脚数据汇总区</a>
    </div>
  </div>
  <!-- TODO:表-选中数据统计区（浮动） -->
</template>

<style scoped>

</style>
