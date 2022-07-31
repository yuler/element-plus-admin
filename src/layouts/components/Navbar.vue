<template>
	<div w="full" h="full" flex items="center" justify="between">
		<div h="full" flex>
			<div h="full" px="4" cursor="pointer">
				<el-icon size="18" h="full">
					<icon-ant-design-MenuUnfoldOutlined />
				</el-icon>
			</div>
			<div h="full" px="4" cursor="pointer">
				<el-icon size="18" h="full">
					<icon-ant-design-ReloadOutlined />
				</el-icon>
			</div>
			<el-breadcrumb ml-2 flex items="center">
				<el-breadcrumb-item :to="{path: '/'}">
					homepage
				</el-breadcrumb-item>
				<el-breadcrumb-item>
					<a href="/">promotion management</a>
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div h="full" flex>
			<div h="full" px="4" cursor="pointer">
				<el-icon size="18" h="full">
					<icon-ant-design-SearchOutlined />
				</el-icon>
			</div>
			<div h="full" px="4" cursor="pointer">
				<el-icon size="18" h="full">
					<icon-ant-design-GithubOutlined />
				</el-icon>
			</div>
			<div h="full" px="4" cursor="pointer">
				<el-icon size="18" h="full">
					<icon-ant-design-LockOutlined />
				</el-icon>
			</div>
			<div h="full" px="4" flex items="center" cursor="pointer">
				<el-avatar rounded>
					xxx
					<template #icon>
						<icon-ant-design-UserOutlined />
					</template>
				</el-avatar>
			</div>
			<div h="full" px="4" cursor="pointer">
				<el-icon size="18" h="full">
					<icon-ant-design-SettingOutlined />
				</el-icon>
			</div>
		</div>
	</div>
</template>
