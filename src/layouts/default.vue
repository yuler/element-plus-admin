<script lang="ts" setup>
import {config} from '~/config'

setupWindowResize()

const appStore = useAppStore()
const {asideToggle, drawerCollapse, drawerToggle} = appStore
const {device, asideCollapsed, drawerDisplay} = storeToRefs(appStore)

function onToggleMenuCollapsed() {
  if (device.value === 'mobile') {
    drawerToggle()
  } else {
    asideToggle()
  }
}
</script>

<template>
  <el-container>
    <el-aside
      v-if="device != 'mobile'"
      translate="width-ease-200"
      min-h="100vh"
      :style="{background: config.aside.bgColor}"
      :width="asideCollapsed ? 'auto' : config.aside.width"
    >
      <el-scrollbar>
        <AsideLogo :collapsed="asideCollapsed" />
        <AsideMenu v-model:collapsed="asideCollapsed" />
      </el-scrollbar>
    </el-aside>

    <div v-else fixed w-full h-full @click="drawerCollapse">
      <el-drawer
        v-model="drawerDisplay"
        direction="ltr"
        :size="config.drawer.width"
        :with-header="false"
      >
        <AsideLogo :collapsed="!drawerDisplay" />
        <AsideMenu />
      </el-drawer>
    </div>

    <el-container bg="#f5f7f9">
      <el-header h="64px" bg="white">
        <Navbar @update:collapsed="onToggleMenuCollapsed" />
      </el-header>
      <el-main>
        <TabsView />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
/* TODO: */
.el-drawer {
  --el-drawer-bg-color: v-bind('config.drawer.bgColor') !important;
  --el-drawer-padding-primary: v-bind('config.drawer.padding') !important;
}
</style>
