import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {type UserModule} from '~/types'

// Setup Element Plus icons
// https://element-plus.org/en-US/component/icon.html#register-all-icons
export const install: UserModule = ({app}) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
