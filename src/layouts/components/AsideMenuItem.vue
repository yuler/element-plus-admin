<script lang="ts" setup>
import type {RouteRecordRaw} from 'vue-router'
import {capitalize} from '~/utils'

defineProps<{
  item: RouteRecordRaw
}>()
</script>

<template>
  <template v-if="!item.children">
    <router-link :to="item.path">
      <el-menu-item :index="item.path">
        <template #title>
          <AsideMenuItemTitle
            :title="item.meta?.title?.toString() as string || capitalize(item.name as string)"
            :icon="(item.meta?.icon as string)"
          />
        </template>
      </el-menu-item>
    </router-link>
  </template>
  <el-sub-menu v-else ref="subMenu" :index="item.path">
    <template #title>
      <AsideMenuItemTitle
        :title="item.meta?.title?.toString() as string || capitalize(item.name as string)"
        :icon="(item.meta?.icon as string)"
      />
    </template>
    <AsideMenuItem
      v-for="child in item.children"
      :key="child.path"
      :item="child"
    />
  </el-sub-menu>
</template>
