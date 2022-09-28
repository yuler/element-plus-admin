import {createHead} from '@vueuse/head'
import {UserModule} from '~/types'

// https://github.com/vueuse/head
export const install: UserModule = ({app}) => {
  const head = createHead()
  app.use(head)
}
