import type {AppDevice} from '~/types'

export function setupWindowResize() {
  onMounted(() => {
    detectDevice()
    // TODO: throttle
    window.addEventListener('resize', detectDevice)
  })
}

function detectDevice() {
  const rect = document.body.getBoundingClientRect()
  // Breakpoints
  // refs: https://getbootstrap.com/docs/4.0/layout/grid/#grid-options
  const device: AppDevice =
    rect.width > 992 ? 'desktop' : rect.width > 720 ? 'tablet' : 'mobile'

  const {drawerCollapse, setDevice} = useAppStore()
  if (device === 'mobile') {
    drawerCollapse()
  }
  setDevice(device)
}
