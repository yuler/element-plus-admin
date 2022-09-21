<script lang="ts" setup>
import type {RouteRecordRaw} from 'vue-router'
import {config} from '~/config'
import {MENUS} from '~/constants'

const props = defineProps({
  collapsed: Boolean,
})
defineEmits(['update:collapsed'])

const menus = ref<RouteRecordRaw[]>(MENUS)

watch(
  () => props.collapsed,
  () => {
    // TODO:
    console.log(props.collapsed)
  },
)
</script>

<template>
  <el-menu
    :collapse="collapsed"
    :style="{
      '--el-menu-text-color': config.menu.textColor,
      '--el-menu-active-color': config.menu.activeTextColor,
      '--el-menu-bg-color': config.menu.bgColor,
      '--el-menu-hover-bg-color': config.menu.hoverBgColor,
      '--el-menu-acitve-bg-color': config.menu.activeBgColor,
      '--el-menu-border-color': config.menu.borderColor,
    }"
    :default-active="$route.path"
  >
    <AsideMenuItem v-for="menu in menus" :key="menu.path" :item="menu" />
  </el-menu>
</template>

<style scoped>
/* TODO: some styles */
/* Some colors are not exposed via css variable */
:deep(.el-sub-menu__title:hover),
:deep(.el-menu-item:hover) {
  color: v-bind('config.menu.hoverTextColor');
}
:deep(.el-menu-item.is-active) {
  background-color: v-bind('config.menu.activeBgColor');
}
</style>
