<route lang="yaml">
meta:
  hideInMenu: true
  title: 404
</route>

<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button btn text-sm m="3 t8" @click="router.back()">返回主页</button>
    </div>
  </main>
</template>
