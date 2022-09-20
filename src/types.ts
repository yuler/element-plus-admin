import {type ViteSSGContext} from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type AppDevice = 'desktop' | 'tablet' | 'mobile'
