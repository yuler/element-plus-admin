<script lang="ts" setup>
const props = defineProps({
	collapsed: Boolean,
})
defineEmits(['update:collapsed'])

watch(
	() => props.collapsed,
	() => {
		console.log(props.collapsed)
	},
)
</script>

<template>
	<el-menu bg="transparent" :collapse="collapsed">
		<el-sub-menu index="1">
			<template #title>
				<icon-ep-setting />
				<span>Navigator One</span>
			</template>
			<el-menu-item-group>
				<!-- <template #title>Group 1</template> -->
				<el-menu-item index="1-1">Option 1</el-menu-item>
				<el-menu-item index="1-2">Option 2</el-menu-item>
			</el-menu-item-group>
		</el-sub-menu>
	</el-menu>
</template>
