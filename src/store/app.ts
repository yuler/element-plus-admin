import Cookies from 'js-cookie'
import {defineStore} from 'pinia'

interface AsideMenu {
  collapsed: boolean
  withoutAnimation: boolean
}
type Device = 'desktop' | 'tablet' | 'mobile'

export const useAppStore = defineStore('app', () => {
  const asideMenu = ref<AsideMenu>({
    collapsed: !!Cookies.get('APP_ASIDE_MENU_COLLAPSED'),
    withoutAnimation: false,
  })
  const device = ref<Device>('desktop')

  function setDevice(value: Device) {
    device.value = value
  }

  function toggle() {
    asideMenu.value.collapsed = !asideMenu.value.collapsed
    asideMenu.value.withoutAnimation = false
    if (asideMenu.value.collapsed) {
      Cookies.set('APP_ASIDE_MENU_COLLAPSED', '1')
    } else {
      Cookies.remove('APP_ASIDE_MENU_COLLAPSED')
    }
  }

  function collapse({withoutAnimation}: {withoutAnimation: boolean}) {
    asideMenu.value.collapsed = false
    asideMenu.value.withoutAnimation = withoutAnimation
  }

  return {
    asideMenu,
    device,
    toggle,
    collapse,
    setDevice,
  }
})
