import Cookies from 'js-cookie'
import {defineStore} from 'pinia'

interface Sidebar {
	opened: boolean
	withoutAnimation: boolean
}
type Device = 'desktop' | 'mobile'
type Size = 'medium' | 'small'

export const useAppStore = defineStore('app', () => {
	const sidebar = ref<Sidebar>({
		opened: Cookies.get('APP_SIDEBAR_OPENED') !== 'false',
		withoutAnimation: false,
	})
	const device = ref<Device>('desktop')
	const size = ref<Size>('medium')

	function setDevice(value: Device) {
		device.value = value
	}
	function toggleSidebar() {
		sidebar.value.opened = !sidebar.value.opened
		sidebar.value.withoutAnimation = false
		if (sidebar.value.opened) {
			Cookies.set('APP_SIDEBAR_OPENED', 'true')
		} else {
			Cookies.set('APP_SIDEBAR_OPENED', 'false')
		}
	}
	function closeSideBar({withoutAnimation}: {withoutAnimation: boolean}) {
		sidebar.value.opened = false
		sidebar.value.withoutAnimation = withoutAnimation
	}
	function setSize(value: Size) {
		size.value = value
	}

	return {
		sidebar,
		device,
		size,
		toggleSidebar,
		closeSideBar,
		setDevice,
		setSize,
	}
})
