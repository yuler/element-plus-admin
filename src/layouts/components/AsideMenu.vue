<script lang="ts" setup>
import type {RouteRecordRaw} from 'vue-router'
import pages from '~pages'

import {config} from '~/config'
import {toArray} from '~/utils'

const props = defineProps({
  collapsed: Boolean,
})
defineEmits(['update:collapsed'])

const menus = ref<RouteRecordRaw[]>([])

onMounted(() => {
  // Generate menus from routes
  const routes = pages.map(page => ({...page})) // simple clone
  const map = new Map<string, RouteRecordRaw>()

  for (let index = 0; index < routes.length; index++) {
    const route = routes[index]
    map.set(route.name as string, route)
  }

  for (let index = 0; index < routes.length; index++) {
    const route = routes[index]
    const {path} = route

    const segments = path.split('/').filter(Boolean)
    if (segments.length === 1) {
      menus.value.push(route)
    } else {
      for (let index = 1; index < segments.length; index++) {
        const segment = segments[index - 1] // parent segment
        const parent = map.get(segment)!
        parent.children
          ? parent.children.push(route)
          : (parent.children = toArray(route))
      }
    }
  }
})

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
/* Some colors are not exposed via css variable */
:deep(.el-sub-menu__title:hover),
:deep(.el-menu-item:hover) {
  color: v-bind('config.menu.hoverTextColor');
}
:deep(.el-menu-item.is-active) {
  background-color: v-bind('config.menu.activeBgColor');
}
</style>
