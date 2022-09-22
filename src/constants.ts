import type {RouteRecordRaw} from 'vue-router'
import pages from '~pages'

export const MENUS: RouteRecordRaw[] = []
;(function generateMenus() {
  if (MENUS.length) return

  const routes = pages
    // Simple clone
    .map(page => {
      return {
        ...page,
      }
    })
    .sort((a, b) => {
      let sortA = a.meta!.sortInMenu as number
      let sortB = b.meta!.sortInMenu as number
      return sortA - sortB
    })

  const map = new Map<string, RouteRecordRaw>()

  for (let index = 0; index < routes.length; index++) {
    const route = routes[index]
    map.set(route.name as string, route)
  }

  for (let index = 0; index < routes.length; index++) {
    const route = routes[index]
    const {path} = route

    // Skip `hideInMenu`
    if (route.meta?.hideInMenu) {
      continue
    }

    const segments = path.split('/').filter(Boolean)
    if (segments.length === 1) {
      MENUS.push(route)
    } else {
      for (let index = 1; index < segments.length; index++) {
        const segment = segments[index - 1] // parent segment
        const parent = map.get(segment)!
        parent.children = (parent.children || []).concat(route)
      }
    }
  }
})()
