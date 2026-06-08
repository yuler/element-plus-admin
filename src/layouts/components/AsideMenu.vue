<script lang="ts" setup>
import type {RouteRecordRaw} from 'vue-router'
import {getThemeConfig} from '~/config'
import {MENUS} from '~/constants'

defineProps({
  collapsed: Boolean,
})
defineEmits(['update:collapsed'])

const menus = ref<RouteRecordRaw[]>(MENUS)
const appStore = useAppStore()
const {theme} = storeToRefs(appStore)
const config = computed(() => getThemeConfig(theme.value))
const hoverTextColor = computed(() => config.value.menu.hoverTextColor)
const activeBgColor = computed(() => config.value.menu.activeBgColor)
</script>

<template>
  <el-menu
    :collapse="collapsed"
    :style="{
      '--el-menu-text-color': config.menu.textColor,
      '--el-menu-active-color': config.menu.activeTextColor,
      '--el-menu-bg-color': config.menu.bgColor,
      '--el-menu-hover-bg-color': config.menu.hoverBgColor,
      '--el-menu-active-bg-color': config.menu.activeBgColor,
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
  color: v-bind('hoverTextColor');
}
:deep(.el-menu-item.is-active) {
  background-color: v-bind('activeBgColor');
}
</style>
