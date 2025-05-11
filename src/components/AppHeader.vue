<script setup lang="ts">

</script>

<template>
  <div>
    <div id="appheader">
      <!-- 左侧内容 -->
      <div>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25"/>
        <a>左侧内容</a>
      </div>
      <!-- 中部填充 -->
      <div style="flex-grow: 1"></div>
      <!-- 右侧内容 -->
      <div>
        <a>右侧内容</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#appheader {
  display: flex;
  flex-direction: row;
}
</style>
