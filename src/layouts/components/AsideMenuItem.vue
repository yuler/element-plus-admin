<script lang="ts" setup>
import type {RouteRecordRaw} from 'vue-router'

// props
defineProps<{
  item: RouteRecordRaw
  isNest?: Boolean
}>()
</script>

<template>
  <template v-if="!item.children">
    <router-link :to="item.path">
      <el-menu-item :index="item.path">
        <template #title>
          {{ item.meta?.title }}
        </template>
      </el-menu-item>
    </router-link>
  </template>
  <el-sub-menu v-else ref="subMenu" :index="item.path">
    <template #title>
      <!-- TODO: Support w/ icon -->
      {{ item.meta?.title || item.name }}
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
