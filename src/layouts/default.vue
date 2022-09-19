<script lang="ts" setup>
import {config} from '~/config'

const collapsed = ref<boolean>(false)
const asideDrawder = ref<boolean>(false)
</script>

<template>
  <el-container>
    <el-aside
      translate="width-ease-200"
      min-h="100vh"
      :style="{background: config.aside.bgColor}"
      :width="collapsed ? 'auto' : config.aside.width"
    >
      <el-scrollbar>
        <AsideLogo :collapsed="collapsed" />
        <AsideMenu v-model:collapsed="collapsed" />
      </el-scrollbar>
    </el-aside>

    <el-drawer v-model="asideDrawder" direction="ltr" :size="64">
      <AsideLogo :collapsed="collapsed" />
      <AsideMenu
        v-model:collapsed="collapsed"
        @clickMenuItem="collapsed = false"
      />
    </el-drawer>

    <el-container bg="#f5f7f9">
      <el-header h="64px" bg="white">
        <Navbar v-model:collapsed="collapsed" />
      </el-header>
      <el-main>
        <TabsView />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
