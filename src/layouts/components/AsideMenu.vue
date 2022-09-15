<script lang="ts" setup>
import {config} from '~/config'

const props = defineProps({
	collapsed: Boolean,
})
defineEmits(['update:collapsed'])

watch(
	() => props.collapsed,
	() => {
		// TODO:
		console.log(props.collapsed)
	},
)
</script>

<template>
	<el-menu
		:collapse="collapsed"
		:style="{
			'--el-menu-text-color': config.menu.textColor,
			'--el-menu-active-color': config.menu.activeTextColor,
			'--el-menu-bg-color': config.menu.bgColor,
			'--el-menu-hover-bg-color': config.menu.hoverBgColor,
			'--el-menu-acitve-bg-color': config.menu.activeBgColor,
			'--el-menu-border-color': config.menu.borderColor,
		}"
	>
		<el-sub-menu index="1">
			<template #title>
				<icon-ep-setting />
				<span>Navigator One</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="1-1">Option 1</el-menu-item>
				<el-menu-item index="1-2">Option 2</el-menu-item>
			</el-menu-item-group>
		</el-sub-menu>
	</el-menu>
</template>

<style scoped>
/* Some colors are not exposed via css variable */
:deep(.el-sub-menu__title:hover),
:deep(.el-menu-item:hover) {
	color: v-bind('config.menu.hoverTextColor');
}
:deep(.el-menu-item.is-active) {
	background-color: v-bind('config.menu.activeBgColor');
}
</style>
