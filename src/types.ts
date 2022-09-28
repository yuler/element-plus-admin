import type {App} from 'vue'
import type {Router, RouteRecordRaw} from 'vue-router'

export type UserModule = (ctx: {
  app: App<Element>
  router: Router
  routes: RouteRecordRaw[]
  isClient: boolean
}) => void

export type AppDevice = 'desktop' | 'tablet' | 'mobile'
