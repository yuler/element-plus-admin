import Cookies from 'js-cookie'
import {defineStore} from 'pinia'
import {defaultTheme} from '../config'
import type {AppDevice, AppTheme} from '../types'

const APP_THEME = 'APP_THEME'

function normalizeTheme(value: string | undefined): AppTheme {
  return value === 'china' ? value : defaultTheme
}

function applyTheme(value: AppTheme) {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = value
}

export const useAppStore = defineStore('app', () => {
  const theme = ref<AppTheme>(normalizeTheme(Cookies.get(APP_THEME)))
  watch(
    theme,
    value => {
      if (value === defaultTheme) {
        Cookies.remove(APP_THEME)
      } else {
        Cookies.set(APP_THEME, value)
      }
      applyTheme(value)
    },
    {immediate: true},
  )
  function setTheme(value: AppTheme) {
    theme.value = normalizeTheme(value)
  }
  function themeToggle() {
    setTheme(theme.value === 'china' ? defaultTheme : 'china')
  }

  const device = ref<AppDevice>('desktop')
  function setDevice(value: AppDevice) {
    device.value = value
  }

  const asideCollapsed = ref<boolean>(!!Cookies.get('APP_ASIDE_COLLAPSED'))
  function asideCollapse() {
    Cookies.set('APP_ASIDE_COLLAPSED', '1')
    asideCollapsed.value = false
  }
  function asideToggle() {
    asideCollapsed.value = !asideCollapsed.value
    if (asideCollapsed.value) {
      Cookies.set('APP_ASIDE_COLLAPSED', '1')
    } else {
      Cookies.remove('APP_ASIDE_COLLAPSED')
    }
  }

  const drawerDisplay = ref<boolean>(false)
  function drawerCollapse() {
    drawerDisplay.value = false
  }
  function drawerToggle() {
    drawerDisplay.value = !drawerDisplay.value
  }

  return {
    theme,
    setTheme,
    themeToggle,
    device,
    asideCollapsed,
    asideCollapse,
    asideToggle,
    setDevice,
    drawerDisplay,
    drawerCollapse,
    drawerToggle,
  }
})
