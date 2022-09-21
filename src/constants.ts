import type {RouteRecordRaw} from 'vue-router'
import pages from '~pages'
import {toArray} from './utils'

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
      let sortA: any = a.meta?.sortInMenu
      let sortB: any = b.meta?.sortInMenu
      if (a.meta?.sortInMenu == null) {
        sortA = a.name
      }
      if (b.meta?.sortInMenu == null) {
        sortB = b.name
      }
      if (typeof sortA === 'number' || typeof sortB === 'number') {
        return sortA - sortB
      } else {
        return String(sortA).localeCompare(String(sortB))
      }
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
        parent.children
          ? parent.children.push(route)
          : (parent.children = toArray(route))
      }
    }
  }
})()
