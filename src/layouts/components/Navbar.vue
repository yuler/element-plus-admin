<script lang="ts" setup>
defineProps({
  collapsed: Boolean,
})
defineEmits(['update:collapsed'])

const appStore = useAppStore()
const {theme} = storeToRefs(appStore)
const isChinaTheme = computed({
  get: () => theme.value === 'china',
  set: value => appStore.setTheme(value ? 'china' : 'default'),
})
const themeTip = computed(() =>
  isChinaTheme.value ? '切换为默认主题' : '切换为中国主题',
)
</script>

<template>
  <div class="w-full h-full flex items-center justify-between">
    <div class="h-full flex">
      <div
        class="h-full px-4 cursor-pointer flex items-center"
        @click="$emit('update:collapsed', !collapsed)"
      >
        <el-icon size="18" class="h-full">
          <icon-ant-design-MenuUnfoldOutlined />
        </el-icon>
      </div>
      <div class="h-full px-4 cursor-pointer flex items-center">
        <el-icon size="18" class="h-full">
          <icon-ant-design-ReloadOutlined />
        </el-icon>
      </div>
      <el-breadcrumb class="ml-2 flex items-center">
        <el-breadcrumb-item :to="{path: '/'}"> homepage </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">promotion management</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="h-full flex">
      <div class="h-full px-4 flex items-center">
        <el-tooltip :content="themeTip" placement="bottom">
          <el-switch
            v-model="isChinaTheme"
            class="theme-switch"
            inline-prompt
            active-text="中"
            inactive-text="默"
            :aria-label="themeTip"
          />
        </el-tooltip>
      </div>
      <div class="h-full px-4 cursor-pointer flex items-center">
        <el-icon size="18" class="h-full">
          <icon-ant-design-SearchOutlined />
        </el-icon>
      </div>
      <div class="h-full px-4 cursor-pointer flex items-center">
        <el-icon size="18" class="h-full">
          <icon-ant-design-GithubOutlined />
        </el-icon>
      </div>
      <div class="h-full px-4 cursor-pointer flex items-center">
        <el-icon size="18" class="h-full">
          <icon-ant-design-LockOutlined />
        </el-icon>
      </div>
      <div class="h-full px-4 flex items-center cursor-pointer">
        <el-avatar class="rounded">
          xxx
          <template #icon>
            <icon-ant-design-UserOutlined />
          </template>
        </el-avatar>
      </div>
      <div class="h-full px-4 cursor-pointer flex items-center">
        <el-icon size="18" class="h-full">
          <icon-ant-design-SettingOutlined />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.theme-switch {
  --el-switch-on-color: #bf1e2e;
  --el-switch-off-color: #2d8cf0;
}
</style>
