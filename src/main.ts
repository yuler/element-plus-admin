import {ViteSSG} from 'vite-ssg'
import App from './App.vue'
import {setupLayouts} from 'virtual:generated-layouts'
import pages from '~pages'
import type {UserModule} from './types'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'element-plus/theme-chalk/el-var.css'
// TODO: Dynamic import when is drak theme
// import 'element-plus/theme-chalk/dark/css-vars.css'
import './main.css'

const routes = setupLayouts(pages)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {routes, base: import.meta.env.BASE_URL},
  ctx => {
    // install all modules under `modules/`
    Object.values(
      import.meta.glob<{install: UserModule}>('./modules/*.ts', {
        eager: true,
      }),
    ).forEach(i => i.install?.(ctx))
  },
)
