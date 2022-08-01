<script lang="ts" setup>
const collapsed = ref<boolean>(false)
const asideDrawder = ref<boolean>(false)
</script>

<template>
	<el-container>
		<el-aside w="auto" min-h="100vh" bg="[#001428]">
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
