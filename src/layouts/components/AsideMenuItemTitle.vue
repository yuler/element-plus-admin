<script lang="ts" setup>
defineProps<{
  title: string
  icon?: string
}>()
</script>

<template>
  <div>
    <el-icon>
      <component v-if="icon" :is="icon" />
    </el-icon>
    {{ title }}
  </div>
</template>
