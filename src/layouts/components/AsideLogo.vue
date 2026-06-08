<script lang="ts" setup>
import {getThemeConfig} from '~/config'

defineProps({
  collapsed: Boolean,
})

const appStore = useAppStore()
const {theme} = storeToRefs(appStore)
const config = computed(() => getThemeConfig(theme.value))
</script>

<template>
  <div
    class="aside-logo"
    h="64px"
    flex
    justify="center"
    items="center"
    text="white"
  >
    <img
      v-if="config.aside.logo"
      :src="config.aside.logo"
      alt="Aside Logo"
      :class="{'mr-2': !collapsed}"
      w="auto"
      h="32px"
    />
    <span
      v-else
      class="aside-logo__mark"
      :class="{'mr-2': !collapsed}"
      :style="{
        background: config.aside.markBgColor,
        color: config.aside.markColor,
      }"
    >
      {{ config.aside.mark }}
    </span>
    <h1 v-show="!collapsed" class="title">{{ config.aside.title }}</h1>
  </div>
</template>

<style scoped>
.aside-logo {
  overflow: hidden;
}

.aside-logo__mark {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.42),
    0 8px 18px rgb(0 0 0 / 0.16);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 32px;
  font-size: 18px;
  font-weight: 700;
}

.title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
}
</style>
