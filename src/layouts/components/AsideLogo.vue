<script lang="ts" setup>
import config from '~/config'

defineProps({
	collapsed: Boolean,
})
</script>

<template>
	<div h="64px" flex justify="center" items="center" text="white">
		<img
			:src="config.logo"
			alt="Aside Logo"
			:class="{'mr-2': !collapsed}"
			w="auto"
			h="32px"
		/>
		<h2 v-show="!collapsed" class="title">{{ config.title }}</h2>
	</div>
</template>
