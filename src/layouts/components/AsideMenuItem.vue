<script lang="ts" setup>
import type {RouteRecordRaw} from 'vue-router'

// props
defineProps<{
  item: RouteRecordRaw
  isNest?: Boolean
}>()
</script>

<template>
  <el-sub-menu ref="subMenu" :index="item.path">
    <template #title>
      <!-- TODO: Support w/ icon -->
      {{ item.meta?.title }}
      <!-- <item
				v-if="item.meta"
				:icon="item.meta && item.meta.icon"
				:title="item.meta.title"
			/> -->
    </template>
    <AsideMenuItem
      v-for="child in item.children"
      :key="child.path"
      :item="child"
    />
  </el-sub-menu>
</template>
