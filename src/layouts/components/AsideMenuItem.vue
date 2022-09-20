<script lang="ts" setup>
import type {RouteRecordRaw} from 'vue-router'
import {capitalize} from '~/utils'

const {drawerCollapse} = useAppStore()

const props = defineProps<{
  item: RouteRecordRaw
}>()

const formatTitle = computed(() => {
  return (
    props.item.meta?.title?.toString() || capitalize(props.item.name as string)
  )
})
</script>

<template>
  <template v-if="!item.children">
    <router-link :to="item.path">
      <el-menu-item :index="item.path" @click="drawerCollapse">
        <el-icon>
          <component :is="item.meta?.icon" />
        </el-icon>
        <template #title>
          {{ formatTitle }}
        </template>
      </el-menu-item>
    </router-link>
  </template>
  <el-sub-menu v-else ref="subMenu" :index="item.path">
    <template #title>
      <el-icon>
        <component :is="item.meta?.icon" />
      </el-icon>
      <span>{{ formatTitle }}</span>
    </template>
    <AsideMenuItem
      v-for="child in item.children"
      :key="child.path"
      :item="child"
    />
  </el-sub-menu>
</template>
