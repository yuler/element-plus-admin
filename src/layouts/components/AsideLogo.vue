<script lang="ts" setup>
import {config} from '~/config'

defineProps({
	collapsed: Boolean,
})
</script>

<template>
	<div h="64px" flex justify="center" items="center" text="white">
		<img
			:src="config.aside.logo"
			alt="Aside Logo"
			:class="{'mr-2': !collapsed}"
			w="auto"
			h="32px"
		/>
		<h1 v-show="!collapsed" class="title">{{ config.aside.title }}</h1>
	</div>
</template>
