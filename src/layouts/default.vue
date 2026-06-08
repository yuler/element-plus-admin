<script lang="ts" setup>
import {getThemeConfig} from '~/config'

setupWindowResize()

const appStore = useAppStore()
const {asideToggle, drawerCollapse, drawerToggle} = appStore
const {device, asideCollapsed, drawerDisplay, theme} = storeToRefs(appStore)
const config = computed(() => getThemeConfig(theme.value))
const drawerBgColor = computed(() => config.value.drawer.bgColor)
const drawerPadding = computed(() => config.value.drawer.padding)

function onToggleMenuCollapsed() {
  if (device.value === 'mobile') {
    drawerToggle()
  } else {
    asideToggle()
  }
}
</script>

<template>
  <el-container class="app-layout">
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

    <el-container
      class="app-layout__body"
      :style="{background: config.layout.bgColor}"
    >
      <el-header
        class="app-layout__header"
        h="64px"
        :style="{
          background: config.layout.headerBgColor,
          borderColor: config.layout.headerBorderColor,
        }"
      >
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
.app-layout,
.app-layout__body {
  min-height: 100vh;
}

.app-layout__header {
  border-bottom: 1px solid transparent;
  box-sizing: border-box;
}

.el-drawer {
  --el-drawer-bg-color: v-bind('drawerBgColor') !important;
  --el-drawer-padding-primary: v-bind('drawerPadding') !important;
}
</style>
